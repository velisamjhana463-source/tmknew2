import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: "Сколько стоит создание сайта?",
      a: "Итоговая стоимость зависит от типа сайта, количества уникальных страниц, сложности дизайна и необходимого функционала (например, наличие калькулятора, личных кабинетов или интеграции с 1С). Оставьте заявку — мы созвонимся, обсудим задачу и предложим коммерческое предложение под ваш бюджет.",
    },
    {
      q: "Можно ли обновить дизайн текущего сайта?",
      a: "Да, мы активно занимаемся модернизацией и доработкой старых сайтов. Мы можем полностью переписать его на современную быструю верстку, освежить интерфейс (UI/UX) по правилам 2026 года, ускорить время загрузки по шкале PageSpeed и исправить проблемы с версткой на мобильных телефонах.",
    },
    {
      q: "Делаете ли вы сайты под ключ?",
      a: "Да. Мы выполняем полноценный комплекс работ под ключ: проводим первичный анализ ниши, пишем тексты, выстраиваем прототип структуры, создаем индивидуальный дизайн в Figma, верстаем, программируем, вешаем формы, настраиваем SSL, оптимизируем скорость, подключаем домен и хостинг.",
    },
    {
      q: "Можно ли отправлять формы обратной связи в Telegram?",
      a: "Конечно! Каждую форму на вашем будущем сайте мы подключаем к специальному Telegram-боту, который в течение 2 секунд присылает детальное оповещение о заявке с именем, телефоном и комментариями. Также возможна параллельная интеграция с AmoCRM, Bitrix24 или корпоративной почтой.",
    },
    {
      q: "Сайт будет корректно работать на мобильных телефонах?",
      a: "Да, адаптивная верстка (Mobile-First) — это железный стандарт нашей веб-студии. Около 70-80% коммерческого трафика сегодня идет со смартфонов, поэтому мы тщательно оптимизируем поведение каждого блока, меню и картинок на всех разрешениях экранов.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-24" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Вопросы и ответы
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Собрали в одном месте быстрые ответы на самые популярные вопросы наших будущих заказчиков и партнеров.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordions-group">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-[#111625]/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/20"
                id={`faq-item-${idx}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 text-white focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-gray-100 hover:text-white transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {/* Animated content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
