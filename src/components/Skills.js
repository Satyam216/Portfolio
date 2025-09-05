'use client';
import React from 'react';

const DOMAINS = [
  {
    key: 'frontend',
    title: 'Frontend',
    icons: [
      { alt: 'React', src: '/icons/React.svg' },
      { alt: 'Next.js', src: '/icons/Next.js.svg' },
      { alt: 'TypeScript', src: '/icons/typescript.svg' },
      { alt: 'CSS', src: '/icons/css3.svg' },
      { alt: 'Tailwind', src: '/icons/Tailwind-CSS.svg' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    icons: [
      { alt: 'Node.js', src: '/icons/Node.js.svg' },
      { alt: 'Express', src: '/icons/express.svg' },
      { alt: 'WebSocket', src: '/icons/Websocket.svg' },
      { alt: 'JWT', src: '/icons/jwt.svg' },
    ],
  },
  {
    key: 'databases',
    title: 'Databases',
    icons: [
      { alt: 'PostgreSQL', src: '/icons/PostgresSQL.svg' },
      { alt: 'MongoDB', src: '/icons/mongodb.svg' },
      { alt: 'MySQL', src: '/icons/mysql.svg' },
      { alt: 'Supabase', src: '/icons/Supabase.svg' },
      { alt: 'Firebase', src: '/icons/firebase.svg' },
    ],
  },
  {
    key: 'platforms',
    title: 'Platforms & Tools',
    icons: [
      { alt: 'AWS', src: '/icons/aws.svg' },
      { alt: 'Vercel', src: '/icons/vercel.svg' },
      { alt: 'GitHub', src: '/icons/github.svg' },
      { alt: 'Postman', src: '/icons/postman.svg' },
      { alt: 'Android Studio', src: '/icons/Android-Studio.svg' },
    ],
  },
  {
    key: 'mobile',
    title: 'Mobile & UI',
    icons: [
      { alt: 'React Native', src: '/icons/React-Native.svg' },
      { alt: 'Figma', src: '/icons/figma.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skill-head">
          <span className="proj-line" />
          <h2 className="proj-title">My Experties</h2>
          <span className="proj-line" />
        </div>

            <div className="skills-marquee">
              <div className="skills-track">
                {/* Track A */}
                {DOMAINS.map((d, i) => (
                  <div key={`A-${d.key}`} className="flip-card reveal show" style={{ transitionDelay: `${i * 50}ms` }}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front card">
                        <div className="flip-front-body">
                          <h3 className="flip-title">{d.title}</h3>
                          <p className="flip-sub">Hover to view tech</p>
                        </div>
                      </div>
                      <div className="flip-card-back card">
                        <div className="logo-wrap">
                          {d.icons.map(icon => (
                            <div className="logo" key={icon.alt} title={icon.alt} aria-label={icon.alt}>
                              <img src={icon.src} alt={icon.alt} loading="lazy" />
                              <span>{icon.alt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Track B (duplicate for seamless loop) */}
                {DOMAINS.map((d) => (
                  <div key={`B-${d.key}`} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front card">
                        <div className="flip-front-body">
                          <h3 className="flip-title">{d.title}</h3>
                          <p className="flip-sub">Hover to view tech</p>
                        </div>
                      </div>
                      <div className="flip-card-back card">
                        <div className="logo-wrap">
                          {d.icons.map(icon => (
                            <div className="logo" key={icon.alt + '-b'} title={icon.alt} aria-label={icon.alt}>
                              <img src={icon.src} alt={icon.alt} loading="lazy" />
                              <span>{icon.alt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


      </div>
    </section>
  );
}
