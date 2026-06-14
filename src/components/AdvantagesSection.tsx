import { motion } from "motion/react";
import { Award, Target, CheckCircle, Flame, Users2, Zap, Hourglass } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Работа исключительно с бизнес-задачей",
      desc: "Мы не просто рисуем макеты. Мы исследуем ваш продукт, воронку продаж и целевую аудиторию, чтобы сайт стабильно генерировал качественные обращения.",
      icon: Target,
    },
    {
      title: "Более 150 созданных сайтов",
      desc: "Наш опыт включает реализацию лендингов, дилерских центров, интернет-магазинов и каталогов усложненных комплектующих по всей России.",
      icon: Award,
    },
    {
      title: "Опыт в разных коммерческих нишах",
      desc: "От промышленного клининга и мебельного производства до автодилеров и автозапчастей. Понимаем специфику B2B продаж и розницы.",
      icon: Flame,
    },
    {
      title: "Понятная структура работ",
      desc: "Фиксированные цены, понятные дедлайны для каждого этапа в договоре. Никаких непредвиденных доплат в процессе.",
      icon: Hourglass,
    },
    {
      title: "Адаптивный дизайн и верстка",
      desc: "Соблюдаем современные стандарты юзабилити. Шрифты и кнопки одинаково быстро работают на iPhone, Android, ноутбуках и 4K Smart TV.",
      icon: Zap,
    },
    {
      title: "Комплексное ведение и сопровождение",
      desc: "Настраиваем формы обратной связи, Telegram уведомления, ставим счетчики веб-аналитики и помогаем растить проект после запуска.",
      icon: Users2,
    },
  ];

  return (
    <section className="relative py-24 bg-[#0d1222]/20" id="advantages">
      {/* Background radial soft light */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-blue-950/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Stats summary */}
          <div className="lg:col-span-5 space-y-8" id="advantages-stats-container">
            <div className="space-y-4">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest block">
                Факты и цифры
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Почему выбирают команду TMK WEB
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                Студия TMK WEB — это сплоченная команда разработчиков, дизайнеров и маркетологов. Мы заменяем бесконечный штат фрилансеров и гарантируем соответствие стандартам верстки, безопасности данных и чистоты исходного кода.
              </p>
            </div>

            {/* Quick dashboard metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6 text-left" id="advantages-metrics">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  150+
                </span>
                <p className="text-xs text-gray-300 font-medium font-sans">
                  Созданных сайтов и лендингов
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  8+ лет
                </span>
                <p className="text-xs text-gray-300 font-medium font-sans">
                  Средний опыт специалистов
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                  100%
                </span>
                <p className="text-xs text-gray-300 font-medium font-sans">
                  Адаптивность под телефоны
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
                  24/7
                </span>
                <p className="text-xs text-gray-300 font-medium font-sans">
                  Техническая поддержка сайтов
                </p>
              </div>
            </div>
          </div>

          {/* Right Block - Advantage cards stack */}
          <div className="lg:col-span-7 space-y-6" id="advantages-list">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-gray-100">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
