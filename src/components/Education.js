'use client';

export default function Education() {
  const items = [
    {
      title: 'MCA (Master of Computer Applications) • CGPA: 9.2',
      org: 'Vellore Institute of Technology (VIT), Bhopal (M.P.)',
      dates: 'July 2024 — Present',
    },
    {
      title: 'B.Ed (Bachelor of Education) • 73.5%',
      org: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly (U.P.)',
      dates: 'July 2022 — May 2024',
    },
    {
      title: 'B.Sc (Computer Science) • 73%',
      org: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly (U.P.)',
      dates: 'July 2018 — May 2021',
    },
    {
      title: 'Intermediate • 82.3%',
      org: 'RJP Inter College, Bijnor (U.P.)',
      dates: 'July 2017 — April 2018',
    },
    {
      title: 'High School • 88.16%',
      org: 'RJP Inter College, Bijnor (U.P.)',
      dates: 'July 2015 — May 2016',
    },
  ];

  return (
    <section id="education" className="section edu-section">
      <div className="container">
        
        <div className="exp-headline">
          <span className="exp-hr" />
          <h2 className="exp-title">Education</h2>
          <span className="exp-hr" />
        </div>
      

        {/* Timeline cards */}
        <div className="edu-wrap">
          <div className="edu-left">
            {items.map((e, i) => (
              <article key={e.title} className="edu-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="edu-row">
                  <div className="edu-dot" aria-hidden="true" />
                  <div className="edu-meta">
                    <div className="edu-top">
                      <span className="edu-dates">{e.dates}</span>
                    </div>
                    <h3 className="edu-title">{e.title}</h3>
                    <p className="edu-org">{e.org}</p>
                    <p className="edu-note">{e.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
