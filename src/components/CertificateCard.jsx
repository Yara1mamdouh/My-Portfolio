import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  CheckCircle, 
  Linkedin, 
  Eye, 
  Maximize2,
  FileText,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export default function CertificateCard({ cert, onPreview }) {
  const [imgError, setImgError] = useState(false);

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${cleanBase}${path}`;
  };

  const hasRealImage = cert.imageUrl && cert.imageUrl.trim() !== '' && !imgError;
  const linkedinLink = cert.linkedinUrl || cert.linkedinPostUrl;
  const hasLinkedin = linkedinLink && linkedinLink.trim() !== '';

  return (
    <article className={`certificate-card ${cert.isCompleted ? 'completed' : 'in-progress'}`}>
      {/* 1. Large Dedicated Certificate Image Preview (Landscape Aspect Ratio ~1.414:1) */}
      <div 
        className={`cert-image-container ${hasRealImage ? 'has-image' : 'is-placeholder'}`}
        onClick={() => hasRealImage && onPreview(cert)}
        role={hasRealImage ? "button" : undefined}
        tabIndex={hasRealImage ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasRealImage && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onPreview(cert);
          }
        }}
        aria-label={hasRealImage ? `View full certificate for ${cert.title}` : undefined}
      >
        {hasRealImage ? (
          <>
            <img
              src={getImageUrl(cert.imageUrl)}
              alt={`${cert.title} Certificate`}
              className="cert-img-preview"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="cert-hover-overlay" aria-hidden="true">
              <div className="cert-hover-pill">
                <Maximize2 size={16} />
                <span>View Full Certificate</span>
              </div>
            </div>
          </>
        ) : (
          /* Professionally Designed Certificate Placeholder (Maintains exact 1.414:1 document ratio) */
          <div className="cert-designed-placeholder" aria-label="Certificate document placeholder">
            <div className="placeholder-watermark-bg" aria-hidden="true">
              <Award size={64} />
            </div>

            <div className="placeholder-cert-frame">
              <div className="placeholder-top-row">
                <span className="placeholder-doc-tag">
                  <ShieldCheck size={12} />
                  <span>Verified Program Track</span>
                </span>
                <span className={`placeholder-status-indicator ${cert.isCompleted ? 'completed' : 'in-progress'}`}>
                  {cert.status}
                </span>
              </div>

              <div className="placeholder-center-content">
                <div className="placeholder-seal-icon">
                  <FileText size={22} />
                </div>
                <h4 className="placeholder-program-title">{cert.title}</h4>
                <p className="placeholder-issuer-name">{cert.issuer}</p>
              </div>

              <div className="placeholder-bottom-notice">
                <span>
                  {cert.isCompleted
                    ? "Add hosted HTTPS image URL in src/data/certificates.js"
                    : "Training in progress • Document pending completion"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. Certificate Body Details */}
      <div className="cert-card-body">
        <div className="cert-header-meta">
          <div className="cert-title-group">
            <h3 className="cert-program-name">{cert.title}</h3>
            <div className="cert-issuer-name">{cert.issuer}</div>
            {cert.program && <div className="cert-round-detail">{cert.program}</div>}
          </div>

          {/* Completion Status Badge */}
          <span className={`cert-status-badge ${cert.isCompleted ? 'status-completed' : 'status-inprogress'}`}>
            {cert.isCompleted ? (
              <>
                <CheckCircle size={12} />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Clock size={12} />
                <span>In Progress</span>
              </>
            )}
          </span>
        </div>

        {/* Description */}
        <p className="cert-desc">{cert.description}</p>

        {/* Skills Gained Tags */}
        {cert.skillsGained && cert.skillsGained.length > 0 && (
          <div className="cert-skills-wrap">
            {cert.skillsGained.map((skill) => (
              <span key={skill} className="cert-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* 3. Action Buttons */}
        <div className="cert-actions">
          {/* Hide "View Full Certificate" button until a real image URL exists! */}
          {hasRealImage && (
            <button
              type="button"
              className="cert-action-btn btn-preview"
              onClick={() => onPreview(cert)}
              aria-label={`View full certificate for ${cert.title}`}
            >
              <Eye size={15} />
              <span>View Full Certificate</span>
            </button>
          )}

          {/* LinkedIn Post Button (only if real URL provided) */}
          {hasLinkedin && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-action-btn btn-linkedin"
              aria-label={`View LinkedIn post for ${cert.title}`}
              title="LinkedIn Announcement"
            >
              <Linkedin size={15} />
              <span>Post</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
