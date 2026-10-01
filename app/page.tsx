"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/locales";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";

export default function HomePage() {
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080818] text-[#F0F0FF]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-[#7C5CFC]/20 bg-[#080818]/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] text-lg shadow-lg">
              🔔
            </div>
            <span className="text-lg font-bold">Suari Ka Alarm</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/docs" className="text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">{t(language, 'nav_docs')}</Link>
            <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" className="text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">{t(language, 'nav_github')}</Link>
            <Link href="/admin" className="rounded-lg border border-[#7C5CFC]/40 bg-[#7C5CFC]/15 px-4 py-2 text-sm font-semibold text-[#7C5CFC] transition-colors hover:bg-[#7C5CFC]/30">{t(language, 'nav_admin')}</Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button 
              className="text-[#A0A0C0] hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[#7C5CFC]/20 bg-[#080818] p-4 md:hidden flex flex-col gap-4">
            <Link href="/docs" className="block text-base font-medium text-[#A0A0C0] hover:text-white">{t(language, 'nav_docs')}</Link>
            <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" className="block text-base font-medium text-[#A0A0C0] hover:text-white">{t(language, 'nav_github')}</Link>
            <Link href="/admin" className="inline-block rounded-lg border border-[#7C5CFC]/40 bg-[#7C5CFC]/15 px-4 py-2 text-center text-sm font-semibold text-[#7C5CFC]">{t(language, 'nav_admin')}</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <div className="mb-6 inline-block rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/10 px-4 py-1.5 text-sm font-semibold text-[#7C5CFC]">
          🌟 AI-Powered Alarm App
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] bg-clip-text text-transparent">Suari Ka Alarm</span>
          <br />{t(language, 'hero_title')}
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-[#A0A0C0] md:text-xl leading-relaxed">
          {t(language, 'hero_subtitle')}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm/releases" target="_blank" className="w-full sm:w-auto rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] px-8 py-3.5 text-base font-bold text-white shadow-[0_8px_32px_rgba(124,92,252,0.4)] transition-transform hover:scale-105 active:scale-95">
            📱 {t(language, 'btn_download')}
          </Link>
          <Link href="/docs" className="w-full sm:w-auto rounded-xl border border-[#7C5CFC]/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-[#F0F0FF] transition-colors hover:bg-white/10 active:scale-95">
            📖 {t(language, 'btn_view_docs')}
          </Link>
        </div>
      </section>
    </main>
  );
}

