import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Phone, Mail, MessageSquare, X, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "Как работаем", href: "#process" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "Преимущества", href: "#advantages" },
  ];

  return (
    <footer className="relative bg-[#080d19] border-t border-white/5 py-16" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2 group" id="footer-logo">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-black text-base text-white tracking-tight">
                TMK <span className="text-cyan-400">WEB</span>
              </span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Разработка лендингов, корпоративных сайтов и интернет-магазинов для малого и среднего бизнеса. Твердый акцент на конверсию, быстродействие и легкое администрирование.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest">
              Навигация
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest">
              Контакты
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm" id="footer-contacts">
              <li>
                <a
                  href="tel:+79000000000"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+7 (900) 000-00-00</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tmk-web.ru"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>info@tmk-web.ru</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/tmk_web"
                  target="_blank"
                  rel="noreferrer referrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>@tmk_web</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator lines */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} TMK WEB. Все права защищены.</p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-cyan-400 transition-colors cursor-pointer underline underline-offset-2"
              id="privacy-toggle"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy MODAL Overlay */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" id="privacy-policy-modal">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-[#0d1222] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowPrivacy(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                id="close-privacy"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 text-cyan-400 pt-2">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Политика конфиденциальности</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-normal font-light">
                <p className="font-bold text-white">1. Общие положения</p>
                <p>
                  Настоящая Политика конфиденциальности описывает правила сбора, хранения и дальнейшей обработки персональных данных, предоставленных посетителями сайта TMK WEB при заполнении контактных форм обратной связи.
                </p>

                <p className="font-bold text-white">2. Какие данные мы собираем</p>
                <p>
                  Мы собираем только те сведения, которые необходимы для связи по вашей заявке: имя, номер телефона, а также по вашему желанию — контакт в Telegram/email и тип интересующего проекта с текстовыми комментариями.
                </p>

                <p className="font-bold text-white">3. Цели сбора данных</p>
                <p>
                  Персональные данные собираются исключительно в целях первичной обработки ваших обращений коммерческого характера, составления предварительного технического задания и созвона для обсуждения деталей проекта.
                </p>

                <p className="font-bold text-white">4. Хранение и сохранность</p>
                <p>
                  Данные сохраняются в облачную базу данных Google Firebase Firestore по защищенным SSL каналам и дублируются по защищенным Telegram Webhook протоколам нашему менеджеру. Мы никогда не передаем ваши данные третьим лицам.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  Ознакомлен
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
