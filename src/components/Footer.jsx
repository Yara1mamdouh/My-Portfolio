import React from 'react';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Row */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <h4>{profileData.fullName}</h4>
            <p>{profileData.title} | {profileData.subtitle}</p>
          </div>

          <div className="footer-socials">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <div>
            &copy; {currentYear} {profileData.fullName}. All rights reserved.
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
