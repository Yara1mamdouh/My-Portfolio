import React, { useEffect, useState } from 'react';
import { 
  X, 
  Github, 
  Linkedin,
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Code,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${cleanBase}${path}`;
  };

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  // Collect available images (screenshots array or single imageUrl)
  const availableImages = [];
  if (project.imageUrl && project.imageUrl.trim() !== '') {
    availableImages.push(project.imageUrl);
  }
  if (project.screenshots && project.screenshots.length > 0) {
    project.screenshots.forEach(img => {
      if (img && !availableImages.includes(img)) {
        availableImages.push(img);
      }
    });
  }

  const isImageOnly = project.category === 'image-only';
  const hasGithub = !isImageOnly && project.githubUrl && project.githubUrl.trim() !== '';
  const hasDemo = project.demoUrl && project.demoUrl.trim() !== '';
  const isLinkedInLink = hasDemo && (project.demoUrl.includes('lnkd.in') || project.demoUrl.includes('linkedin.com'));

  const nextSlide = () => {
    if (availableImages.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % availableImages.length);
    }
  };

  const prevSlide = () => {
    if (availableImages.length > 1) {
      setCurrentSlide((prev) => (prev - 1 + availableImages.length) % availableImages.length);
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-container"
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

        {/* Media Frame (Carousel / Screenshot / Designed Placeholder) */}
        <div className="modal-media-frame">
          {availableImages.length > 0 ? (
            <>
              <img
                src={getImageUrl(availableImages[currentSlide])}
                alt={`${project.title} screenshot ${currentSlide + 1}`}
              />
              {availableImages.length > 1 && (
                <div className="modal-gallery-controls">
                  <button
                    type="button"
                    className="gallery-nav-btn"
                    onClick={prevSlide}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="gallery-counter">
                    {currentSlide + 1} / {availableImages.length}
                  </span>
                  <button
                    type="button"
                    className="gallery-nav-btn"
                    onClick={nextSlide}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="project-designed-placeholder" style={{ minHeight: '260px' }}>
              <div className="placeholder-grid-pattern" aria-hidden="true" />
              <div className="placeholder-icon-circle" style={{ width: '72px', height: '72px' }}>
                <Code size={34} color={project.accentColor} />
              </div>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '6px', position: 'relative', zIndex: 1 }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', position: 'relative', zIndex: 1 }}>
                {isImageOnly
                  ? "Configured as Category B (Image Only). Replace image URLs in src/data/projects.js to display screenshots."
                  : "Screenshots and preview URLs are configurable in src/data/projects.js."}
              </p>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="modal-content-body">
          <div className="modal-header-row">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <span className={`category-pill ${isImageOnly ? 'image-only' : ''}`}>
                {isImageOnly ? 'Category B: Image Only' : 'Category A: GitHub + Image'}
              </span>
              {project.featured && (
                <span className="featured-pill">
                  <Sparkles size={11} />
                  <span>Key Project</span>
                </span>
              )}
            </div>

            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <div className="modal-description-full">
            {project.description}
          </div>

          {/* Technologies */}
          <div className="modal-section-title">Technologies &amp; Architecture</div>
          <div className="modal-tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag-chip" style={{ fontSize: '0.82rem', padding: '5px 12px' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="modal-footer-actions">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={16} />
                <span>View on GitHub</span>
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {isLinkedInLink ? <Linkedin size={16} /> : <ExternalLink size={16} />}
                <span>{isLinkedInLink ? "View Project Post" : "Live Demo"}</span>
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
