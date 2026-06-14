import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Monitor, Code2, ShoppingCart, Settings2, ShieldAlert } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "landing",
      title: "Лендингпод ключ",
      desc: "Одностраничный сайт для конкретной услуги, товара, мероприятия или рекламной кампании. Помогает быстро запустить маркетинг и начать собирать заявки.",
      timeline: "от 5 дней",
      highlights: ["Индивидуальный дизайн в Figma", "Проработка воронок конверсии", "Полная мобильная оптимизация", "Интеграция с мессенджерами / CRM"],
      icon: Monitor,
      color: "border-blue-500/20 text-blue-400 hover:border-blue-500/40",
      accent: "bg-blue-600/10 text-blue-400",
    },
    {
      id: "corporate",
      title: "Корпоративный сайт",
      desc: "Многостраничный представительский сайт компании, включающий полное описание услуг, преимуществ, технологических процессов, кейсов и команды.",
      timeline: "от 12 дней",
      highlights: ["Удобная CMS для редактирования", "Презентабельный дизайн ниши", "Формы для различных департаментов", "Готовая SEO-структура под поиск"],
      icon: Code2,
      color: "border-cyan-500/20 text-cyan-400 hover:border-cyan-500/40",
      accent: "bg-cyan-600/10 text-cyan-400",
    },
    {
      id: "ecommerce",
      title: "Интернет-магазин",
      desc: "Полнофункциональная продающая площадка с каталогом товаров, карточками, автоматическими фильтрами, корзиной покупок и модулями доставки.",
      timeline: "от 18 дней",
      highlights: ["Каталог товаров с фильтрацией", "Интеграции с платежными шлюзами", "Личный кабинет покупателя", "Выгрузка товаров и аналитика"],
      icon: ShoppingCart,
      color: "border-emerald-500/20 text-emerald-400 hover:border-emerald-500/40",
      accent: "bg-emerald-600/10 text-emerald-400",
    },
    {
      id: "refactoring",
      title: "Доработка сайта",
      desc: "Профессиональное исправление верстки, обновление устаревшего дизайна, ускорение времени загрузки, устранение технических уязвимостей.",
      timeline: "от 2 дней",
      highlights: ["Аудит технических ошибок", "Редизайн отдельных блоков", "Перенос на адаптивную верстку", "Ускорение загрузки (PageSpeed)"],
      icon: Settings2,
      color: "border-purple-500/20 text-purple-400 hover:border-purple-500/40",
      accent: "bg-purple-600/10 text-purple-400",
    },
    {
      id: "support",
      title: "Техническая поддержка",
      desc: "Абонентское или разовое сопровождение ваших веб-ресурсов. Следим за работоспособностью, вовремя платим за домены и вносим необходимые правки.",
      timeline: "ежемесячно / по запросу",
      highlights: ["Мониторинг доступности 24/7", "Регулярное резервное копирование", "Правки контента и каталога", "Защита от вирусов и спам-атак"],
      icon: ShieldAlert,
      color: "border-rose-500/20 text-rose-400 hover:border-rose-500/40",
      accent: "bg-rose-600/10 text-rose-400",
    },
  ];

  const handleSelectService = (serviceId: string) => {
    // Dispatch custom DOM event that LeadFormSection will listen to
    const mapType: Record<string, string> = {
      landing: "landing",
      corporate: "corporate",
      ecommerce: "ecommerce",
      refactoring: "refactoring",
      support: "consultation", // FAQ/Unknown support goes to general consultation
    };
    
    const event = new CustomEvent("setWebServiceType", { detail: mapType[serviceId] || "landing" });
    window.dispatchEvent(event);
    
    // Smooth scroll straight to contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24" id="services">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Наши услуги
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Качественные сайты для ваших бизнес-задач
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Мы берем на себя весь цикл проекта: от анализа ваших конкурентов до поискового SEO-продвижения и поддержки после релиза.
          </p>
        </div>

        {/* Services mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`p-6 sm:p-8 rounded-2xl border ${svc.color} bg-[#111625]/40 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group`}
              >
                <div>
                  {/* Timeline Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#06b6d4] bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full uppercase font-semibold">
                      {svc.timeline}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${svc.accent} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Card Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {svc.desc}
                  </p>

                  {/* Highlight Items */}
                  <ul className="space-y-3 mb-8">
                    {svc.highlights.map((hlt) => (
                      <li key={hlt} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action CTA */}
                <button
                  onClick={() => handleSelectService(svc.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/5 hover:border-cyan-500/30 bg-white/2 hover:bg-cyan-500/5 text-sm font-semibold text-gray-200 hover:text-white transition-all cursor-pointer"
                >
                  Заказать услугу
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
