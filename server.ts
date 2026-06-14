import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

interface LeadPayload {
  name: string;
  phone: string;
  contact?: string;
  projectType?: string;
  comment?: string;
  website?: string; // honeypot field
}

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for rate-limiting duplicate submissions (60-second window per IP)
const submissionRateLimit = new Map<string, number>();

// Map human-readable project types
const projectTypeLabels: Record<string, string> = {
  landing: "Лендинг",
  corporate: "Корпоративный сайт",
  ecommerce: "Интернет-магазин",
  refactoring: "Доработка текущего сайта",
  consultation: "Пока не знаю, нужна консультация",
};

// Route to handle lead submissions
app.post("/api/leads", async (req, res) => {
  const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "unknown";
  
  try {
    const { name, phone, contact, projectType, comment, website } = req.body as LeadPayload;

    // 1. Honeypot check (anti-spam)
    if (website && website.trim().length > 0) {
      console.warn(`[AntiSpam] Honeypot triggered by IP: ${ip}. Website field: "${website}"`);
      // Return 200 OK to the bot to make it believe submission succeeded, avoiding bot re-tries
      return res.status(200).json({
        success: true,
        message: "Спасибо! Заявка отправлена. Мы скоро свяжемся с вами.",
      });
    }

    // 2. Validate mandatory fields
    if (!name || name.trim().length === 0) {
      return res.status(400).json({ success: false, error: "Пожалуйста, введите ваше имя." });
    }
    if (!phone || phone.trim().length === 0) {
      return res.status(400).json({ success: false, error: "Пожалуйста, введите номер телефона." });
    }

    // 3. Rate limiting check (60-second cooldown per IP or telephone number)
    const now = Date.now();
    const cleanPhone = phone.replace(/\D/g, "");
    const limitKey = `${ip}_${cleanPhone}`;
    const lastSubmission = submissionRateLimit.get(limitKey);

    if (lastSubmission && now - lastSubmission < 60000) {
      const timeLeft = Math.ceil((60000 - (now - lastSubmission)) / 1000);
      console.warn(`[RateLimit] Blocked duplicate submission from IP: ${ip} / Phone: ${cleanPhone}. Seconds left: ${timeLeft}`);
      return res.status(429).json({
        success: false,
        error: `Вы недавно уже отправляли заявку. Попробуйте еще раз через ${timeLeft} сек.`,
      });
    }

    // Save current timestamp for rate-limiting
    submissionRateLimit.set(limitKey, now);

    // 4. Save to Firebase Firestore if configuration exists
    let firestoreLoaded = false;
    let savedLeadId = "local_only";

    try {
      const configPath = path.join(process.cwd(), "firebase-applet-config.json");
      if (fs.existsSync(configPath)) {
        const rawConfig = fs.readFileSync(configPath, "utf-8");
        const firebaseConfig = JSON.parse(rawConfig);
        
        // Ensure it's not the initial untranslated placeholder project ID
        if (firebaseConfig.projectId && !firebaseConfig.projectId.includes("dummy")) {
          const fbApp = initializeApp(firebaseConfig, "tmk_web_backend");
          const db = getFirestore(fbApp, firebaseConfig.firestoreDatabaseId);
          const leadsCol = collection(db, "leads");
          
          const docRef = await addDoc(leadsCol, {
            name: name.trim(),
            phone: phone.trim(),
            contact: (contact || "").trim(),
            projectType: projectType || "consultation",
            comment: (comment || "").trim(),
            createdAt: serverTimestamp(),
          });
          
          savedLeadId = docRef.id;
          firestoreLoaded = true;
          console.log(`[Firestore] Successfully saved lead in Firestore with ID: ${savedLeadId}`);
        }
      }
    } catch (fbErr) {
      console.error("[Firestore] Failed to save lead to Firestore, falling back to local logs:", fbErr);
    }

    // fallback save to simple text file log if Firebase isn't set up yet
    if (!firestoreLoaded) {
      const fallbackLogPath = path.join(process.cwd(), "leads_fallback.log");
      const logEntry = `[${new Date().toISOString()}] Name: ${name} | Phone: ${phone} | Contact: ${contact} | Service: ${projectType} | Comment: ${comment}\n`;
      fs.appendFileSync(fallbackLogPath, logEntry, "utf-8");
      console.log(`[LocalFallback] Lead written to leads_fallback.log due to placeholder Firestore config`);
    }

    // 5. Send Telegram Notification if botanical Telegram tokens are provided
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (tgToken && tgChatId) {
      const displayType = projectTypeLabels[projectType || ""] || projectType || "Консультация";
      
      const messageText = 
`Новая заявка с сайта TMK WEB:
Имя: ${name.trim()}
Телефон: ${phone.trim()}
Контакт: ${(contact || "Не указан").trim()}
Тип проекта: ${displayType}
Комментарий: ${(comment || "Без комментария").trim()}
Дата и время отправки: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} (МСК)`;

      try {
        const tgApiUrl = `https://api.telegram.org/bot${tgToken}/sendMessage`;
        const response = await fetch(tgApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: messageText,
            parse_mode: "HTML",
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("[Telegram] API delivery failure:", errorData);
        } else {
          console.log("[Telegram] Notification sent successfully to channel/chat");
        }
      } catch (tgErr) {
        console.error("[Telegram] Network error sending notification:", tgErr);
      }
    } else {
      console.log("[Telegram] Skipped dispatch; TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in .env");
    }

    return res.status(200).json({
      success: true,
      message: "Спасибо! Заявка отправлена. Мы скоро свяжемся с вами.",
      dbId: savedLeadId,
    });
  } catch (err: any) {
    console.error("[SubmitError] Failed to process lead:", err);
    return res.status(500).json({
      success: false,
      error: "Произошла внутренняя ошибка сервера. Пожалуйста, попробуйте позже.",
    });
  }
});

// Setup hosting and development servers
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

start();
