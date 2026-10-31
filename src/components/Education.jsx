import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle, BookOpen } from 'lucide-react';
import { educationData } from '../data/experience';

export default function Education() {
  return (
    <section id="education" className="section-wrapper section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Academics</span>
          </h2>
          <p className="section-subtitle">
            Rigorous undergraduate studies in Computer Science and Artificial Intelligence at Benha University.
          </p>
        </div>

        {/* Education Content Card */}
        <div className="education-wrapper">
          <div className="education-card">
            <div className="education-header-grid">
              <div className="education-main">
                <h3>{educationData.degree}</h3>
                <div className="education-uni">
                  <GraduationCap size={18} />
                  <span>{educationData.university}</span>
                </div>
                <div className="education-meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} color="var(--accent-primary)" />
                    {educationData.duration}
                  </span>
                  <span>&bull;</span>
                  <span>Expected Graduation: {educationData.expectedGraduation}</span>
                </div>
              </div>

              {/* GPA Highlight Badge */}
              <div className="gpa-card">
                <span className="gpa-number">{educationData.gpa}</span>
                <span className="gpa-label">Cumulative GPA</span>
              </div>
            </div>

            {/* Core Study Areas */}
            <div className="education-focus-box">
              <div className="focus-title">Core Academic Curricula &amp; Foundations</div>
              <ul className="focus-list">
                {educationData.focusAreas.map((area, idx) => (
                  <li key={idx} className="focus-item">
                    <CheckCircle size={15} />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
