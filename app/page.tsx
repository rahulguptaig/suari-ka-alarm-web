"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/locales";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";
import { Bell, CalendarCheck, Settings, Sparkles, ChevronRight, Github } from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080818] text-[#F0F0FF] overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-[#7C5CFC]/20 bg-[#080818]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] shadow-[0_0_20px_rgba(124,92,252,0.4)]">
              <Bell className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Suari<span className="text-[#7C5CFC]">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/docs" className="text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">{t(language, 'nav_docs')}</Link>
            <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" className="flex items-center gap-2 text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">
              <Github className="h-4 w-4" />
              {t(language, 'nav_github')}
            </Link>
            <Link href="/admin" className="rounded-xl border border-[#7C5CFC]/40 bg-[#7C5CFC]/10 px-5 py-2.5 text-sm font-semibold text-[#7C5CFC] transition-all hover:bg-[#7C5CFC]/20 hover:shadow-[0_0_15px_rgba(124,92,252,0.3)]">{t(language, 'nav_admin')}</Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button 
              className="text-[#A0A0C0] hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[#7C5CFC]/20 bg-[#080818]/95 backdrop-blur-md p-6 md:hidden flex flex-col gap-6">
            <Link href="/docs" className="block text-base font-medium text-[#A0A0C0] hover:text-white">{t(language, 'nav_docs')}</Link>
            <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" className="block text-base font-medium text-[#A0A0C0] hover:text-white">{t(language, 'nav_github')}</Link>
            <Link href="/admin" className="inline-block rounded-xl border border-[#7C5CFC]/40 bg-[#7C5CFC]/15 px-4 py-3 text-center text-sm font-semibold text-[#7C5CFC]">{t(language, 'nav_admin')}</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-32 flex flex-col items-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#7C5CFC] opacity-20 blur-[120px] pointer-events-none"></div>
        
        <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-[#FF6B9D]/30 bg-[#FF6B9D]/10 px-5 py-2 text-sm font-semibold text-[#FF6B9D] shadow-[0_0_20px_rgba(255,107,157,0.2)]">
          <Sparkles className="h-4 w-4" /> AI-Powered Alarm App
        </div>
        
        <h1 className="relative mb-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-br from-[#ffffff] to-[#A0A0C0] bg-clip-text text-transparent">Meet your </span>
          <br />
          <span className="bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] bg-clip-text text-transparent">Smart AI Companion</span>
        </h1>
        
        <p className="relative mx-auto mb-12 max-w-2xl text-lg text-[#A0A0C0] md:text-xl leading-relaxed">
          {t(language, 'hero_subtitle')}
        </p>
        
        <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm/releases" target="_blank" className="group flex w-full items-center justify-center gap-2 sm:w-auto rounded-2xl bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_rgba(124,92,252,0.4)] transition-all hover:scale-105 active:scale-95">
            <Bell className="h-5 w-5" />
            {t(language, 'btn_download')}
          </Link>
          <Link href="/docs" className="group flex w-full items-center justify-center gap-2 sm:w-auto rounded-2xl border border-[#7C5CFC]/30 bg-[#12122A]/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-[#F0F0FF] transition-all hover:bg-[#7C5CFC]/10 hover:border-[#7C5CFC]/50 active:scale-95">
            {t(language, 'btn_view_docs')}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Smart Alarms", desc: "Wake up naturally with intelligent schedules and persistent ringing.", icon: Bell },
            { title: "AI Syllabus Manager", desc: "Let Suari AI structure your study goals and generate topics automatically.", icon: Sparkles },
            { title: "Todo \u0026 Tasks", desc: "Never miss a deadline with our built-in priority task manager.", icon: CalendarCheck }
          ].map((feature, i) => (
            <div key={i} className="rounded-3xl border border-[#7C5CFC]/10 bg-[#12122A]/40 backdrop-blur-sm p-8 transition-all hover:border-[#7C5CFC]/30 hover:bg-[#12122A]/60 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFC]/20 to-[#FF6B9D]/20 border border-[#7C5CFC]/20">
                <feature.icon className="h-7 w-7 text-[#7C5CFC]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-[#A0A0C0] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
