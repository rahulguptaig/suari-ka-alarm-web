"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/admin/users", label: "Users", icon: "👥" },
  { href: "/admin/alarms", label: "Alarms", icon: "⏰" },
  { href: "/admin/todos", label: "Todos", icon: "✅" },
  { href: "/admin/events", label: "Activity Log", icon: "📋" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin") return <>{children}</>;
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#060612" }}>
      <aside style={{ width: 240, background: "#0a0a1e", borderRight: "1px solid rgba(124,92,252,0.15)", padding: "20px 12px", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px", marginBottom: 32 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7C5CFC,#FF6B9D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🛡️</div>
          <div>
            <div style={{ fontWeight: 700, color: "#F0F0FF", fontSize: 14 }}>Suari Admin</div>
            <div style={{ fontSize: 11, color: "#606080" }}>Control Panel</div>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, color: pathname === item.href ? "#7C5CFC" : "#A0A0C0", textDecoration: "none", fontSize: 14, fontWeight: 500, background: pathname === item.href ? "rgba(124,92,252,0.12)" : "transparent", borderLeft: pathname === item.href ? "2px solid #7C5CFC" : "2px solid transparent", transition: "all 0.15s" }}>
              <span>{item.icon}</span><span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div style={{ position: "absolute", bottom: 20, left: 12, right: 12 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 8, color: "#606080", textDecoration: "none", fontSize: 13 }}>
            ← Back to Site
          </Link>
        </div>
      </aside>
      <main style={{ flex: 1, padding: "32px", overflowY: "auto" }}>{children}</main>
    </div>
  );
}
