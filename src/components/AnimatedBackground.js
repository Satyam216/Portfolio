'use client';
import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    // generate small set of floating dots
    const root = document.querySelector('.particles');
    if (!root) return;
    root.innerHTML = '';
    const count = 60;
    for (let i=0;i<count;i++){
      const d = document.createElement('span');
      d.className = 'p';
      d.style.left = Math.random()*100 + 'vw';
      d.style.bottom = Math.random()*100 + 'vh';
      d.style.opacity = (0.4 + Math.random()*0.6).toString();
      d.style.filter = 'blur('+(Math.random()*1.5)+'px)';
      d.style.setProperty('--t', (8 + Math.random()*10)+'s');
      root.appendChild(d);
    }
  }, []);
  return <div className="particles" aria-hidden="true" />;
}
