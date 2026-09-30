"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EventsAdminPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("suari_events").select("*").order("created_at", { ascending: false }).limit(100)
      .then(({ data }) => { setEvents(data || []); setLoading(false); });
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F0F0FF", marginBottom: 4 }}>📋 Activity Log</h1>
      <p style={{ color: "#606080", marginBottom: 32 }}>Last {events.length} tracked events</p>
      {loading ? <p style={{color:"#A0A0C0"}}>Loading...</p> : events.length === 0 ? (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,padding:40,textAlign:"center",color:"#606080"}}>
          <div style={{fontSize:48,marginBottom:16}}>📋</div><div>No activity logged yet. Events will appear as users use the app.</div>
        </div>
      ) : (
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr style={{background:"rgba(124,92,252,0.1)"}}>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Event</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Device</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Data</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12}}>Time</th>
            </tr></thead>
            <tbody>{events.map(ev => (
              <tr key={ev.id} style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                <td style={{padding:"12px 16px"}}><span style={{background:"rgba(124,92,252,0.1)",color:"#7C5CFC",borderRadius:20,padding:"3px 10px",fontSize:12,fontWeight:600}}>{ev.event_name}</span></td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#606080",fontFamily:"monospace"}}>{ev.device_id?.slice(0,16)}...</td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#A0A0C0",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ev.event_data ? JSON.stringify(ev.event_data) : "—"}</td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#606080"}}>{new Date(ev.created_at).toLocaleString()}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
