import { motion } from "motion/react";
import { Layers, Sparkles, Smartphone, Search, MessageSquare, ShieldCheck } from "lucide-react";

export default function TrustSection() {
  const cards = [
    {
      title: "Структура под заявки",
      desc: "Продумываем логический путь посетителя: от первого заголовка до формы отправки, чтобы закрыть все возражения и мотивировать на обращение.",
      icon: Layers,
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "Современный дизайн",
      desc: "Создаём уникальный, чистый и минималистичный визуал премиум-уровня. Никаких шаблонных решений из прошлого десятилетия.",
      icon: Sparkles,
      color: "from-cyan-400 to-teal-400",
    },
    {
      title: "Адаптивная версия",
      desc: "Сайт идеально подстраивается под любые экраны: от компактных смартфонов до больших мониторов. Пользоваться одинаково удобно везде.",
      icon: Smartphone,
      color: "from-blue-600 to-indigo-500",
    },
    {
      title: "Базовая SEO-подготовка",
      desc: "Прописываем семантическую структуру тегов, оптимизируем скорость загрузки изображений и кода для уверенного старта в результатах поиска.",
      icon: Search,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Интеграции с формами",
      desc: "Связываем сайт с вашим Telegram-ботом, CRM или email-ящиком. Каждое обращение клиента мгновенно улетает к вам и не теряется в пути.",
      icon: MessageSquare,
      color: "from-teal-400 to-emerald-400",
    },
    {
      title: "Поддержка после запуска",
      desc: "Не оставляем вас наедине с сайтом. Помогаем с администрированием, хостингом, быстрыми правками и улучшением интерфейса при росте проекта.",
      icon: ShieldCheck,
      color: "from-emerald-400 to-cyan-400",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0d1222]/70" id="services-trust">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f19] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4" id="trust-header">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-xs font-semibold uppercase tracking-widest"
          >
            Наш подход к разработке
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight"
          >
            Не просто делаем сайт — собираем рабочий инструмент для бизнеса
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-base font-light"
          >
            Мы продумываем структуру, визуал, удобство для вашего клиента и техническую часть, чтобы сайт не просто выглядел красиво, а возвращал инвестиции и помогал получать обращения.
          </motion.p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="trust-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group overflow-hidden"
              >
                {/* Micro Ambient Glow on Hover */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-lg -z-10" />
                
                {/* Icon wrapper */}
                <div className="relative mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-0.5 shadow-md shadow-brand-glow`}>
                    <div className="w-full h-full bg-[#0d1222] rounded-[10px] flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  {/* Floating trace behind icon */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-tr ${card.color} opacity-20 blur group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
