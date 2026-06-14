import { motion } from "motion/react";
import { Coffee, MessageCircle, FileSpreadsheet, LayoutTemplate, Settings, Check } from "lucide-react";

export default function WorkProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Обсуждаем задачу",
      desc: "Разбираем особенности вашего бизнеса, цели создания сайта, целевую аудиторию и нужный коммерческий результат.",
      icon: MessageCircle,
      detail: "Занимает 1-2 дня. Итогом является согласованное ТЗ.",
    },
    {
      num: "02",
      title: "Собираем структуру",
      desc: "Продумываем смысловые блоки, логику длинных страниц, путь клиента и расстановку ключевых конверсионных кнопок.",
      icon: FileSpreadsheet,
      detail: "Готовим интерактивный прототип с текстами.",
    },
    {
      num: "03",
      title: "Делаем дизайн",
      desc: "Создаём современный визуал в Figma, который соответствует вашей нише, вызывает доверие предпринимателей и выделяет вас.",
      icon: LayoutTemplate,
      detail: "Дизайн-концепция согласуется до полного утверждения.",
    },
    {
      num: "04",
      title: "Разрабатываем сайт",
      desc: "Верстаем адаптивную и оптимизированную по скорости версию сайта, подключаем формы, скрипты и нужный функционал.",
      icon: Settings,
      detail: "Чистая верстка с базовой SEO подготовкой.",
    },
    {
      num: "05",
      title: "Запускаем и поддерживаем",
      desc: "Проверяем верстку, привязываем домен, настраиваем SSL-сертификаты, ставим аналитику и помогаем с дальнейшими правками.",
      icon: Check,
      detail: "Сдача всех доступов и видеоинструкция по админке.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0d1222]/40" id="process">
      {/* Background radial accent */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Схема сотрудничества
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Понятный процесс без хаоса и срыва сроков
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Каждый этап прозрачен: вы будете точно знать, что происходит с вашим сайтом прямо сейчас, на каком этапе работа и когда запуск.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative" id="process-timeline-container">
          {/* Central progress line on desktop */}
          <div className="absolute left-[50%] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-600/40 via-cyan-500/20 to-cyan-500/0 hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 relative`}
                  id={`process-step-${idx}`}
                >
                  {/* Left Side (Desktop even: text, odd: empty spacer) */}
                  <div className={`w-full lg:w-[45%] order-2 ${isEven ? "lg:order-1 text-left lg:text-right" : "lg:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 relative group hover:border-cyan-500/20 transition-all"
                    >
                      {/* Step Number badge */}
                      <span className="font-display font-black text-4xl sm:text-5xl text-cyan-500/10 block mb-2 font-mono">
                        {step.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                        {step.desc}
                      </p>
                      
                      {/* Meta highlight */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                        <Coffee className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[11px] font-mono text-gray-300 font-medium">{step.detail}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Timeline Pin on Desktop */}
                  <div className="flex items-center justify-center lg:absolute lg:left-[50%] lg:top-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 order-1">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-md shadow-cyan-900/40 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right Side (Desktop even: spacer, odd: text) */}
                  <div className={`w-full lg:w-[45%] order-3 ${isEven ? "lg:order-2" : "lg:order-1 text-left"}`}>
                    {/* Empty block for desk layout spacing */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
