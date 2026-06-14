import { motion } from "motion/react";
import { MoveUpRight, Building2, MapPin, Factory, UserCheck, ShoppingBag, RefreshCw } from "lucide-react";

export default function TargetAudienceSection() {
  const audiences = [
    {
      title: "Малому бизнесу",
      desc: "Создадим недорогой, но функциональный лендинг или многостраничник для рекламы в Яндекс Директ и быстрого старта продаж.",
      focus: "Быстрый запуск, формы обратной связи, отслеживание звонков.",
      icon: Building2,
    },
    {
      title: "Локальным компаниям",
      desc: "Увеличим поток локальных клиентов для салонов, мастерских, клиник или автосервисов в конкретном городе или районе республики.",
      focus: "Карты, отзывы, удобные контакты, мессенджеры в один клик.",
      icon: MapPin,
    },
    {
      title: "Производителям",
      desc: "Разработаем мощный оптово-розничный сайт с каталогом продукции, условиями франшизы, чертежами и формами для дилеров.",
      focus: "Характеристики ПВХ/металла, файлы ГОСТов, оптовые опросники.",
      icon: Factory,
    },
    {
      title: "Услугам и экспертам",
      desc: "Поможем выстроить личный бренд, показать команду, ваши сертификаты, подробные текстовые кейсы и калькулятор цен.",
      focus: "Убеждающие отзывы, демонстрация опыта, запись на замер/консультацию.",
      icon: UserCheck,
    },
    {
      title: "Интернет-магазинам",
      desc: "Создадим витрину товаров с умными фильтрами, удобной корзиной, подсчетом стоимости доставки СДЭК/Почтой и оплатой.",
      focus: "Импорт цен через Excel/1C, платежный шлюз Сбера/Tinkoff, корзина.",
      icon: ShoppingBag,
    },
    {
      title: "Обновление старым сайтам",
      desc: "Проведем ревизию, перепишем устаревший код на быстрый React, сделаем современный UX дизайн и добавим корректную верстку для смартфонов.",
      focus: "Увеличение конверсии, перенос SEO трафика со старого сайта без потерь.",
      icon: RefreshCw,
    },
  ];

  const handleCtaClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-[#0d1222]/10" id="for-whom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Для кого работаем
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Кому идеально подойдут наши сайты
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Каждому бизнесу нужен свой тип веб-ресурса. Мы хорошо понимаем различия и не предлагаем огромный интернет-магазин там, где хватит аккуратного лендинга на 5 экранов.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="audience-grid">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/20 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                      {aud.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 space-y-2 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block">
                    Основной акцент разработки:
                  </span>
                  <p className="text-[11px] text-gray-300 font-sans italic leading-snug">
                    {aud.focus}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple inline CTA block */}
        <div className="mt-12 text-center" id="audience-cta">
          <p className="text-sm text-gray-400">
            Узнали себя?{" "}
            <button
              onClick={handleCtaClick}
              className="text-cyan-400 hover:text-white font-semibold underline underline-offset-4 cursor-pointer inline-flex items-center gap-1 transition-colors"
            >
              Опишите свою задачу
              <MoveUpRight className="w-4 h-4" />
            </button>{" "}
            — и мы разработаем структуру под особенности вашей ниши.
          </p>
        </div>

      </div>
    </section>
  );
}
