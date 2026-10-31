import React from 'react';
import { Terminal, Calendar, MapPin, CheckCircle2, Trophy, Users } from 'lucide-react';
import { activitiesData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Competitive &amp; Practical Training</span>
          </div>
          <h2 className="section-title">
            Activities &amp; <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on problem-solving bootcamps, algorithmic training, and competitive programming initiatives.
          </p>
        </div>

        {/* Activities List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {activitiesData.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-top-row">
                <div className="activity-title-group">
                  <h3>{activity.title}</h3>
                  <div className="activity-org">
                    <span>{activity.organization}</span>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>&bull; {activity.role}</span>
                  </div>
                </div>

                <div className="activity-date-badge">
                  <Calendar size={13} />
                  <span>{activity.date}</span>
                </div>
              </div>

              <p className="activity-description">
                {activity.description}
              </p>

              {/* Key Highlights */}
              <ul className="activity-highlights-list">
                {activity.highlights.map((item, index) => (
                  <li key={index} className="activity-highlight-item">
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="activity-tags">
                {activity.skills.map((skill) => (
                  <span key={skill} className="tech-tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
