export default function SuariAIDocsPage() {
  return (
    <div>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>🤖 Suari AI</h1>
      <p style={{ color: "#A0A0C0", fontSize: 18, marginBottom: 40 }}>Tera personal AI study companion — 3 modes mein</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginBottom:40}}>
        {[
          {mode:"💬 Chat",desc:"General baatein, questions, motivation sab kuch",color:"#7C5CFC"},
          {mode:"🤖 Agent",desc:"Alarm set karo, todo banao — actions le sakta hai",color:"#FF6B9D"},
          {mode:"🔍 Research",desc:"Deep study aur detailed explanations",color:"#00B8D9"},
        ].map(m => (
          <div key={m.mode} style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${m.color}40`,borderRadius:12,padding:20,borderTop:`3px solid ${m.color}`}}>
            <div style={{fontWeight:700,marginBottom:8,color:m.color}}>{m.mode}</div>
            <div style={{color:"#A0A0C0",fontSize:13,lineHeight:1.6}}>{m.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Chat Mode mein kya pooch sakte ho?</h2>
      <div style={{display:"grid",gap:10}}>
        {[
          '"Kal exam hai, kaise prepare karun?"',
          '"Aaj ka schedule bana do"',
          '"Mujhe Physics mein help chahiye"',
          '"Motivate karo mujhe!"',
          '"Time management tips do"',
        ].map(q => (
          <div key={q} style={{background:"rgba(124,92,252,0.08)",border:"1px solid rgba(124,92,252,0.2)",borderRadius:8,padding:"12px 16px",color:"#A0A0C0",fontSize:14,fontStyle:"italic"}}>{q}</div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Agent Mode — Actions</h2>
      <p style={{color:"#A0A0C0"}}>Agent mode mein Suari directly app mein changes kar sakta hai:</p>
      <ul style={{color:"#A0A0C0",lineHeight:2.2}}>
        <li><code style={{background:"rgba(124,92,252,0.1)",padding:"2px 8px",borderRadius:4,color:"#7C5CFC"}}>"Kal subah 6 baje alarm set karo"</code></li>
        <li><code style={{background:"rgba(124,92,252,0.1)",padding:"2px 8px",borderRadius:4,color:"#7C5CFC"}}>"Physics assignment add karo todo mein"</code></li>
        <li><code style={{background:"rgba(124,92,252,0.1)",padding:"2px 8px",borderRadius:4,color:"#7C5CFC"}}>"Maths ka syllabus banao"</code></li>
      </ul>

      <div style={{background:"rgba(0,230,118,0.06)",border:"1px solid rgba(0,230,118,0.2)",borderRadius:10,padding:20,marginTop:32}}>
        <strong style={{color:"#00E676"}}>💡 Pro Tip</strong>
        <p style={{color:"#A0A0C0",margin:"8px 0 0",fontSize:14}}>Suari tumhe yaad karta hai! Apna naam, subjects aur preferences ek baar batao — aage Suari automatically personalized help dega.</p>
      </div>
    </div>
  );
}
