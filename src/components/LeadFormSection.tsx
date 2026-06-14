import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Phone, User, MessageCircle, FileText } from "lucide-react";
import { ProjectType } from "../types";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contact: "",
    projectType: "landing" as ProjectType,
    comment: "",
    website: "", // honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Listen to cross-component pre-fill requests
  useEffect(() => {
    const handleSetService = (e: Event) => {
      const customEvent = e as CustomEvent<ProjectType>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          projectType: customEvent.detail,
        }));
      }
    };

    window.addEventListener("setWebServiceType", handleSetService);
    return () => window.removeEventListener("setWebServiceType", handleSetService);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Baseline clientside checks
    if (!formData.name.trim()) {
      setErrorMsg("Пожалуйста, введите ваше имя.");
      setLoading(false);
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg("Пожалуйста, введите номер телефона.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          contact: "",
          projectType: "landing",
          comment: "",
          website: "",
        });
      } else {
        setErrorMsg(result.error || "Не удалось отправить заявку. Пожалуйста, попробуйте позже.");
      }
    } catch (err) {
      console.error("Fetch lead form submit error:", err);
      setErrorMsg("Сбой сети. Пожалуйста, проверьте интернет-соединение и попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#0d1222]/40" id="contact">
      {/* Dynamic Background Mesh items */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-blue-900/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Lead Text & Trust Indicators */}
          <div className="lg:col-span-5 space-y-8" id="client-leads-meta">
            <div className="space-y-4">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest block">
                Связаться со студией
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Расскажите о своей задаче — предложим решение
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                Оставьте заявку, заполнив форму. Мы свяжемся с вами в течение часа (в рабочее время), зададим несколько уточняющих вопросов по вашему бизнесу, подготовим коммерческое предложение и сориентируем по точной стоимости и срокам реализации.
              </p>
            </div>

            {/* Step expectations */}
            <div className="space-y-4" id="form-steps-expectations">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 text-sm font-bold font-mono border border-cyan-800/30">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Экспресс-созвон на 10 минут</h4>
                  <p className="text-xs text-gray-400">Обсудим ваши бизнес-цели, требования к сайту и примерный бюджет.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 text-sm font-bold font-mono border border-cyan-800/30">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Бесплатный расчет сметы</h4>
                  <p className="text-xs text-gray-400">Построим четкую структуру и опишем этапы работ с фиксированной ценой.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 text-sm font-bold font-mono border border-cyan-800/30">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Соблюдение NDA и коммерческой тайны</h4>
                  <p className="text-xs text-gray-400">Вся информация о ваших поставщиках и бизнес-показателях останется конфиденциальной.</p>
                </div>
              </div>
            </div>
            
            {/* Guarantee badge */}
            <div className="p-4 rounded-xl border border-dashed border-white/5 bg-white/[0.01] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-xs text-gray-400 font-medium">Бесплатная базовая SEO-подготовка включена в каждый готовый проект!</span>
            </div>
          </div>

          {/* Right Block - Lead Capture Form Card */}
          <div className="lg:col-span-7" id="leads-form-container">
            <div className="p-6 sm:p-10 rounded-3xl glass-panel relative overflow-hidden" id="card-lead-form">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none rounded-full blur-2xl" />

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-12 text-center space-y-5"
                    id="success-message"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Спасибо! Заявка принята</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                      Заявка успешно отправлена и сохранена в Firestore. Уведомление нашему менеджеру доставлено в Telegram. Мы свяжемся с вами в ближайшее время!
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white transition-colors cursor-pointer py-2 px-4 rounded-lg bg-white/5 border border-white/5"
                    >
                      Отправить еще одну заявку
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="user-submit-lead-form"
                  >
                    {/* Error container */}
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Honeypot field - invisible to users, autocompleted only by spam bots */}
                    <div className="absolute opacity-0 pointer-events-none -z-[99] w-0 h-0" tabIndex={-1}>
                      <label htmlFor="website">Website Address</label>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="space-y-2">
                        <label htmlFor="name-input" className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-cyan-400" /> Ваше имя <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name-input"
                          name="name"
                          required
                          placeholder="Иван Петров"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#111625]/60 hover:bg-[#111625]/80 focus:bg-[#111625]/90 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-xl text-white text-sm transition-colors"
                        />
                      </div>

                      {/* Phone field */}
                      <div className="space-y-2">
                        <label htmlFor="phone-input" className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-cyan-400" /> Номер телефона <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone-input"
                          name="phone"
                          required
                          placeholder="+7 (900) 000-00-00"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#111625]/60 hover:bg-[#111625]/80 focus:bg-[#111625]/90 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-xl text-white text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Contact handles */}
                      <div className="space-y-2">
                        <label htmlFor="contact-input" className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5 text-cyan-400" /> Email или Telegram handle
                        </label>
                        <input
                          type="text"
                          id="contact-input"
                          name="contact"
                          placeholder="example@mail.ru или @username"
                          value={formData.contact}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#111625]/60 hover:bg-[#111625]/80 focus:bg-[#111625]/90 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-xl text-white text-sm transition-colors"
                        />
                      </div>

                      {/* Service select drop */}
                      <div className="space-y-2">
                        <label htmlFor="projectType-select" className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-cyan-400" /> Что нужно разработать?
                        </label>
                        <div className="relative">
                          <select
                            id="projectType-select"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#111625]/80 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-xl text-white text-sm transition-colors appearance-none"
                          >
                            <option value="landing">Лендингпод ключ</option>
                            <option value="corporate">Корпоративный сайт</option>
                            <option value="ecommerce">Интернет-магазин</option>
                            <option value="refactoring">Доработка текущего сайта</option>
                            <option value="consultation">Пока не знаю, нужна консультация</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="space-y-2">
                      <label htmlFor="comment-textarea" className="text-xs font-semibold text-gray-300">
                        Расскажите кратко о вашей компании или требованиях
                      </label>
                      <textarea
                        id="comment-textarea"
                        name="comment"
                        rows={4}
                        placeholder="Опишите ваши товары/услуги, желаемые сроки разработки или приложите ссылки на понравившиеся сайты..."
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#111625]/60 hover:bg-[#111625]/80 focus:bg-[#111625]/90 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-xl text-white text-sm transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 active:scale-98 text-base font-bold text-white shadow-xl shadow-brand-glow transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Обработка заявки...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Обсудить проект под ключ</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-500 text-center leading-normal">
                      Нажимая кнопку, вы соглашаетесь с условиями{" "}
                      <a href="#privacy" className="text-gray-400 underline hover:text-cyan-400 transition-colors">
                        Обработки персональных данных
                      </a>{" "}
                      и политикой конфиденциальности.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
