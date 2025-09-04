'use client';
export default function Contact() {
  const submit = (e)=>{
    e.preventDefault();
    alert('Thanks! Message sent.');
    e.currentTarget.reset();
  };
  return (
    <div className="container contact reveal">
      <form className="card" onSubmit={submit}>
        <h2>Get In Touch</h2>
        <input className="input" placeholder="Name" required />
        <input className="input" type="email" placeholder="Email" required />
        <textarea className="input" placeholder="Message" />
        <button className="btn" type="submit">Send Message</button>
      </form>
      <div className="card">
        <h3>Connect</h3>
        <p style={{color:'var(--muted)'}}>Open to collaboration, opportunities, and interesting problems.</p>
        <ul style={{marginTop:10, display:'grid', gap:8, listStyle:'none'}}>
          <li><a href="https://github.com" target="_blank">GitHub →</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn →</a></li>
          <li><a href="https://twitter.com" target="_blank">Twitter →</a></li>
        </ul>
      </div>
    </div>
  );
}
