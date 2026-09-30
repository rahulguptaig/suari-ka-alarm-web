"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, alarms: 0, todos: 0, events: 0, completedTodos: 0, activeAlarms: 0 });
  const [loading, setLoading] = useState(true);
  const [recentAlarms, setRecentAlarms] = useState<any[]>([]);
  const [recentTodos, setRecentTodos] = useState<any[]>([]);

  useEffect(() => {
    async function loadStats() {
      const [{ count: users }, { count: alarms }, { count: todos }, { count: events }, { count: completedTodos }, { count: activeAlarms }, { data: latestAlarms }, { data: latestTodos }] = await Promise.all([
        supabase.from("suari_users").select("*", { count: "exact", head: true }),
        supabase.from("suari_alarms").select("*", { count: "exact", head: true }),
        supabase.from("suari_todos").select("*", { count: "exact", head: true }),
        supabase.from("suari_events").select("*", { count: "exact", head: true }),
        supabase.from("suari_todos").select("*", { count: "exact", head: true }).eq("is_completed", true),
        supabase.from("suari_alarms").select("*", { count: "exact", head: true }).eq("is_enabled", true),
        supabase.from("suari_alarms").select("*").order("created_at", { ascending: false }).limit(5),
        supabase.from("suari_todos").select("*").order("created_at", { ascending: false }).limit(5),
      ]);
      setStats({ users: users||0, alarms: alarms||0, todos: todos||0, events: events||0, completedTodos: completedTodos||0, activeAlarms: activeAlarms||0 });
      setRecentAlarms(latestAlarms || []);
      setRecentTodos(latestTodos || []);
      setLoading(false);
    }
    loadStats();
  }, []);

  const statCards = [
    { label: "Total Users", value: stats.users, icon: "👥", color: "#7C5CFC", sub: "registered devices" },
    { label: "Total Alarms", value: stats.alarms, icon: "⏰", color: "#FF6B9D", sub: `${stats.activeAlarms} active` },
    { label: "Total Todos", value: stats.todos, icon: "✅", color: "#00B8D9", sub: `${stats.completedTodos} completed` },
    { label: "Activity Events", value: stats.events, icon: "📊", color: "#00E676", sub: "tracked actions" },
  ];

  if (loading) return <div style={{color:"#A0A0C0",padding:40,fontSize:18}}>Loading dashboard... ⏳</div>;

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F0F0FF", margin: "0 0 4px" }}>📊 Dashboard</h1>
        <p style={{ color: "#606080", fontSize: 14, margin: 0 }}>Suari Ka Alarm — Real-time overview</p>
      </div>

      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 40 }}>
        {statCards.map(card => (
          <div key={card.label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${card.color}25`, borderRadius: 14, padding: 24, borderTop: `3px solid ${card.color}` }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: card.color, marginBottom: 4 }}>{card.value}</div>
            <div style={{ fontWeight: 600, color: "#F0F0FF", fontSize: 14, marginBottom: 4 }}>{card.label}</div>
            <div style={{ color: "#606080", fontSize: 12 }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Recent Data Tables */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Recent Alarms */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,92,252,0.15)", borderRadius: 14, padding: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, color: "#F0F0FF" }}>⏰ Recent Alarms</h2>
          {recentAlarms.length === 0 ? <p style={{color:"#606080",fontSize:13}}>No alarms yet</p> : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {recentAlarms.map((alarm) => (
                <div key={alarm.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{alarm.label || "Alarm"}</div>
                    <div style={{ color: "#606080", fontSize: 12 }}>{alarm.time}</div>
                  </div>
                  <div style={{ background: alarm.is_enabled ? "rgba(0,230,118,0.1)" : "rgba(255,77,77,0.1)", color: alarm.is_enabled ? "#00E676" : "#FF4D4D", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>
                    {alarm.is_enabled ? "Active" : "Off"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Todos */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,92,252,0.15)", borderRadius: 14, padding: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, color: "#F0F0FF" }}>✅ Recent Todos</h2>
          {recentTodos.length === 0 ? <p style={{color:"#606080",fontSize:13}}>No todos yet</p> : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {recentTodos.map((todo) => (
                <div key={todo.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, textDecoration: todo.is_completed ? "line-through" : "none", color: todo.is_completed ? "#606080" : "#F0F0FF" }}>{todo.title}</div>
                    <div style={{ color: "#606080", fontSize: 12 }}>{todo.priority} priority</div>
                  </div>
                  <div style={{ background: todo.priority === "high" ? "rgba(255,77,77,0.1)" : todo.priority === "medium" ? "rgba(255,184,0,0.1)" : "rgba(0,230,118,0.1)", color: todo.priority === "high" ? "#FF4D4D" : todo.priority === "medium" ? "#FFB800" : "#00E676", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>
                    {todo.priority}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
