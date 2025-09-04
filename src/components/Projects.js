export default function Projects() {
  const data = [
    { name:'E‑Commerce Platform', desc:'React + Node + MongoDB storefront', tech:'React • Node • MongoDB' },
    { name:'Task Manager', desc:'Collaboration boards and real‑time updates', tech:'Next.js • Prisma • Postgres' },
    { name:'Portfolio', desc:'Animated one‑page site with scroll effects', tech:'Next.js • CSS • IO API' },
  ];
  return (
    <div className="container">
      <h2 className="reveal">Featured Projects</h2>
      <div className="grid projects">
        {data.map((p,i)=>(
          <article key={p.name} className="card project reveal" style={{transitionDelay:`${i*80}ms`}}>
            <div className="thumb" />
            <h3 style={{marginTop:8}}>{p.name}</h3>
            <p style={{color:'var(--muted)'}}>{p.desc}</p>
            <p style={{marginTop:8, fontSize:14, color:'#bfe6ff'}}>{p.tech}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
