import React from 'react';
import { 
  User, 
  GraduationCap, 
  Layers, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  Globe,
  MapPin,
  Mail,
  Languages
} from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData, languagesData } from '../data/experience';

export default function About() {
  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      default: return <CheckCircle2 size={20} />;
    }
  };

  return (
    <section id="about" className="section-wrapper section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Yara Mamdouh</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science &amp; AI student with a foundation in full-stack architecture, backend engineering, and algorithmic problem-solving.
          </p>
        </div>

        {/* About Grid Layout */}
        <div className="about-grid">
          {/* Main Professional Summary & Core Highlights */}
          <div className="about-text-content">
            <div className="about-paragraph">
              {profileData.aboutSummary}
            </div>

            {/* Core Highlights */}
            <div className="about-highlights-grid">
              {profileData.highlights.map((item) => (
                <div key={item.id} className="highlight-card">
                  <div className="highlight-icon-box">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <div className="highlight-info">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Quick Facts & Languages */}
          <div className="about-side-box">
            {/* Quick Facts Card */}
            <div className="quick-facts-card">
              <div className="quick-facts-header">
                <Sparkles size={18} />
                <span style={{ fontWeight: 700 }}>Quick Facts</span>
              </div>

              <ul className="facts-list">
                <li className="fact-item">
                  <span className="fact-label">Academic Status</span>
                  <span className="fact-value">CS &amp; AI Undergraduate</span>
                </li>
                <li className="fact-item">
                  <span className="fact-label">University</span>
                  <span className="fact-value">{educationData.university}</span>
                </li>
                <li className="fact-item">
                  <span className="fact-label">Academic Standing</span>
                  <span className="fact-value">GPA {educationData.gpa}</span>
                </li>
                <li className="fact-item">
                  <span className="fact-label">Professional Role</span>
                  <span className="fact-value">{profileData.title}</span>
                </li>
                <li className="fact-item">
                  <span className="fact-label">Specialization</span>
                  <span className="fact-value">{profileData.subtitle}</span>
                </li>
                <li className="fact-item">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">{profileData.location}</span>
                </li>
              </ul>
            </div>

            {/* Languages Section */}
            <div className="languages-box">
              <h4>
                <Languages size={18} />
                <span>Languages</span>
              </h4>
              <div className="languages-list">
                {languagesData.map((lang) => (
                  <div key={lang.language} className="language-pill">
                    <span className="lang-name">{lang.language}</span>
                    {lang.proficiency ? (
                      <span className="lang-badge">{lang.proficiency}</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
