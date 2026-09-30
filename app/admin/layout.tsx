"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/locales";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/admin/dashboard", label: t(language, 'dashboard'), icon: "📊" },
    { href: "/admin/users", label: t(language, 'total_users'), icon: "👥" },
    { href: "/admin/alarms", label: t(language, 'total_alarms'), icon: "⏰" },
    { href: "/admin/todos", label: t(language, 'total_todos'), icon: "✅" },
    { href: "/admin/events", label: "Activity Log", icon: "📋" },
  ];

  if (pathname === "/admin") return <>{children}</>;

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-[#060612] text-[#F0F0FF]">
      {/* Mobile Header (Hidden on Desktop) */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-[#7C5CFC]/20 bg-[#0a0a1e] sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] text-sm">🛡️</div>
          <span className="font-bold text-sm">Suari Admin</span>
        </div>
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
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`flex items-center gap-3 border-b border-white/5 px-4 py-3 text-sm font-medium ${pathname === item.href ? "text-[#7C5CFC] bg-[#7C5CFC]/10" : "text-[#A0A0C0] hover:bg-white/5 hover:text-white"}`}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#606080] hover:text-white">
            Back to Site
          </Link>
        </nav>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[240px] flex-col bg-[#0a0a1e] border-r border-[#7C5CFC]/15 p-5 sticky top-0 h-screen shrink-0 relative">
        <div className="flex items-center gap-2.5 mb-8 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#FF6B9D] text-sm shadow-md">🛡️</div>
          <div>
            <div className="font-bold text-[#F0F0FF] text-sm">Suari Admin</div>
            <div className="text-[11px] text-[#606080]">Control Panel</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${pathname === item.href ? "bg-[#7C5CFC]/10 text-[#7C5CFC] border-l-2 border-[#7C5CFC]" : "text-[#A0A0C0] border-l-2 border-transparent hover:bg-white/5 hover:text-white"}`}>
              <span>{item.icon}</span><span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-5 left-3 right-3">
          <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-[#606080] transition-colors hover:bg-white/5 hover:text-white">
            ⬅️ Back to Site
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-[1200px] w-full">
        {children}
      </main>
    </div>
  );
}
