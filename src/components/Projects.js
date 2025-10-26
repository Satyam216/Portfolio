'use client';
import { useMemo, useState, useEffect, useRef } from "react";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        id: "todo-collab",
        name: "ToDo-Collab",
        period: "Feb 2025 — Mar 2025",
        role: "Full Stack Developer",
        brief: "Real-time collaborative task manager.",
        stack: ["Next.js", "Tailwind CSS", "Firebase Auth", "Firestore", "Vercel"],
        impact: [
          "Multi-user rooms with live editing & presence.",
          "Optimized queries; supported 100+ concurrent users.",
          "25% perf improvement via state & query tuning.",
        ],
        links: { live: "https://todo-collab.vercel.app", repo: "" },
      },
      {
        id: "cityshop",
        name: "CityShop",
        period: "Dec 2024 — Mar 2025",
        role: "Backend Developer",
        brief: "Local marketplace for shopkeepers & shoppers.",
        stack: ["React Native", "PostgreSQL", "Supabase"],
        impact: [
          "Secure auth and backend API integration.",
          "Instant listings and payments for local stores.",
        ],
        links: { live: "", repo: "" },
      },
      {
        id: "pg-life",
        name: "PG-Life",
        period: "Jun 2023 — Aug 2023",
        role: "Full Stack Developer",
        brief: "Responsive PG accommodation website.",
        stack: ["HTML", "CSS", "JavaScript", "PHP"],
        impact: [
          "Advanced filters and responsive UI.",
          "Secure sessions & authentication.",
        ],
        links: { live: "", repo: "" },
      },
    ],
    []
  );

  // hover state for desktop (existing behaviour)
  const [hoveredId, setHoveredId] = useState(null);
  // open state for mobile (click/tap)
  const [openId, setOpenId] = useState(null);
  // track if we are on mobile width
  const [isMobile, setIsMobile] = useState(false);
  const rootRef = useRef(null);

  // media query watcher for mobile
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 980px)');
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  // close open detail when clicking outside (mobile only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    function onDocClick(e) {
      if (!isMobile) return; // only for mobile behaviour
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        setOpenId(null);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [isMobile]);

  // toggle on click (mobile). Keep desktop hover untouched.
  function handleCardClick(pId) {
    if (!isMobile) return;
    setOpenId((prev) => (prev === pId ? null : pId));
    // Also clear hoveredId so hover UI doesn't conflict on some browsers
    setHoveredId(null);
    // scroll the detail into view briefly after state update
    setTimeout(() => {
      const detail = document.querySelector(`.proj-detail[data-id="${pId}"]`);
      if (detail) {
        // adjust offset for fixed navbar if any (tweak -80 if needed)
        const yOffset = -80;
        const rect = detail.getBoundingClientRect();
        const y = window.scrollY + rect.top + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 80);
  }

  return (
    <section id="projects" className="section projects-master" ref={rootRef}>
      <div className="container">
        {/* Section Heading */}
        <div className="proj-head">
          <span className="proj-line" />
          <h2 className="proj-title">Featured Projects</h2>
          <span className="proj-line" />
        </div>

        <p className="hint">Tip: Hover on a project card to see details.</p>

        {/* EACH ROW */}
        <div className="proj-list">
          {projects.map((p, i) => {
            const showDetail = hoveredId === p.id || openId === p.id;
            return (
              <div
                className="proj-row"
                key={p.id}
                onMouseEnter={() => { if (!isMobile) setHoveredId(p.id); }}
                onMouseLeave={() => { if (!isMobile) setHoveredId(null); }}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* LEFT CARD */}
                <div
                  className={`proj-card card ${openId === p.id ? 'active' : ''}`}
                  data-id={p.id}
                  onClick={() => handleCardClick(p.id)}
                  role={isMobile ? "button" : undefined}
                  tabIndex={isMobile ? 0 : undefined}
                >
                  <div className="thumb">
                    <span className="thumb-title">{p.name}</span>
                  </div>
                  <div className="pc-top">
                    <strong className="pc-name">{p.name}</strong>
                    <span className="pc-period">{p.period}</span>
                  </div>
                  <p className="pc-brief">{p.brief}</p>
                  <div className="pc-tags">
                    {p.stack.slice(0, 3).map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT DETAIL */}
                <div
                  className={`proj-detail card ${showDetail ? "show" : ""}`}
                  data-id={p.id}
                >
                  {showDetail ? (
                    <>
                      <pre className="code">
{`const project = {
  name: '${p.name}',
  period: '${p.period}',
  role: '${p.role}',
  stack: ${JSON.stringify(p.stack)},
  highlights: ${JSON.stringify(p.impact, null, 0)}
};`}
                      </pre>

                      <div className="detail-meta">
                        <div className="chips">
                          {p.stack.map((s) => (
                            <span className="chip" key={s}>
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="links">
                          {p.links.live && (
                            <a
                              className="btn ghost"
                              href={p.links.live}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Live ↗
                            </a>
                          )}
                          {p.links.repo && (
                            <a
                              className="btn ghost"
                              href={p.links.repo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Repo ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">Hover this card to see →</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
