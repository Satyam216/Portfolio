'use client';
import { useState, useMemo } from 'react';

export default function Projects() {
  const projects = useMemo(() => ([
    {
      id: 'todo-collab',
      name: 'ToDo‑Collab',
      period: 'Feb 2025 — Mar 2025',
      role: 'Full Stack Developer',
      brief: 'Real‑time collaborative task manager.',
      stack: ['Next.js','Tailwind CSS','Firebase Auth','Firestore','Vercel'],
      impact: [
        'Multi‑user rooms with live editing & presence.',
        'Optimized queries; supported 100+ concurrent users.',
        '25% perf improvement via state & query tuning.',
      ],
      links: { live: 'https://todo-collab.vercel.app', repo: '' },
    },
    {
      id: 'cityshop',
      name: 'CityShop',
      period: 'Dec 2024 — Mar 2025',
      role: 'Backend Developer',
      brief: 'Local marketplace for shopkeepers & shoppers.',
      stack: ['React Native','PostgreSQL','Supabase'],
      impact: [
        'Secure auth and backend API integration.',
        'Instant listings and payments for local stores.',
      ],
      links: { live: '', repo: '' },
    },
    {
      id: 'pg-life',
      name: 'PG‑Life',
      period: 'Jun 2023 — Aug 2023',
      role: 'Full Stack Developer',
      brief: 'Responsive PG accommodation website.',
      stack: ['HTML','CSS','JavaScript','PHP'],
      impact: [
        'Advanced filters and responsive UI.',
        'Secure sessions & authentication.',
      ],
      links: { live: '', repo: '' },
    },
  ]), []);

  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find(p => p.id === activeId) ?? projects[0];

  return (
    <section id="projects" className="section projects-master">
      <div className="container">
        <div className="proj-head">
          <span className="proj-line" />
          <h2 className="proj-title">Featured Projects</h2>
          <span className="proj-line" />
        </div>

        {/* Master–Detail layout: left detail, right cards */}
        <div className="proj-grid">
          {/* LEFT: detail panel */}
          <div className="proj-detail card reveal">
            <pre className="code">
{`const project = {
  name: '${active.name}',
  period: '${active.period}',
  role: '${active.role}',
  stack: ${JSON.stringify(active.stack)},
  highlights: ${JSON.stringify(active.impact, null, 0)}
};`}
            </pre>

            <div className="detail-meta">
              <div className="chips">
                {active.stack.map(s => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
              <div className="links">
                {active.links.live && (
                  <a className="btn ghost" href={active.links.live} target="_blank" rel="noreferrer">Live ↗</a>
                )}
                {active.links.repo && (
                  <a className="btn ghost" href={active.links.repo} target="_blank" rel="noreferrer">Repo ↗</a>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: cards list */}
          <div className="proj-cards">
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={`proj-card card reveal ${activeId === p.id ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 70}ms` }}
                onClick={() => setActiveId(p.id)}
              >
                <div className="thumb" />
                <div className="pc-top">
                  <strong className="pc-name">{p.name}</strong>
                  <span className="pc-period">{p.period}</span>
                </div>
                <p className="pc-brief">{p.brief}</p>
                <div className="pc-tags">
                  {p.stack.slice(0,3).map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
