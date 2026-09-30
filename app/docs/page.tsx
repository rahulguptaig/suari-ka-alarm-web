import Link from "next/link";

export default function DocsPage() {
  const sections = [
    { href: "/docs/getting-started", icon: "🚀", title: "Getting Started", desc: "Download karo, install karo aur pehla alarm set karo — 2 minute mein!" },
    { href: "/docs/alarm", icon: "⏰", title: "Alarm System", desc: "Smart alarms with repeat days, snooze, vibration aur custom sounds." },
    { href: "/docs/suari-ai", icon: "🤖", title: "Suari AI", desc: "Chat, Agent aur Research modes — tera AI study companion." },
    { href: "/docs/todo", icon: "✅", title: "Todo Manager", desc: "Priority-based tasks, subjects, due dates aur progress tracking." },
    { href: "/docs/syllabus", icon: "📚", title: "Syllabus Tracker", desc: "AI se syllabus banao aur topic-wise progress track karo." },
  ];
  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "inline-block", background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.3)", borderRadius: 100, padding: "4px 12px", fontSize: 12, color: "#7C5CFC", fontWeight: 600, marginBottom: 16 }}>v1.0.0</div>
        <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>Suari Ka Alarm <br /><span style={{ background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Documentation</span></h1>
        <p style={{ color: "#A0A0C0", fontSize: 18, maxWidth: 600 }}>Suari Ka Alarm ek AI-powered alarm app hai jisme Suari AI Agent, Todo Manager, Syllabus Tracker aur bahut kuch hai.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 48 }}>
        {sections.map(s => (
          <Link key={s.href} href={s.href} style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,92,252,0.15)", borderRadius: 12, padding: 24, textDecoration: "none", transition: "all 0.2s" }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontWeight: 700, color: "#F0F0FF", fontSize: 16, marginBottom: 8 }}>{s.title}</div>
            <div style={{ color: "#A0A0C0", fontSize: 13, lineHeight: 1.6 }}>{s.desc}</div>
          </Link>
        ))}
      </div>
      <div style={{ background: "rgba(124,92,252,0.08)", border: "1px solid rgba(124,92,252,0.2)", borderRadius: 12, padding: 24 }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 16 }}>⚡ Quick Start</h3>
        <p style={{ margin: 0, color: "#A0A0C0", fontSize: 14 }}>APK download karo GitHub se, install karo, aur directly use karo — koi login nahi, koi API key nahi!</p>
        <div style={{ marginTop: 16 }}>
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm/releases" target="_blank" style={{ display: "inline-block", background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", borderRadius: 8, padding: "10px 24px", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>📱 Download APK</Link>
        </div>
      </div>
    </div>
  );
}
