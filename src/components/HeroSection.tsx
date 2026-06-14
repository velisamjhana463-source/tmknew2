import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, FileText, Code, BarChart3, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const badges = [
    { text: "Более 150 реализованных сайтов", icon: FileText },
    { text: "Лендинги, сайты, интернет-магазины", icon: Code },
    { text: "Адаптив под мобильные устройства", icon: BarChart3 },
    { text: "SEO-база и техническая настройка", icon: ShieldCheck },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden" id="hero">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full bg-brand-blue/30 blur-3xl glow-accent animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-brand-cyan/25 blur-3xl glow-accent animate-float" />
      
      {/* Subtle Tech Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Badges */}
          <div className="lg:col-span-7 space-y-8" id="hero-text-container">
            {/* Top Micro-badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-sm text-xs font-semibold text-cyan-400 tracking-wide uppercase"
              id="hero-micro-badge"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Веб-студия TMK WEB — Веб-разработка 2026
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
              id="hero-main-title"
            >
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                Создаём сайты, которые помогают бизнесу{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
                  получать заявки
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                TMK WEB разрабатывает лендинги, корпоративные сайты и интернет-магазины для малого и среднего бизнеса — от структуры и дизайна до запуска и технической поддержки.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              id="hero-ctas"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 font-semibold text-base text-white shadow-xl shadow-brand-glow hover:brightness-110 active:scale-98 transition-all duration-200"
              >
                Обсудить проект
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 font-semibold text-base text-gray-200 transition-all duration-200"
              >
                Посмотреть работы
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>
            </motion.div>

            {/* Bullet List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5"
              id="hero-bullets-grid"
            >
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Digital Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            id="hero-mesh-canvas"
          >
            {/* Holographic Glowing Base */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] glass-panel rounded-3xl p-6 shadow-2xl border-white/10 overflow-hidden group">
              {/* Internal neon glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500" />
              
              {/* Header mockup section */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                  tmk-web-admin.live
                </div>
                <div className="w-4" />
              </div>

              {/* Graphic stats card */}
              <div className="bg-[#111625]/80 p-4 rounded-2xl border border-white/5 mb-5 space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none block">
                      Прирост лидов за неделю
                    </span>
                    <span className="text-2xl font-display font-extrabold text-white mt-1 block">
                      +84.2%
                    </span>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-[10px] font-bold">
                    +150 лидов
                  </div>
                </div>

                {/* Animated SVG Graph */}
                <div className="h-16 flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,35 Q 15,25 30,15 T 60,18 T 80,5 T 100,2"
                      fill="none"
                      stroke="url(#gradient-chart-line)"
                      strokeWidth="2.5"
                      className="stroke-cyan-400"
                    />
                    <path
                      d="M 0,35 Q 15,25 30,15 T 60,18 T 80,5 T 100,2 L 100,40 L 0,40 Z"
                      fill="url(#gradient-chart)"
                    />
                  </svg>
                </div>
              </div>

              {/* Lead response item cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Андрей П.</h4>
                      <p className="text-[10px] text-gray-400">Лендинг (производство)</p>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-800/30">
                    Получен лид
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Ольга К.</h4>
                      <p className="text-[10px] text-gray-400">Интернет-магазин</p>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-blue-400 bg-blue-950/50 px-2 py-1 rounded border border-blue-800/30">
                    На связи
                  </div>
                </div>

                {/* Floating wireframe block */}
                <div className="border border-dashed border-white/10 p-3 rounded-xl flex items-center justify-center mt-2">
                  <div className="text-[10px] text-gray-500 font-mono flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-cyan-500" />
                    <code>{"<Component id=\"leads-sync\" />"}</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Float badges on background */}
            <div className="absolute top-10 -left-10 bg-[#141b2e] border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 animate-bounce-slow">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-xs font-semibold text-white">Конверсия +14%</p>
                <p className="text-[9px] text-gray-400">Средний показатель</p>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-[#141b2e] border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float delay-1000">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <p className="text-xs font-semibold text-white">SEO оптимизация</p>
                <p className="text-[9px] text-gray-400">Базовая настройка</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
