export default function SyllabusDocsPage() {
  return (
    <div>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>📚 Syllabus Tracker</h1>
      <p style={{ color: "#A0A0C0", fontSize: 18, marginBottom: 40 }}>AI-powered syllabus management and progress tracking</p>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Subject Add Karo</h2>
      <ol style={{color:"#A0A0C0",lineHeight:2.2}}>
        <li>Syllabus tab pe jao</li>
        <li><strong style={{color:"#F0F0FF"}}>+ Subject</strong> button press karo</li>
        <li>Subject name likho (jaise "Physics", "Maths")</li>
        <li>Exam date set karo</li>
        <li>Color choose karo subject ke liye</li>
        <li>Save! 🎉</li>
      </ol>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>AI se Syllabus Generate Karo</h2>
      <p style={{color:"#A0A0C0"}}>Subject add karne ke baad, <strong style={{color:"#7C5CFC"}}>AI Generate</strong> button se Suari automatically tumhara complete syllabus banayega with topics and subtopics!</p>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Topic Status Track Karo</h2>
      <div style={{display:"grid",gap:12}}>
        {[{s:"⬜ Not Started",d:"Topic abhi shuru nahi hua",c:"#606080"},{s:"🔄 In Progress",d:"Topic par kaam chal raha hai",c:"#FFB800"},{s:"✅ Completed",d:"Topic complete ho gaya!",c:"#00E676"}].map(item=>(
          <div key={item.s} style={{display:"flex",gap:16,background:"rgba(255,255,255,0.03)",border:`1px solid ${item.c}30`,borderRadius:10,padding:16}}>
            <span style={{fontWeight:700,color:item.c,minWidth:140}}>{item.s}</span>
            <span style={{color:"#A0A0C0",fontSize:14}}>{item.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
