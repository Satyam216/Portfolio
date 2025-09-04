import Image from "next/image";
export default function About() {
  const aboutText = `
  I am a passionate Full Stack Developer and current MCA student at VIT Bhopal, with a strong foundation in building real-time, 
  scalable, and user-centric applications. With hands-on experience as a Backend Developer Intern at Edumitram Pvt. Ltd., 
  I successfully optimized API performance by 30% and worked on scalable database solutions. I have also developed multiple projects, 
  including ToDo-Collab, a real-time collaborative task manager, and CityShop, a mobile marketplace app, showcasing my skills in React,
  Next.js, React Native, MongoDB, PostgreSQL, and Firebase.
  Alongside my technical skills, I bring proven strengths in problem-solving, collaboration, and critical thinking. My achievements 
  include a Gold Medal in B.Sc (Computer Science) and recognition among the Top 5% MCA students at VIT Bhopal, reflecting my 
  consistency and dedication. I aim to leverage my skills to build impactful digital solutions and continuously grow as a developer
  while contributing to innovative projects.
  `.trim();

  return (
    <div className="container about-plain reveal">  
      
      <div className="about-photo">
        <Image src="/images/Profile.jpg" alt="Satyam Jain" />
      </div>

      <div className="about-content">
        <div className="about-label" aria-hidden="true">
          <span>ABOUT ME</span>
        </div>

        <h2 className="about-heading-plain">Who I Am</h2>

        <p className="about-copy">{aboutText}</p>
      </div>
    </div>
  );
}
