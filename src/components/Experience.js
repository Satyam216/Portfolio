export default function Experience() {
  const items = [
    {
      title: 'Backend Developer Intern (On Site)' ,
      org: 'EDUMITRAM PRIVATE LTD.',
      dates: 'Nov 2023 — Mar 2024',
      note: 'Engineered and maintained RESTful APIs for the ‘Society’ platform, reducing response time and ensuring scalability for thousands of users, enabling scalable community services.Architected and improved relational database schemas, maintaining efficient storage and fast retrieval.Integrated backend services with frontend modules, streamlining communication across the platform.',
    },
    {
      title: 'Full Stack Developer — Summer Internship (Remote)',
      org: 'INTERNSHALA',
      dates: 'Jun 2023 — Aug 2023',
      note: 'Developed “PG Life” web platform for PG accommodation booking.Automated backend logic in PHP and designed responsive UI using HTML, CSS, and JavaScript.Enhanced usability with dynamic PG listings, advanced filters, and mobile-friendly layouts.',
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
