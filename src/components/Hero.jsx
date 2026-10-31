import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Terminal, 
  Sparkles,
  Layers,
  Database,
  Download
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCvPath = () => {
    if (!profileData.cvUrl) return '';
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = profileData.cvUrl.startsWith('/') ? profileData.cvUrl : `/${profileData.cvUrl}`;
    return `${cleanBase}${path}`;
  };

  const getPortraitUrl = () => {
    if (!profileData.portraitUrl) return '';
    if (profileData.portraitUrl.startsWith('http')) return profileData.portraitUrl;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = profileData.portraitUrl.startsWith('/') ? profileData.portraitUrl : `/${profileData.portraitUrl}`;
    return `${cleanBase}${path}`;
  };

  const hasRealImage = profileData.portraitUrl && profileData.portraitUrl.trim() !== '' && !imageError;

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Greeting, Name, Title, Intro, CTAs, Socials */}
          <div className="hero-content">
            <div className="hero-greeting-pill">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Available for Full Stack &amp; Backend Opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{profileData.fullName}</span>
            </h1>

            <div className="hero-role-wrapper">
              <span className="hero-role">{profileData.title}</span>
              <span className="hero-role-divider">|</span>
              <span className="hero-subrole">{profileData.subtitle}</span>
              <span className="hero-role-divider">|</span>
              <span className="hero-location">
                <MapPin size={15} />
                <span>{profileData.location}</span>
              </span>
            </div>

            <p className="hero-bio">
              {profileData.shortIntro}
            </p>

            {/* Primary Action Buttons (View Projects, Contact Me, Download CV) */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('contact')}
              >
                <span>Contact Me</span>
                <Mail size={18} />
              </button>

              {profileData.cvUrl && (
                <a
                  href={getCvPath()}
                  download="Yara-Khfagi-CV.pdf"
                  className="btn btn-outline download-cv-btn"
                  aria-label="Download Yara Khfagi CV"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              )}
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span className="hero-socials-label">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={19} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Dedicated 1:1 Portrait Frame */}
          <div className="hero-portrait-col">
            <div className="portrait-frame-container">
              {/* Subtle Ambient Glow Ring */}
              <div className="portrait-glow-ring" aria-hidden="true"></div>

              {/* Floating Decorative Badges */}
              <div className="floating-badge badge-top-left" aria-hidden="true">
                <Terminal size={16} />
                <span>.NET &amp; Node.js</span>
              </div>

              <div className="floating-badge badge-bottom-right" aria-hidden="true">
                <Database size={16} />
                <span>SQL &amp; REST APIs</span>
              </div>

              {/* Main Portrait Card Frame */}
              <div className="portrait-card">
                <div className="portrait-inner">
                  {hasRealImage ? (
                    <img
                      src={getPortraitUrl()}
                      alt={profileData.fullName}
                      className="real-portrait-img"
                      onError={() => setImageError(true)}
                      loading="lazy"
                    />
                  ) : (
                    /* Designed Portrait Placeholder (No fake human, no stock photo) */
                    <div className="designed-placeholder" aria-label="Portrait placeholder">
                      <div className="placeholder-badge">
                        <Sparkles size={12} />
                        <span>Engineer Profile</span>
                      </div>
                      
                      <div className="placeholder-avatar-art">
                        <span className="placeholder-monogram">YK</span>
                      </div>

                      <h3 className="placeholder-name">{profileData.fullName}</h3>
                      <p className="placeholder-tagline">{profileData.title} &bull; CS &amp; AI</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
