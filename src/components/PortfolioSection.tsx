import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Tag, Calendar, CircleDot, AlertCircle, X, CheckSquare } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  type: string;
  desc: string;
  year: string;
  metrics: string;
  scope: string[];
  techStack: string[];
  color: string;
  bgElement: ReactNode;
}

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const projects: PortfolioItem[] = [
    {
      id: "ufashintorg",
      title: "Уфашинторг",
      type: "Интернет-магазин шин и дисков",
      desc: "Разработка полнофункционального электронного магазина шин и колесных дисков с автоматизированной системой подбора по модели автомобиля.",
      year: "2025",
      metrics: "Увеличение заказов через сайт на 32%",
      scope: ["Интеграция каталога 1С", "Умный подбор по авто", "Корзина и оплата", "SEO оптимизация"],
      techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "REST API"],
      color: "from-amber-500/20 to-orange-500/20 text-orange-400 border-orange-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#14121e]">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-mono text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-500/20">Подбор шин</div>
            <span className="text-[10px] text-gray-500">R16, R17, R18, R19</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="border border-white/5 bg-white/5 rounded p-2 text-[10px] font-mono">
              <div className="text-gray-400">Марка: Kia</div>
              <div className="text-gray-400">Модель: Sportage IV</div>
              <div className="text-white mt-1">✓ Найдено 14 комплектов</div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-orange-500/10 border border-orange-500/20 p-1.5 rounded text-center">
                <div className="text-[10px] text-white font-bold">Bridgestone</div>
                <div className="text-[8px] text-gray-400">от 7 400 ₽</div>
              </div>
              <div className="bg-white/5 border border-white/5 p-1.5 rounded text-center">
                <div className="text-[10px] text-white">Nokian Tyres</div>
                <div className="text-[8px] text-gray-400">от 6 500 ₽</div>
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
            <div className="h-full w-4/5 bg-orange-500" />
          </div>
        </div>
      ),
    },
    {
      id: "b4c",
      title: "B4C Design",
      type: "Сайт для Hi-Tech компании",
      desc: "Создание концептуального презентабельного сайта-визитки для инжиниринговой и Hi-Tech компании, занимающейся сложными чертежами.",
      year: "2024",
      metrics: "Конверсия в просмотр чертежей 41%",
      scope: ["Концепт-премиум дизайн", "Интерактивная 3D сетка", "Многоязычность", "Оптимизация скорости"],
      techStack: ["React", "Framer Motion", "Vite", "SVG Canvas"],
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#0a1128]">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-mono text-blue-400">ENGINEERING SYSTEM</span>
            <span className="text-gray-400">v2.4</span>
          </div>
          <div className="relative my-auto flex justify-center items-center">
            {/* Simple decorative radial blueprint graph lines */}
            <svg className="w-24 h-24 text-blue-500/40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <path d="M 30,50 Q 50,30 70,50 T 90,70" stroke="#00d2ff" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="absolute bottom-1 right-1 text-[8px] font-mono text-gray-500 bg-black/40 px-1 rounded">
              GRID: ACTIVE
            </div>
          </div>
          <div className="flex justify-between items-center text-[8px] text-gray-400 border-t border-white/5 pt-1.5">
            <span>MODELS APPROVED</span>
            <span className="text-green-400 font-mono">100% SECURE</span>
          </div>
        </div>
      ),
    },
    {
      id: "masterloadok",
      title: "Мастер Лодок",
      type: "Сайт производителя лодок и моторов",
      desc: "Разработка промо-сайта и структурированного электронного каталога для крупного производителя надувных лодок ПВХ и подвесных лодочных моторов.",
      year: "2025",
      metrics: "Увеличение количества дилерских обращений в 1.8 раз",
      scope: ["Дилерский кабинет", "Фильтр жесткости транца", "Видеодемонстрации", "Форма франшизы"],
      techStack: ["WordPress REST", "Vue.js", "TailwindCSS", "MySQL"],
      color: "from-sky-500/20 to-teal-500/20 text-sky-400 border-sky-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#081820]">
          <div className="flex justify-between items-center">
            <span className="text-sky-400 font-bold text-xs uppercase font-display">MASTER LOODOK</span>
            <span className="text-[9px] text-teal-400 bg-teal-950/40 px-1.5 py-0.5 rounded">Серия ПВХ 2026</span>
          </div>
          <div className="my-auto space-y-2">
            <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded">
              <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-[9px] text-gray-300 italic font-bold">PVC-360</div>
              <div>
                <div className="text-[10px] text-white font-medium">Таймень LX 3600</div>
                <div className="text-[8px] text-gray-400">Грузоподъемность 650 кг</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-cyan-950/20 border border-cyan-800/20 p-1.5 rounded">
              <div className="w-10 h-6 bg-cyan-900 rounded flex items-center justify-center text-[9px] text-sky-300 italic font-bold">MOTO-20</div>
              <div>
                <div className="text-[10px] text-sky-300 font-medium font-mono">Yamaha 20hp Outboard</div>
                <div className="text-[8px] text-teal-400">В наличии на складах</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[8px] text-gray-500">
            <span>28 филиалов по РФ</span>
            <span>✓ Одобрено ГИМС</span>
          </div>
        </div>
      ),
    },
    {
      id: "ixenmotors",
      title: "Ixen Motors Ufa",
      type: "Сайт официального дилера",
      desc: "Проектирование и верстка промо-сайта автомобильного дилера бренда IXEN. Раздел комплектаций, цен и быстрая запись на бесплатный тест-драйв.",
      year: "2024",
      metrics: "60+ заявок на тест-драйв еженедельно",
      scope: ["Дизайн по брендбуку", "Сетка сравнения авто", "Запись в Telegram отдела продаж", "Калькулятор кредита"],
      techStack: ["Next.js", "Framer Motion", "SEO Pro", "API Integration"],
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#0a0f1d]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400">IXEN MOTORS</span>
            <span className="text-[8px] text-[#06b6d4]">Офиц. Дилер</span>
          </div>
          <div className="my-auto space-y-2">
            <div className="text-center font-display font-black text-xl text-white tracking-widest italic leading-none">
              IXEN T5
            </div>
            <div className="flex justify-center gap-1.5 text-[8px]">
              <span className="bg-white/5 px-2 py-0.5 rounded text-gray-300">1.5T Двигатель</span>
              <span className="bg-white/5 px-2 py-0.5 rounded text-gray-300">АТ Трансмиссия</span>
            </div>
            <div className="bg-cyan-500/15 text-center py-1.5 rounded border border-cyan-500/30 font-bold text-[9px] text-cyan-400 uppercase tracking-wider">
              Запись на тест-драйв
            </div>
          </div>
          <div className="flex justify-between text-[8px] text-gray-500">
            <span>Гарантия 5 лет</span>
            <span>г. Уфа</span>
          </div>
        </div>
      ),
    },
    {
      id: "peugeot",
      title: "Peugeot Ufa",
      type: "Сайт официального дилера",
      desc: "Имиджевый современный сайт-витрина для официального представительства автомобильного бренда Peugeot, оптимизированный под привлечение горячих клиентов на обслуживание.",
      year: "2024",
      metrics: "Снижение стоимости привлечения лида (CPL) на 44%",
      scope: ["Интерактивный склад", "Быстрый расчет Trade-In", "Выбор автосалона", "Оценка авто"],
      techStack: ["Vite", "React Router", "TailwindCSS", "Webhooks"],
      color: "from-blue-600/20 to-indigo-600/20 text-indigo-400 border-indigo-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#0c122a]">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-bold text-gray-200">PEUGEOT SERVICE</span>
            <span className="text-gray-500">2024 Model List</span>
          </div>
          <div className="my-auto text-center space-y-2">
            <div className="text-sm font-semibold text-white tracking-tight">Записаться на ТО в Уфе</div>
            <div className="flex justify-center gap-4 text-[9px] font-mono text-gray-400 bg-white/5 p-1.5 rounded">
              <div>Peugeot 3008</div>
              <div className="text-cyan-400">✓ Свободно 14:00</div>
            </div>
          </div>
          <div className="h-1 w-full bg-white/5 rounded overflow-hidden">
            <div className="h-full w-2/3 bg-blue-600" />
          </div>
        </div>
      ),
    },
    {
      id: "edhus",
      title: "edhus.ru",
      type: "Сайт для исполнителя",
      desc: "Разработка авторитетного личного бренда и персонального сервиса-каталога для экспертных ИТ-услуг с продуманной структурой кейсов.",
      year: "2025",
      metrics: "Рост чека исполнителя на 75% за счет уверенного визуала",
      scope: ["Портфолио-галерея", "Отзывы клиентов", "Калькулятор стоимости", "Подписка на рассылку"],
      techStack: ["SvelteKit", "TailwindCSS", "Node.js", "MongoDB"],
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#1b0d2d]">
          <div className="flex justify-between items-center text-[10px] text-purple-400 font-mono">
            <span>EDHUS.RU LOG</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div className="my-auto space-y-1.5">
            <div className="text-xs font-semibold text-white">Fullstack Developer Portfolio</div>
            <div className="text-[8px] text-gray-400">NodeJS • ReactJS • Python • Cloud Native</div>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-purple-950/40 p-1 rounded text-center text-purple-300 text-[8px]">140+ реп.</div>
              <div className="bg-purple-950/40 p-1 rounded text-center text-purple-300 text-[8px]">8 лет оп.</div>
              <div className="bg-purple-950/40 p-1 rounded text-center text-purple-300 text-[8px]">99% рейтинг</div>
            </div>
          </div>
          <div className="text-[7px] text-gray-500 font-mono">LAST DEPLOY: JUST NOW</div>
        </div>
      ),
    },
    {
      id: "cleaningmania",
      title: "КлинингМания",
      type: "Сайт клининговой компании",
      desc: "Высококонверсионный, легкий лендинг с мгновенным калькулятором цен клининга квартир, коттеджей и офисов в зависимости от площади.",
      year: "2025",
      metrics: "Увеличение конверсии в звонок до 18.5%",
      scope: ["Калькулятор комнат", "Сетка сравнения уборок", "Модуль отзывов 'До / После'", "Форма обратного вызова"],
      techStack: ["React", "CSS Modules", "Bitrix24 CRM", "Analytics API"],
      color: "from-teal-500/20 to-sky-500/20 text-teal-400 border-teal-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#0a1b1b]">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wide">CLEANING MANIA</span>
            <span className="text-[8px] text-white bg-teal-500 px-1.5 py-0.5 rounded-full">Уфа и пригород</span>
          </div>
          <div className="my-auto space-y-1 text-center">
            <div className="text-xs text-white">Рассчитайте стоимость уборки</div>
            <div className="flex justify-center items-center gap-1.5 text-[11px] text-teal-400 font-bold">
              <span>90 м² • Генеральная</span>
              <span className="text-white bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-800/20">4 500 ₽</span>
            </div>
            <div className="text-[8px] text-gray-400">✓ Ближайший выезд: Сегодня</div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-11/12 bg-teal-400" />
          </div>
        </div>
      ),
    },
    {
      id: "egmebel",
      title: "Eg-mebel",
      type: "Сайт производителя мебели",
      desc: "Презентабельный интернет-каталог дизайнерской мебели по индивидуальным размерам, ориентированный на архитекторов и дизайнеров интерьеров.",
      year: "2024",
      metrics: "Рост среднего чека заказа на 60%",
      scope: ["Каталог кухонь и шкафов", "Палитра фасадов / материалов", "Запись на бесплатную замерку", "Форма партнерства"],
      techStack: ["Vite", "TailwindCSS", "NodeMailer", "AmoCRM"],
      color: "from-amber-600/20 to-yellow-600/20 text-yellow-500 border-yellow-500/30",
      bgElement: (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-[#1c1812]">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-bold text-gray-200">EG-MEBEL PREMIUM</span>
            <span className="text-yellow-500">MOCKUP 4D</span>
          </div>
          <div className="my-auto space-y-1 text-left">
            <div className="text-[11px] text-white">Дизайнерские кухни на заказ</div>
            <div className="grid grid-cols-2 gap-1.5 text-[8px] text-gray-400">
              <div className="border border-white/5 p-1 rounded bg-white/5">
                <span className="text-yellow-500 block">Фасады</span>
                <span>МДФ эмаль / Шпон</span>
              </div>
              <div className="border border-white/5 p-1 rounded bg-white/5">
                <span className="text-yellow-500 block">Фурнитура</span>
                <span>Blum (Австрия)</span>
              </div>
            </div>
          </div>
          <div className="text-[8px] text-gray-500 text-right">Замер по Уфе: Бесплатно</div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0b0f19]" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Наше портфолио
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Примеры реализованных проектов
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Каждый сайт разрабатывался с глубоким погружением в нишу бизнеса, под жесткий контроль конверсии, быструю загрузку и дальнейшую рекламу.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="portfolio-grid">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col justify-between rounded-2xl glass-panel border border-white/5 hover:border-cyan-500/20 overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Cover Placeholder Design */}
              <div className="aspect-[16/10] relative w-full overflow-hidden border-b border-white/5">
                {proj.bgElement}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                    {proj.type}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed font-light">
                    {proj.desc}
                  </p>
                </div>

                {/* Submit Trigger Actions */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/10">
                    {proj.year}
                  </span>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Посмотреть детали
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Detail Overlay MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" id="portfolio-modal">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-[#0d1222] border border-white/10 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                id="close-modal-btn"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                  Кейс: {selectedProject.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Render dynamic mockup element inside modal */}
              <div className="aspect-[16/8] relative w-full rounded-2xl overflow-hidden border border-white/5">
                {selectedProject.bgElement}
              </div>

              {/* Scope & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="modal-project-details">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Tag className="w-4 h-4 text-cyan-400" /> Что было сделано
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.scope.map((scp) => (
                      <li key={scp} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckSquare className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{scp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" /> Основной результат
                    </h4>
                    <p className="text-xs text-emerald-400 font-mono font-semibold bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-500/10">
                      {selectedProject.metrics}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      Технологический стек
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal action */}
              <div className="pt-6 border-t border-white/5 flex gap-4">
                <button
                  onClick={() => {
                    const mapType: Record<string, string> = {
                      ufashintorg: "ecommerce",
                      b4c: "corporate",
                      masterloadok: "corporate",
                      ixenmotors: "landing",
                      peugeot: "landing",
                      edhus: "landing",
                      cleaningmania: "landing",
                      egmebel: "ecommerce",
                    };
                    const typeValue = mapType[selectedProject.id] || "landing";
                    const event = new CustomEvent("setWebServiceType", { detail: typeValue });
                    window.dispatchEvent(event);
                    setSelectedProject(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-brand-glow hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  Хочу похожий проект
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-sm font-bold text-gray-300 hover:text-white transition-all"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
