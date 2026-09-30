"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TodosAdminPage() {
  const [todos, setTodos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    supabase.from("suari_todos").select("*").order("created_at", { ascending: false })
      .then(({ data }) => { setTodos(data || []); setLoading(false); });
  }, []);

  const filtered = filter === "all" ? todos : filter === "pending" ? todos.filter(t => !t.is_completed) : todos.filter(t => t.is_completed);
  const pColor: any = { high: "#FF4D4D", medium: "#FFB800", low: "#00E676" };

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F0F0FF", marginBottom: 4 }}>✅ All Todos</h1>
      <p style={{ color: "#606080", marginBottom: 24 }}>{todos.length} total · {todos.filter(t=>t.is_completed).length} completed</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["all","pending","completed"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ background: filter===f ? "rgba(124,92,252,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${filter===f ? "#7C5CFC" : "rgba(255,255,255,0.1)"}`, borderRadius: 8, padding: "6px 16px", color: filter===f ? "#7C5CFC" : "#A0A0C0", cursor: "pointer", fontSize: 13, fontWeight: 600, textTransform: "capitalize" }}>{f}</button>
        ))}
      </div>
      {loading ? <p style={{color:"#A0A0C0"}}>Loading...</p> : (
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr style={{background:"rgba(124,92,252,0.1)"}}>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Title</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Subject</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Priority</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Status</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Due Date</th>
            </tr></thead>
            <tbody>{filtered.map(todo => (
              <tr key={todo.id} style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                <td style={{padding:"12px 16px",fontWeight:600,textDecoration:todo.is_completed?"line-through":"none",color:todo.is_completed?"#606080":"#F0F0FF"}}>{todo.title}</td>
                <td style={{padding:"12px 16px",fontSize:13,color:"#A0A0C0"}}>{todo.subject || "—"}</td>
                <td style={{padding:"12px 16px"}}><span style={{background:`${pColor[todo.priority]}15`,color:pColor[todo.priority],borderRadius:20,padding:"3px 10px",fontSize:12,fontWeight:600,textTransform:"capitalize"}}>{todo.priority}</span></td>
                <td style={{padding:"12px 16px"}}><span style={{background:todo.is_completed?"rgba(0,230,118,0.1)":"rgba(255,184,0,0.1)",color:todo.is_completed?"#00E676":"#FFB800",borderRadius:20,padding:"3px 10px",fontSize:12,fontWeight:600}}>{todo.is_completed?"Done":"Pending"}</span></td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#606080"}}>{todo.due_date || "—"}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
