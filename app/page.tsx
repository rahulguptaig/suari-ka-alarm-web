"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/locales";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HomePage() {
  const { language } = useLanguage();

  const features = [
    { icon: "⏰", title: "Smart Alarms", desc: "Repeating alarms with snooze, vibration, and custom sounds." },
    { icon: "🤖", title: "Suari AI", desc: "Chat, Agent, and Research modes. Your personal AI companion." },
    { icon: "✅", title: "Todo Manager", desc: "Priority-based task management with subjects." },
    { icon: "📚", title: "Syllabus Tracker", desc: "AI-powered syllabus planning and progress." },
    { icon: "🔍", title: "Internet Search", desc: "Suari searches the web for you." },
    { icon: "💬", title: "Chat History", desc: "All conversations saved in organized threads." },
  ];

  return (
    <main style={{ background: "#080818", minHeight: "100vh", color: "#F0F0FF" }}>
      {/* Navbar */}
      <nav style={{ borderBottom: "1px solid rgba(124,92,252,0.2)", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "rgba(8,8,24,0.9)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🔔</div>
          <span style={{ fontWeight: 700, fontSize: 18 }}>Suari Ka Alarm</span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <Link href="/docs" style={{ color: "#A0A0C0", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{t(language, 'nav_docs')}</Link>
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" style={{ color: "#A0A0C0", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{t(language, 'nav_github')}</Link>
          <Link href="/admin" style={{ background: "rgba(124,92,252,0.15)", border: "1px solid rgba(124,92,252,0.4)", borderRadius: 8, padding: "8px 16px", color: "#7C5CFC", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>{t(language, 'nav_admin')}</Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 40px 80px", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "inline-block", background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#7C5CFC", fontWeight: 600, marginBottom: 24 }}>
          🌟 AI-Powered Alarm App
        </div>
        <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          <span style={{ background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Suari Ka Alarm</span>
          <br />{t(language, 'hero_title')}
        </h1>
        <p style={{ fontSize: 20, color: "#A0A0C0", lineHeight: 1.7, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
          {t(language, 'hero_subtitle')}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm/releases" target="_blank" style={{ display: "inline-block", background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", borderRadius: 12, padding: "14px 32px", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, boxShadow: "0 8px 32px rgba(124,92,252,0.4)" }}>
            📱 {t(language, 'btn_download')}
          </Link>
          <Link href="/docs" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(124,92,252,0.3)", borderRadius: 12, padding: "14px 32px", color: "#F0F0FF", textDecoration: "none", fontWeight: 600, fontSize: 16 }}>
            📖 {t(language, 'btn_view_docs')}
          </Link>
        </div>
      </section>
    </main>
  );
}
