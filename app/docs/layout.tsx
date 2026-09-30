import Link from "next/link";

const navItems = [
  { href: "/docs", label: "Overview", icon: "🏠" },
  { href: "/docs/getting-started", label: "Getting Started", icon: "🚀" },
  { href: "/docs/alarm", label: "Alarm System", icon: "⏰" },
  { href: "/docs/suari-ai", label: "Suari AI", icon: "🤖" },
  { href: "/docs/todo", label: "Todo Manager", icon: "✅" },
  { href: "/docs/syllabus", label: "Syllabus Tracker", icon: "📚" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#080818" }}>
      {/* Sidebar */}
      <aside style={{ width: 260, background: "#0a0a1e", borderRight: "1px solid rgba(124,92,252,0.15)", padding: "24px 16px", position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 32, padding: "0 8px" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🔔</div>
          <span style={{ fontWeight: 700, color: "#F0F0FF", fontSize: 15 }}>Suari Ka Alarm</span>
        </Link>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#606080", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, padding: "0 8px" }}>Documentation</div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, color: "#A0A0C0", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "all 0.15s" }}
              className="docs-nav-item">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: 32, padding: "16px 12px", background: "rgba(124,92,252,0.08)", borderRadius: 10, border: "1px solid rgba(124,92,252,0.2)" }}>
          <div style={{ fontSize: 12, color: "#A0A0C0", lineHeight: 1.6 }}>Need help? Chat with Suari AI in the app! 🌟</div>
        </div>
      </aside>
      {/* Content */}
      <main style={{ flex: 1, padding: "48px 64px", maxWidth: 900, color: "#F0F0FF", lineHeight: 1.8 }}>
        {children}
      </main>
    </div>
  );
}
