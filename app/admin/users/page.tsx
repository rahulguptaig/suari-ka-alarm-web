"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("suari_users").select("*").order("last_seen", { ascending: false })
      .then(({ data }) => { setUsers(data || []); setLoading(false); });
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F0F0FF", marginBottom: 4 }}>👥 Users</h1>
      <p style={{ color: "#606080", marginBottom: 32 }}>{users.length} registered devices</p>
      {loading ? <p style={{color:"#A0A0C0"}}>Loading...</p> : users.length === 0 ? (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,padding:40,textAlign:"center",color:"#606080"}}>
          <div style={{fontSize:48,marginBottom:16}}>👥</div>
          <div>No users yet. Install the app and it will appear here!</div>
        </div>
      ) : (
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(124,92,252,0.15)",borderRadius:14,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr style={{background:"rgba(124,92,252,0.1)"}}>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12,fontWeight:600}}>Device ID</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12,fontWeight:600}}>Name</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12,fontWeight:600}}>Platform</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12,fontWeight:600}}>Sessions</th>
              <th style={{padding:"12px 16px",textAlign:"left",color:"#A0A0C0",fontSize:12,fontWeight:600}}>Last Seen</th>
            </tr></thead>
            <tbody>{users.map(u => (
              <tr key={u.id} style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                <td style={{padding:"12px 16px",fontSize:12,color:"#606080",fontFamily:"monospace"}}>{u.device_id?.slice(0,20)}...</td>
                <td style={{padding:"12px 16px",fontSize:14}}>{u.user_name || "—"}</td>
                <td style={{padding:"12px 16px"}}><span style={{background:"rgba(124,92,252,0.1)",color:"#7C5CFC",borderRadius:20,padding:"3px 10px",fontSize:12}}>{u.platform}</span></td>
                <td style={{padding:"12px 16px",fontSize:14,color:"#A0A0C0"}}>{u.total_sessions}</td>
                <td style={{padding:"12px 16px",fontSize:12,color:"#606080"}}>{new Date(u.last_seen).toLocaleString()}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
