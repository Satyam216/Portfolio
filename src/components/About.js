export default function About() {
  return (
    <div className="container grid reveal" style={{gap:18}}>
      <div className="card">
        <h2>About Me</h2>
        <p style={{color:'var(--muted)'}}>
          Passionate developer crafting scalable frontends and robust backends. Focus on performance, accessibility, and engaging UI motion.
        </p>
      </div>
      <div className="card">
        <h3>Toolbox</h3>
        <ul style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:10, listStyle:'none'}}>
          {['React','Next.js','Node.js','TypeScript','MongoDB','PostgreSQL','Docker','AWS','Figma'].map(s=>(
            <li key={s} className="card" style={{padding:'10px 12px'}}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
