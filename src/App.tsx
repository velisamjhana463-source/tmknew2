import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcessSection from "./components/WorkProcessSection";
import PortfolioSection from "./components/PortfolioSection";
import AdvantagesSection from "./components/AdvantagesSection";
import TargetAudienceSection from "./components/TargetAudienceSection";
import LeadFormSection from "./components/LeadFormSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCtaClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-white" id="root-layout">
      {/* Scroll indicator bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
        id="scroll-bar"
      />

      {/* Grid Background Ambient glow circle decoration system */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[180px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[150px]" />
      </div>

      {/* Header and navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust Block */}
        <TrustSection />

        {/* 3. Services block */}
        <ServicesSection />

        {/* 4. "How we work" Block */}
        <WorkProcessSection />

        {/* 5. Portfolio Block */}
        <PortfolioSection />

        {/* 6. Advantages Block */}
        <AdvantagesSection />

        {/* 7. For whom audience block */}
        <TargetAudienceSection />

        {/* 8. Lead Capture Form Block */}
        <LeadFormSection />

        {/* 9. FAQ Accordion Block */}
        <FaqSection />

        {/* 10. Final CTA block before the footer */}
        <section className="relative py-20 bg-gradient-to-b from-transparent to-[#080d19]/85" id="final-cta">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-14 rounded-3xl overflow-hidden bg-gradient-to-r from-[#111625]/80 to-[#181d30]/80 border border-white/5 text-center space-y-6"
            >
              {/* Overlay graphics */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-800/30 rounded-full text-xs font-semibold text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Время создавать лучший сайт</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
                Хотите обновить сайт или запустить новый проект?
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
                Оставьте заявку — обсудим задачу и подскажем, какой формат сайта подойдёт именно вашему бизнесу.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-base font-bold text-white shadow-xl shadow-brand-glow hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  Обсудить проект
                  <ArrowUpRight className="w-5 h-5 text-cyan-200" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 11. Footer block */}
      <Footer />
    </div>
  );
}
