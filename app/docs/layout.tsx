"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/locales";
import { useState } from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/docs", label: t(language, 'nav_overview'), icon: "📖" },
    { href: "/docs/getting-started", label: t(language, 'nav_getting_started'), icon: "🚀" },
    { href: "/docs/alarm", label: t(language, 'nav_alarms'), icon: "⏰" },
    { href: "/docs/suari-ai", label: t(language, 'nav_ai'), icon: "🤖" },
    { href: "/docs/todo", label: t(language, 'nav_todos'), icon: "✅" },
    { href: "/docs/syllabus", label: t(language, 'nav_syllabus'), icon: "📚" },
  ];

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-[#080818] text-[#F0F0FF]">
      {/* Mobile Header (Hidden on Desktop) */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-[#7C5CFC]/20 bg-[#0a0a1e] sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2 text-white no-underline">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] text-sm">🔔</div>
          <span className="font-bold text-sm">Suari Ka Alarm</span>
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#A0A0C0]">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-[#0a0a1e] border-b border-[#7C5CFC]/20 sticky top-[65px] z-30">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 border-b border-white/5 px-4 py-3 text-sm font-medium text-[#A0A0C0] hover:bg-white/5 hover:text-white">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[260px] flex-col bg-[#0a0a1e] border-r border-[#7C5CFC]/15 p-6 sticky top-0 h-screen overflow-y-auto shrink-0">
        <Link href="/" className="flex items-center gap-2 text-white no-underline mb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] text-sm">🔔</div>
          <span className="font-bold text-sm">Suari Ka Alarm</span>
        </Link>
        <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#606080]">Documentation</div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-[#A0A0C0] transition-colors hover:bg-white/5 hover:text-white">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-8 rounded-xl border border-[#7C5CFC]/20 bg-[#7C5CFC]/10 p-4">
          <div className="text-xs leading-relaxed text-[#A0A0C0]">Need help? Chat with Suari AI in the app! 🌟</div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 md:p-12 max-w-[900px] leading-relaxed">
        {children}
      </main>
    </div>
  );
}
