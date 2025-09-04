'use client';
import { useEffect } from 'react';

const items = [
  { label:'React', val:90 },
  { label:'Next.js', val:88 },
  { label:'Node.js', val:85 },
  { label:'TypeScript', val:82 },
  { label:'CSS', val:86 },
  { label:'MongoDB', val:78 },
];

export default function Skills() {
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.querySelectorAll('.bar > span').forEach(s=>{
            s.style.width = s.dataset.w + '%';
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .3 });
    const el = document.getElementById('skills-grid');
    if(el) obs.observe(el);
    return ()=>obs.disconnect();
  }, []);

  return (
    <div className="container">
      <h2 className="reveal">Skills</h2>
      <div id="skills-grid" className="grid skills reveal">
        {items.map(it=>(
          <div key={it.label} className="card">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <strong>{it.label}</strong><span>{it.val}%</span>
            </div>
            <div className="bar" style={{marginTop:10}}>
              <span data-w={it.val}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
