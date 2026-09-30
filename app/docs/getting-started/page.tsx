export default function GettingStartedPage() {
  return (
    <div>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>🚀 Getting Started</h1>
      <p style={{ color: "#A0A0C0", fontSize: 18, marginBottom: 40 }}>Suari Ka Alarm ko 2 minute mein setup karo</p>
      
      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Step 1: APK Download Karo</h2>
      <p style={{ color: "#A0A0C0" }}>GitHub releases page pe jao aur latest <code style={{background:"rgba(124,92,252,0.1)",padding:"2px 8px",borderRadius:4,color:"#7C5CFC"}}>SuariKaAlarm.apk</code> download karo.</p>
      <pre><code>https://github.com/rahulguptaig/suari-ka-alarm/releases</code></pre>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Step 2: Install Karo</h2>
      <div style={{background:"rgba(255,107,107,0.08)",border:"1px solid rgba(255,107,107,0.2)",borderRadius:10,padding:16,marginBottom:16}}>
        <strong style={{color:"#FF6B6B"}}>⚠️ Unknown Sources</strong>
        <p style={{color:"#A0A0C0",margin:"8px 0 0",fontSize:14}}>Settings → Security → Unknown Sources ko enable karo pehle, phir APK install karo.</p>
      </div>
      <ol style={{color:"#A0A0C0",lineHeight:2}}>
        <li>Downloaded APK file par tap karo</li>
        <li>"Install" button press karo</li>
        <li>Permissions allow karo (notifications, alarms)</li>
        <li>App launch karo! 🎉</li>
      </ol>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Step 3: Pehla Alarm Set Karo</h2>
      <ol style={{color:"#A0A0C0",lineHeight:2}}>
        <li>App open karo — Alarm tab pe already rahoge</li>
        <li>Bottom right mein <strong style={{color:"#7C5CFC"}}>+ button</strong> press karo</li>
        <li>Time select karo, label likho</li>
        <li>Repeat days choose karo (optional)</li>
        <li>Save! ✅</li>
      </ol>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16, borderBottom: "1px solid rgba(124,92,252,0.2)", paddingBottom: 12 }}>Step 4: Suari AI se Baat Karo</h2>
      <p style={{color:"#A0A0C0"}}>Bottom navigation mein <strong style={{color:"#7C5CFC"}}>Suari tab</strong> pe tap karo aur apna pehla message type karo. Koi setup nahi chahiye — AI already ready hai!</p>
      
      <div style={{background:"rgba(0,230,118,0.06)",border:"1px solid rgba(0,230,118,0.2)",borderRadius:10,padding:16,marginTop:32}}>
        <strong style={{color:"#00E676"}}>✅ Ab tum ready ho!</strong>
        <p style={{color:"#A0A0C0",margin:"8px 0 0",fontSize:14}}>Aur features explore karne ke liye baaki docs padho — Todo Manager, Syllabus Tracker sab awaits!</p>
      </div>
    </div>
  );
}
