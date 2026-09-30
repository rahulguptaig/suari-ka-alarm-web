export default function AlarmDocsPage() {
  return (
    <div>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>⏰ Alarm System</h1>
      <p style={{ color: "#A0A0C0", fontSize: 18, marginBottom: 40 }}>Smart alarms with AI-powered features</p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Alarm Banao</h2>
      <ol style={{color:"#A0A0C0",lineHeight:2.2}}>
        <li><strong style={{color:"#F0F0FF"}}>+ Button</strong> pe tap karo alarm screen pe</li>
        <li><strong style={{color:"#F0F0FF"}}>Time</strong> select karo — tap karke time picker khulega</li>
        <li><strong style={{color:"#F0F0FF"}}>Label</strong> likho — jaise "Morning Study", "Class", etc.</li>
        <li><strong style={{color:"#F0F0FF"}}>Repeat Days</strong> choose karo — Sun se Sat tak</li>
        <li><strong style={{color:"#F0F0FF"}}>Sound & Vibration</strong> set karo</li>
        <li><strong style={{color:"#F0F0FF"}}>Snooze</strong> enable/disable karo (5 min default)</li>
        <li><strong style={{color:"#F0F0FF"}}>Save</strong> karo ✅</li>
      </ol>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Features</h2>
      <div style={{display:"grid",gap:12}}>
        {[
          {icon:"🔁",f:"Repeat Days","d":"Specific days par alarm set karo — daily, weekdays, weekends, ya custom"},
          {icon:"😴",f:"Snooze","d":"5 minute ka snooze — ek baar alarm band karo thodi der ke liye"},
          {icon:"📳",f:"Vibration","d":"Alarm ke saath vibration toggle karo"},
          {icon:"🔊",f:"Custom Sound","d":"Different alarm sounds choose karo"},
          {icon:"🏷️",f:"Labels","d":"Har alarm ko meaningful naam do"},
          {icon:"☁️",f:"Cloud Sync","d":"Supabase backend par auto-save — data safe rahega"},
        ].map(item => (
          <div key={item.f} style={{display:"flex",gap:16,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(124,92,252,0.1)",borderRadius:10,padding:16,alignItems:"flex-start"}}>
            <span style={{fontSize:24,flexShrink:0}}>{item.icon}</span>
            <div><div style={{fontWeight:600,marginBottom:4}}>{item.f}</div><div style={{color:"#A0A0C0",fontSize:14}}>{item.d}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
