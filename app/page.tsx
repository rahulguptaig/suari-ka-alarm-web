import Link from "next/link";

export default function HomePage() {
  const features = [
    { icon: "⏰", title: "Smart Alarms", desc: "Repeating alarms with snooze, vibration, and custom sounds. Never miss anything." },
    { icon: "🤖", title: "Suari AI", desc: "Chat, Agent, and Research modes. Your personal AI study companion." },
    { icon: "✅", title: "Todo Manager", desc: "Priority-based task management with subjects and due dates." },
    { icon: "📚", title: "Syllabus Tracker", desc: "AI-powered syllabus planning and topic progress tracking." },
    { icon: "🔍", title: "Internet Search", desc: "Suari searches the web for you with AI-summarized results." },
    { icon: "💬", title: "Chat History", desc: "All conversations saved in organized threads. Suari remembers you." },
  ];

  const steps = [
    { n: "01", title: "Download App", desc: "Download Suari Ka Alarm APK from our GitHub releases." },
    { n: "02", title: "Open App", desc: "Launch the app — Suari AI is already configured and ready!" },
    { n: "03", title: "Set Alarms", desc: "Create your first alarm with custom label, repeat, and sound." },
    { n: "04", title: "Chat with Suari", desc: "Open the Suari tab and start chatting with your AI companion." },
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
          <Link href="/docs" style={{ color: "#A0A0C0", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Docs</Link>
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" style={{ color: "#A0A0C0", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>GitHub</Link>
          <Link href="/admin" style={{ background: "rgba(124,92,252,0.15)", border: "1px solid rgba(124,92,252,0.4)", borderRadius: 8, padding: "8px 16px", color: "#7C5CFC", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Admin Panel</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 40px 80px", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "inline-block", background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#7C5CFC", fontWeight: 600, marginBottom: 24 }}>
          🌟 AI-Powered Alarm App
        </div>
        <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          <span style={{ background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Suari Ka Alarm</span>
          <br />Your Smart AI Companion
        </h1>
        <p style={{ fontSize: 20, color: "#A0A0C0", lineHeight: 1.7, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
          Ek smart alarm app jisme Suari AI hai — padhai, tasks, syllabus sab kuch ek jagah manage karo with your personal AI buddy.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="https://github.com/rahulguptaig/suari-ka-alarm/releases" target="_blank" style={{ display: "inline-block", background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", borderRadius: 12, padding: "14px 32px", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, boxShadow: "0 8px 32px rgba(124,92,252,0.4)" }}>
            📱 Download APK
          </Link>
          <Link href="/docs" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(124,92,252,0.3)", borderRadius: 12, padding: "14px 32px", color: "#F0F0FF", textDecoration: "none", fontWeight: 600, fontSize: 16 }}>
            📖 View Docs
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 700, marginBottom: 16 }}>
          Kya kya hai <span style={{ background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Suari</span> mein?
        </h2>
        <p style={{ textAlign: "center", color: "#A0A0C0", marginBottom: 56 }}>Sab kuch ek hi app mein — alarms, AI, tasks, aur zyada</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,92,252,0.15)", borderRadius: 16, padding: 28, transition: "all 0.2s" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: "#A0A0C0", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section style={{ padding: "80px 40px", background: "rgba(124,92,252,0.04)", borderTop: "1px solid rgba(124,92,252,0.1)", borderBottom: "1px solid rgba(124,92,252,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Kaise Use Karein?</h2>
          <p style={{ textAlign: "center", color: "#A0A0C0", marginBottom: 56 }}>Sirf 4 steps mein shuru karo</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 800, fontSize: 16 }}>{s.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#A0A0C0", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Ready to meet <span style={{ background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Suari</span>? 🌟</h2>
        <p style={{ color: "#A0A0C0", marginBottom: 40, fontSize: 18 }}>Free mein download karo. Koi signup nahi, koi password nahi.</p>
        <Link href="https://github.com/rahulguptaig/suari-ka-alarm/releases" target="_blank" style={{ display: "inline-block", background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", borderRadius: 12, padding: "16px 40px", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 18, boxShadow: "0 8px 40px rgba(124,92,252,0.5)" }}>
          Download Suari Ka Alarm — Free 🚀
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(124,92,252,0.15)", padding: "32px 40px", textAlign: "center", color: "#606080", fontSize: 13 }}>
        <p>Made with ❤️ by Suari Team · <Link href="/docs" style={{ color: "#7C5CFC", textDecoration: "none" }}>Docs</Link> · <Link href="https://github.com/rahulguptaig/suari-ka-alarm" target="_blank" style={{ color: "#7C5CFC", textDecoration: "none" }}>GitHub</Link></p>
      </footer>
    </main>
  );
}
