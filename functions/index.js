/**
 * Firebase Cloud Functions for TMK WEB leads forwarding.
 * Triggers on any new lead write inside Google Cloud/Firebase Firestore,
 * and posts details safely to Telegram using secrets.
 *
 * To deploy:
 * 1. Initialize functions in your firebase CLI: `firebase init functions`
 * 2. Set environment secrets inside your Cloud Functions config:
 *    firebase functions:secrets:set TELEGRAM_BOT_TOKEN="YOUR_BOT_TOKEN"
 *    firebase functions:secrets:set TELEGRAM_CHAT_ID="YOUR_CHAT_ID"
 * 3. Deploy functions using: `firebase deploy --only functions`
 */

const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { logger } = require("firebase-functions");

// Label mapping for human readability
const projectTypeLabels = {
  landing: "Лендинг",
  corporate: "Корпоративный сайт",
  ecommerce: "Интернет-магазин",
  refactoring: "Доработка текущего сайта",
  consultation: "Пока не знаю, нужна консультация",
};

/**
 * Trigger function: Runs whenever a new lead is placed into Firestore
 */
exports.onLeadCreated = onDocumentCreated({
  document: "leads/{leadId}",
  secrets: ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID"]
}, async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    logger.warn("No data associated with the event");
    return;
  }

  const data = snapshot.data();
  const name = data.name || "Не указано";
  const phone = data.phone || "Не указан";
  const contact = data.contact || "Не указан";
  const projectType = data.projectType || "consultation";
  const comment = data.comment || "Без комментария";
  
  // Format creation time
  let formattedTime = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
  if (data.createdAt) {
    try {
      // Handles firestore timestamp values
      const dateVal = data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt);
      formattedTime = dateVal.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }) + " (МСК)";
    } catch (e) {
      logger.error("Error formatting timestamp", e);
    }
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    logger.error("Telegram credentials are not set in environment secrets!");
    return;
  }

  const displayType = projectTypeLabels[projectType] || projectType;

  const telegramMessage = `Новая заявка с сайта TMK WEB:
Имя: ${name}
Телефон: ${phone}
Контакт: ${contact}
Тип проекта: ${displayType}
Комментарий: ${comment}
Дата и время отправки: ${formattedTime}`;

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML"
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error("Failed to post message to Telegram API:", errorText);
    } else {
      logger.info("Successfully dispatched message to Telegram channel");
    }
  } catch (error) {
    logger.error("Network error communicating with Telegram API:", error);
  }
});
