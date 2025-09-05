'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Education from '@/components/Education';
import Footer from '../components/Footer';

export default function Page() {
  useEffect(()=>{
    // flag for global smooth scrolling only on this page
    document.body.setAttribute('data-onepage','true');

    // reveal on scroll
    const els = Array.from(document.querySelectorAll('.reveal'));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('show');
          io.unobserve(e.target);
        }
      });
    }, { threshold:.2 });
    els.forEach(el=>io.observe(el));
    return () => {
      io.disconnect();
      document.body.removeAttribute('data-onepage');
    };
  }, []);

  return (
    <>
      <Navbar />
      <AnimatedBackground />

      {/* Home */}
      <section id="home" className="hero">
        <div className="bg" style={{backgroundImage:'url(/images/hero-bg.jpg)'}} />
        <div className="overlay" />
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <div className="bg"/>
        <div className="overlay" />
        <About />
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="bg"/>
        <div className="overlay" />
        <Experience />
      </section>


      {/* Projects */}
      <section id="projects">
        <div className="bg" style={{backgroundImage:'url(/images/project-bg.jpg)'}} />
        <div className="overlay" />
        <Projects />
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="bg" />
        <div className="overlay" />
        <Skills />
      </section>

      {/* Education */}
      <section id="education">
        <div className="bg" style={{backgroundImage:'url(/images/Education-bg.jpg)'}} />
        <div className="overlay" />
        <Education />
      </section>


      {/* Contact */}
      <section id="contact">
        <div className="bg" style={{backgroundImage:'url(/images/contact-bg.jpg)'}} />
        <div className="overlay" />
        <Contact />
      </section>

      {/* Footer */}
      <Footer/>
    </>
  );
}
