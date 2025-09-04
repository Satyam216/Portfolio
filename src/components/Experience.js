export default function Experience() {
  const items = [
    {
      title: 'Backend Developer Intern',
      org: 'EDUMITRAM PRIVATE LTD.',
      dates: 'Nov 2023 — Mar 2024',
      note: 'Reduced API latency by 30% via REST optimization and schema tuning.',
    },
    {
      title: 'Full Stack Developer (Web) — Summer Internship',
      org: 'INTERNSHALA',
      dates: 'Jun 2023 — Aug 2023',
      note: 'Built PG Life platform; PHP backend + responsive UI (HTML/CSS/JS).',
    },
  ];

  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <div className="exp-headline">
          <span className="exp-hr" />
          <h2 className="exp-title">Experiences</h2>
          <span className="exp-hr" />
        </div>
      </div>

      <div className="container exp-layout">
        {/* LEFT: cards */}
        <div className="exp-left">
          {items.map((e, i) => (
            <article key={i} className="exp-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="exp-card-row">
                <div className="exp-icon" aria-hidden="true">👤</div>
                <div className="exp-meta">
                  <div className="exp-top"><span className="exp-dates">{e.dates}</span></div>
                  <h3 className="exp-role">{e.title}</h3>
                  <p className="exp-org">{e.org}</p>
                  <p className="exp-note">{e.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT: tiny animated video (autoplay, muted, loop, inline) */}
        <div className="exp-right">
          <video
            className="exp-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Animated illustration"
          >
            <source src="/images/Experience.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
