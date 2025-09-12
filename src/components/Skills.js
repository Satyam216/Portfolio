'use client';
import React from 'react';

const DOMAINS = [
  {
    key: 'programming',
    title: 'Programming Languages',
    icons: [
      { alt: 'Java', src: '/icons/Java.svg' },
      { alt: 'Javascript', src: '/icons/JavaScript.svg' },
      { alt: 'CPP', src: '/icons/C++-(CPlusPlus).svg' },
      { alt: 'C', src: '/icons/C.svg' },
      { alt: 'Python', src: '/icons/Python.svg' },
    ],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    icons: [
      { alt: 'HTML', src: '/icons/HTML5.svg' },
      { alt: 'React', src: '/icons/React.svg' },
      { alt: 'Next.js', src: '/icons/Next.js.svg' },
      { alt: 'TypeScript', src: '/icons/TypeScript.svg' },
      { alt: 'CSS', src: '/icons/CSS3.svg' },
      { alt: 'Tailwind', src: '/icons/Tailwind-CSS.svg' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    icons: [
      { alt: 'PHP', src: '/icons/PHP.svg' },
      { alt: 'Node.js', src: '/icons/Node.js.svg' },
      { alt: 'Express', src: '/icons/Express.svg' },
      { alt: 'WebSocket', src: '/icons/websocket-svgrepo-com.svg' },
      { alt: 'JWT', src: '/icons/jwt.svg' },
    ],
  },
  {
    key: 'databases',
    title: 'Databases',
    icons: [
      { alt: 'PostgreSQL', src: '/icons/PostgresSQL.svg' },
      { alt: 'MongoDB', src: '/icons/MongoDB.svg' },
      { alt: 'MySQL', src: '/icons/MySQL.svg' },
      { alt: 'Supabase', src: '/icons/Supabase.svg' },
      { alt: 'Firebase', src: '/icons/Firebase.svg' },
    ],
  },
  {
    key: 'platforms',
    title: 'Platforms & Tools',
    icons: [
      { alt: 'AWS', src: '/icons/AWS.svg' },
      { alt: 'Vercel', src: '/icons/Vercel.svg' },
      { alt: 'GitHub', src: '/icons/GitHub.svg' },
      { alt: 'Postman', src: '/icons/Postman.svg' },
      { alt: 'Android Studio', src: '/icons/Android-Studio.svg' },
      { alt: 'Canva', src: '/icons/Canva.svg' },
    ],
  },
  {
    key: 'mobile',
    title: 'Mobile & UI',
    icons: [
      { alt: 'React Native', src: '/icons/React-Native.svg' },
    ],
  },
  {
    key: 'operating system',
    title: 'Operating Systems',
    icons: [
      { alt: 'Windows', src: '/icons/Windows-11.svg' },
      { alt: 'Linux', src: '/icons/Linux.svg' },
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
