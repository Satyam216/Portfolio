'use client';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Twitter, Code2 } from 'lucide-react'; // Code2 used for LeetCode

export default function Footer() {
  const socials = [
    { href: 'https://www.linkedin.com/in/satyam-jain-874b66143', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://github.com/Satyam216', label: 'GitHub', Icon: Github },
    { href: 'https://www.instagram.com/saty_satyam21/', label: 'Instagram', Icon: Instagram },
    { href: 'https://x.com/jainSatyam_216', label: 'Twitter (X)', Icon: Twitter },
    { href: 'https://leetcode.com/u/satyam_2106/', label: 'LeetCode', Icon: Code2 },
  ];

  return (
    <footer className="site-footer">
      <div className="container foot-wrap">
        <div className="foot-brand">
          <span className="foot-title">Let’s connect</span>
          <p className="foot-sub">Open to collaboration and opportunities.</p>
        </div>

        <nav className="foot-social">
          {socials.map(({ href, label, Icon }) => (
            <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="s-link">
              <span className="s-ico">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="s-text">{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="foot-copy">
        <p>© 2025 Satyam Jain • All rights reserved</p>
      </div>
    </footer>
  );
}
