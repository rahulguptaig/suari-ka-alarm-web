"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (password === "suari@admin2024" || password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      document.cookie = "admin_auth=true; path=/; max-age=86400";
      router.push("/admin/dashboard");
    } else {
      setError("❌ Wrong password! Try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#060612", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 400, padding: 40, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,92,252,0.2)", borderRadius: 20 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 16px" }}>🛡️</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#F0F0FF", margin: "0 0 8px" }}>Admin Panel</h1>
          <p style={{ color: "#606080", fontSize: 14, margin: 0 }}>Suari Ka Alarm — Control Center</p>
        </div>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontSize: 13, color: "#A0A0C0", marginBottom: 8, display: "block" }}>Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(124,92,252,0.3)", borderRadius: 10, padding: "12px 16px", color: "#F0F0FF", fontSize: 15, outline: "none", boxSizing: "border-box" }}
            />
          </div>
          {error && <div style={{ background: "rgba(255,77,77,0.1)", border: "1px solid rgba(255,77,77,0.3)", borderRadius: 8, padding: "10px 14px", color: "#FF4D4D", fontSize: 14 }}>{error}</div>}
          <button
            type="submit"
            disabled={loading}
            style={{ background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", border: "none", borderRadius: 10, padding: "14px", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer", width: "100%" }}
          >
            {loading ? "Logging in..." : "🔐 Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
