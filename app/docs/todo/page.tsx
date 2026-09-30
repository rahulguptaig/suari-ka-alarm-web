export default function TodoDocsPage() {
  return (
    <div>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>✅ Todo Manager</h1>
      <p style={{ color: "#A0A0C0", fontSize: 18, marginBottom: 40 }}>Priority-based task management with filters</p>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Task Banao</h2>
      <ol style={{color:"#A0A0C0",lineHeight:2.2}}>
        <li>Todo tab pe jao</li>
        <li><strong style={{color:"#F0F0FF"}}>+ button</strong> press karo</li>
        <li>Title aur description likho</li>
        <li><strong style={{color:"#F0F0FF"}}>Priority</strong> set karo: Low / Medium / High</li>
        <li>Subject assign karo (optional)</li>
        <li>Due date set karo (optional)</li>
        <li>Save karo! ✅</li>
      </ol>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Priority Levels</h2>
      <div style={{display:"grid",gap:12}}>
        {[{p:"🔴 High",d:"Urgent tasks — exam, assignment deadlines",c:"#FF4D4D"},{p:"🟡 Medium",d:"Important but not urgent — regular study",c:"#FFB800"},{p:"🟢 Low",d:"Nice to do — extra reading, revision",c:"#00E676"}].map(item=>(
          <div key={item.p} style={{display:"flex",gap:16,background:"rgba(255,255,255,0.03)",border:`1px solid ${item.c}30`,borderRadius:10,padding:16,alignItems:"center"}}>
            <span style={{fontWeight:700,color:item.c,minWidth:100}}>{item.p}</span>
            <span style={{color:"#A0A0C0",fontSize:14}}>{item.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
