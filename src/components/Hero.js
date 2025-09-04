'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const el = document.getElementById('type');
    const text = 'Full‑Stack & Backend Developer';
    let i = 0;
    const timer = setInterval(() => {
      if (!el) return;
      el.textContent = text.slice(0, i++);
      if (i > text.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container reveal" style={{ display:'grid', gap:20, gridTemplateColumns:'1.1fr .9fr', alignItems:'center' }}>
      {/* Left: Intro */}
      <div>
        <h1 style={{ marginBottom: 6 }}>
            Hello,&nbsp;This is{' '}
            <span className="gradient-text">Satyam Jain</span>
        </h1>

        {/* Roles under name */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <span className="role-chip role-main">Full‑Stack Developer</span>
        </div>

        {/* Typing line */}
        <h2 id="type" aria-label="typing" style={{ marginTop:8 }} />

        {/* Small intro */}
        <p style={{ maxWidth: 720, color: 'var(--muted)', marginTop: 10 }}>
          Crafting resilient APIs, scalable data layers, and smooth, accessible UIs with modern web tooling. 
        </p>

        {/* Social above buttons */}
        <div style={{ display:'flex', gap:12, marginTop:20 }}>
          <a className="social" aria-label="GitHub" href="https://github.com/Satyam216" target="_blank" rel="noreferrer">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.30.82-.58l-.01-2.27c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.29 1.23a11.4 11.4 0 0 1 6 0C16.3 4.9 17.3 5.22 17.3 5.22c.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
          </a>
          <a className="social li" aria-label="LinkedIn" href="https://www.linkedin.com/in/satyam-jain-874b66143/" target="_blank" rel="noreferrer">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V23h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V23h-4V8.5z"/></svg>
          </a>
          <a className="social lc" aria-label="LeetCode" href="https://leetcode.com/u/satyam_2106/" target="_blank" rel="noreferrer">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4 2.8a1.2 1.2 0 0 1 1.7 0l3.1 3.1a1.2 1.2 0 0 1 0 1.7l-1.6 1.6a6.8 6.8 0 1 1-10 9.2l-3.7-3.7a1.2 1.2 0 0 1 0-1.7l1.9-1.9a1.2 1.2 0 0 1 1.7 0l2.9 2.9a2.8 2.8 0 1 0 4-3.9l-3-3a1.2 1.2 0 0 1 0-1.7L15.4 2.8z"/></svg>
          </a>
        </div>

        {/* Buttons row: keep Projects + Resume */}
        <div className="actions" style={{ marginTop:25, gap:12 }}>
          <a className="btn ghost" href="#projects">View Projects</a>
          <a className="btn" href="https://github.com/Satyam216/Resume/raw/main/Resume.pdf" download>Get Resume ⬇</a>
        </div>
      </div>

      {/* Right: Glass code card */}
      <aside className="code-card reveal" aria-hidden="false">
        <div className="traffic">
          <span/><span/><span/>
        </div>
        <pre className="code">
{`const coder = {
  name: 'Satyam Jain',
  roles: ['Full‑Stack', 'Backend'],
  skills: 
  programming: ['C', 'C++', 'Java', 'Python'],
  web: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  frameworks: ['React.js', 'Next.js','React Native', 'Tailwind CSS', 'WebSocket'],
  databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
  tools: ['GitHub','Firebase','Supabase', 'AWS', 'Vercel', 'Postman', 'JWT'],
  highlight() {
    return [
      'Clean Code', 'API Design', 'Auth', 'Testing'
    ],
  strengths: ['Clean Code', 'API Design', 'Auth', 'Testing'],
  currently: 'Building fast UIs & reliable APIs',
};`}
        </pre>
      </aside>
    </div>
  );
}
