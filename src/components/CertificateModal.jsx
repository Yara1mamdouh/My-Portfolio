import React, { useEffect } from 'react';
import { X, Award, CheckCircle, Clock, Linkedin, FileText, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  // Keyboard Escape key handler & scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!cert) return null;

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${cleanBase}${path}`;
  };

  const hasRealImage = cert.imageUrl && cert.imageUrl.trim() !== '';
  const linkedinLink = cert.linkedinUrl || cert.linkedinPostUrl;
  const hasLinkedin = linkedinLink && linkedinLink.trim() !== '';

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="modal-container cert-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Large Certificate Media Frame (Complete certificate without cropping) */}
        <div className="cert-modal-media-frame">
          {hasRealImage ? (
            <img
              src={getImageUrl(cert.imageUrl)}
              alt={`${cert.title} Complete Certificate`}
              className="cert-modal-full-img"
            />
          ) : (
            <div className="cert-placeholder-preview">
              <div className="cert-placeholder-icon">
                <Award size={40} />
              </div>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '8px' }}>
                {cert.title}
              </h3>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.95rem', marginBottom: '6px' }}>
                {cert.issuer} {cert.program ? `• ${cert.program}` : ''}
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', maxWidth: '400px' }}>
                Actual certificate image URL can be added in <code>src/data/certificates.js</code> using Cloudinary or any public HTTPS link.
              </p>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="modal-content-body">
          <div className="modal-header-row">
            <span
              className={`cert-status-badge ${cert.isCompleted ? 'status-completed' : 'status-inprogress'}`}
              style={{ display: 'inline-flex', marginBottom: '12px' }}
            >
              {cert.isCompleted ? <CheckCircle size={12} /> : <Clock size={12} />}
              <span>{cert.status}</span>
            </span>

            <h2 id="cert-modal-title" className="modal-title">
              {cert.title}
            </h2>
            <p className="modal-subtitle">
              {cert.issuer} {cert.program ? `• ${cert.program}` : ''}
            </p>
          </div>

          <p className="modal-description-full">
            {cert.description}
          </p>

          {/* Skills Covered */}
          {cert.skillsGained && cert.skillsGained.length > 0 && (
            <>
              <div className="modal-section-title">Key Competencies &amp; Technologies</div>
              <div className="modal-tech-list">
                {cert.skillsGained.map((skill) => (
                  <span key={skill} className="tech-tag-chip" style={{ fontSize: '0.82rem', padding: '5px 12px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Footer Actions */}
          <div className="modal-footer-actions">
            {hasLinkedin && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Linkedin size={16} />
                <span>View LinkedIn Announcement</span>
              </a>
            )}

            <button
              type="button"
              className="btn btn-outline"
              onClick={onClose}
              style={{ marginLeft: 'auto' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
