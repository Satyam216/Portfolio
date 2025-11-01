'use client';
import { useMemo, useState, useEffect, useRef } from "react";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        id: "Speech-To-Text-Flow",
        name: "Speech-to-Text Conversion",
        period: "Oct 2025 — Present",
        role: "Full Stack Developer",
        brief: "A modern web app that records or accepts audio uploads and converts speech to editable text in near real-time using Deepgram.",
        stack: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Lucide-react (icons)",
          "Node.js",
          "Express",
          "Multrer (file upload)",
          "Supabase Storage & Postgres",
          "Deepgram HTTP API",
          "JWT",
          "Render / Vercel"
        ],
        impact: [
          "Real-time speech capture and visual waveform while recording.",
          "Server-side transcription using Deepgram (high accuracy) and storing transcripts in DB.",
          "Secure authentication with JWT; all uploads validated server-side."
        ],
        links: {
          live: "https://speechtotext-instantconvert.vercel.app/dashboard",
          repo: "https://github.com/Satyam216/speech-to-text-frontend"
        }
      },

      {
        id: "Notes-Taking-App",
        note: "Warning : Live demo hosted on Vercel. Live link will not work if the Supabase database is paused (free-tier limitation).",
        name: "Notes-Taking-App",
        period: "Sep 2025 — Oct 2025",
        role: "Full Stack Developer",
        brief: "A responsive full-stack note-taking web app with passwordless email OTP and Google authentication (Supabase), JWT-protected backend APIs, and PostgreSQL (Supabase) storage for notes and user profiles.",
        stack: ["React","Vite", "Supabase (Auth+Postgres+Storage)", "TypeScript", "Tailwind CSS", "React Router", , "Node.js","Express","JWT","Vercel"],
        impact: [
        "Passwordless email OTP + Google OAuth for frictionless sign-in",
        "Secure notes CRUD with JWT authorization on backend",
        ],
        links: {live: "https://notestaking-app-satyam21.vercel.app/",repo: "https://github.com/Satyam216/notes-taking-app"},
        },

        {
          id: "Store-Rating-Platform",
          note: "Warning: Live demo may not work if backend or database server is paused (free-tier limitation).",
          name: "Store-Rating-Platform",
          period: "Aug 2025 — Oct 2025",
          role: "Full Stack Developer",
          brief: "A role-based full-stack web application where users can rate and review stores. Features secure JWT authentication, role-specific dashboards, and MySQL database integration.",
          stack: ["React", "React Router", "Node.js", "Express", "MySQL", "Sequelize ORM", "JWT", "CSS", "Vercel", "Railway", "Render"],
          impact: [
            "Implemented role-based access control for Admin, Store Owner, and Normal User",
            "Developed secure authentication and password update functionality using JWT",
            "Enabled users to rate, edit, and view store ratings with search and filter options",
          ],
          links: {
            live: "https://store-rating-platform-first.vercel.app/",
            repo: "https://github.com/Satyam216/store-rating-platform",
          },
        },

      {
        id: "Visuals-Product-Matcher",
        name: "Visuals-Product-Matcher",
        period: "Sep 2025 — Oct 2025",
        role: "Full Stack Developer",
        brief: "An AI-powered web app that finds visually similar products using deep learning and cloud image storage.",
        stack: ["React", "Vite", "Tailwind Css","Farmer Motion","TensorFlow", "Fast API", "Numpy", "Scikit-learn", "Bcrypt", "JWT", "MongoDB Atlas", "Cloudinary"],
        impact: [
          "AI-based similarity detection (MobileNetV2 + TensorFlow) ",
          "Cloud image hosting via Cloudinary",
          " Adjustable similarity filter(slider / manual input) ",
        ],
        links: { live: "https://visuals-product-matcher.vercel.app/", repo: "https://github.com/Satyam216/visuals-product-matcher" },
      },
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
        links: { live: "https://todo-collab.vercel.app", repo: "https://github.com/Satyam216/todo-collab" },
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
        links: { live: "", repo: "https://github.com/Satyam216/cityshop" },
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
        links: { live: "", repo: "https://github.com/Satyam216/pg-life" },
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
                  <div className="hint">
                    <span style={{fontSize:'12px', color:'pink'}}>{p.note}</span>
                  </div>
                  <div className="pc-top">
                    <strong className="pc-name">{p.name}</strong>
                    <span className="pc-period">{p.period}</span>
                  </div>
                  <p className="pc-brief">{p.brief}</p>
                  <div className="pc-tags">
                    {p.stack.slice(0, 5).map((t) => (
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
                              style={{marginLeft: '10px'}}
                            >
                              Repo ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">Click on the project card to see detail →</p>
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
