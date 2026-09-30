"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AlarmsAdminPage() {
  const [alarms, setAlarms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    supabase.from("suari_alarms").select("*").order("created_at", { ascending: false })
      .then(({ data }) => { setAlarms(data || []); setLoading(false); });
  }, []);

  const filtered = filter === "all" ? alarms : filter === "active" ? alarms.filter(a => a.is_enabled) : alarms.filter(a => !a.is_enabled);
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F0F0FF", marginBottom: 4 }}>⏰ All Alarms</h1>
      <p style={{ color: "#606080", marginBottom: 24 }}>{alarms.length} total · {alarms.filter(a=>a.is_enabled).length} active</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["all","active","inactive"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ background: filter===f ? "rgba(124,92,252,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${filter===f ? "#7C5CFC" : "rgba(255,255,255,0.1)"}`, borderRadius: 8, padding: "6px 16px", color: filter===f ? "#7C5CFC" : "#A0A0C0", cursor: "pointer", fontSize: 13, fontWeight: 600, textTransform: "capitalize" }}>{f}</button>
        ))}
      </div>
      {loading ? <p style={{color:"#A0A0C0"}}>Loading...</p> : filtered.length === 0 ? (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,padding:40,textAlign:"center",color:"#606080"}}>
          <div style={{fontSize:48,marginBottom:16}}>⏰</div><div>No alarms found</div>
        </div>
      ) : (
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr style={{background:"rgba(124,92,252,0.1)"}}>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Label</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Time</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Repeat</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Status</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Created</th>
            </tr></thead>
            <tbody>{filtered.map(alarm => (
              <tr key={alarm.id} style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                <td style={{padding:"12px 16px",fontWeight:600}}>{alarm.label || "Alarm"}</td>
                <td style={{padding:"12px 16px",fontSize:18,fontWeight:700,color:"#7C5CFC",fontFamily:"monospace"}}>{alarm.time}</td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#A0A0C0"}}>{alarm.days ? days.filter((_,i)=>alarm.days[i]).join(", ") || "Once" : "Once"}</td>
                <td style={{padding:"12px 16px"}}><span style={{background:alarm.is_enabled?"rgba(0,230,118,0.1)":"rgba(255,77,77,0.1)",color:alarm.is_enabled?"#00E676":"#FF4D4D",borderRadius:20,padding:"3px 10px",fontSize:12,fontWeight:600}}>{alarm.is_enabled?"Active":"Off"}</span></td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#606080"}}>{new Date(alarm.created_at).toLocaleDateString()}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
