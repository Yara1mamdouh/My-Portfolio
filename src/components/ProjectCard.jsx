import React, { useState } from 'react';
import { 
  Github, 
  Linkedin,
  ExternalLink, 
  Eye, 
  Code, 
  Activity, 
  Utensils, 
  Stethoscope, 
  Layers, 
  BookOpen, 
  ShoppingBag, 
  Bookmark, 
  Globe,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  const [imgError, setImgError] = useState(false);

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${cleanBase}${path}`;
  };

  const getProjectIcon = (iconType) => {
    switch (iconType) {
      case 'Code': return <Code size={28} color={project.accentColor} />;
      case 'Activity': return <Activity size={28} color={project.accentColor} />;
      case 'Utensils': return <Utensils size={28} color={project.accentColor} />;
      case 'Stethoscope': return <Stethoscope size={28} color={project.accentColor} />;
      case 'Layers': return <Layers size={28} color={project.accentColor} />;
      case 'BookOpen': return <BookOpen size={28} color={project.accentColor} />;
      case 'ShoppingBag': return <ShoppingBag size={28} color={project.accentColor} />;
      case 'Bookmark': return <Bookmark size={28} color={project.accentColor} />;
      case 'Globe': return <Globe size={28} color={project.accentColor} />;
      default: return <Code size={28} color={project.accentColor} />;
    }
  };

  const hasRealImage = project.imageUrl && project.imageUrl.trim() !== '' && !imgError;
  const isImageOnly = project.category === 'image-only';
  const hasGithub = !isImageOnly && project.githubUrl && project.githubUrl.trim() !== '';
  const hasDemo = project.demoUrl && project.demoUrl.trim() !== '';
  const isLinkedInLink = hasDemo && (project.demoUrl.includes('lnkd.in') || project.demoUrl.includes('linkedin.com'));

  return (
    <article className={`project-card ${project.featured ? 'is-priority' : ''}`}>
      {/* Visual Frame / Image or Designed Placeholder */}
      <div className="project-visual-frame">
        {/* Badges on card top */}
        <div className="card-badges-row">
          {project.featured ? (
            <span className="featured-pill">
              <Sparkles size={11} />
              <span>Key Project</span>
            </span>
          ) : <span />}

          <span className={`category-pill ${isImageOnly ? 'image-only' : ''}`}>
            {isImageOnly ? (
              <>
                <ImageIcon size={11} />
                <span>Image Only</span>
              </>
            ) : (
              <>
                <Github size={11} />
                <span>GitHub + Image</span>
              </>
            )}
          </span>
        </div>

        {hasRealImage ? (
          <img
            src={getImageUrl(project.imageUrl)}
            alt={`${project.title} screenshot`}
            className="project-real-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          /* Designed Project Placeholder (No stock images, clean technical art) */
          <div className="project-designed-placeholder" aria-label={`${project.title} placeholder visual`}>
            <div className="placeholder-grid-pattern" aria-hidden="true" />
            <div className="placeholder-icon-circle">
              {getProjectIcon(project.iconType)}
            </div>
            <span className="placeholder-mockup-label">{project.title}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="project-card-body">
        <div className="project-header-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <p className="project-desc">{project.description}</p>

        {/* Technology Tags */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <button
            type="button"
            className="project-action-btn btn-details"
            onClick={() => onOpenDetails(project)}
            aria-label={`View details and media for ${project.title}`}
          >
            <Eye size={15} />
            <span>{project.screenshots && project.screenshots.length > 0 ? "View Screenshots" : "View Details"}</span>
          </button>

          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn btn-github"
              aria-label={`View GitHub repository for ${project.title}`}
              title="GitHub Repository"
            >
              <Github size={15} />
              <span>Code</span>
            </a>
          )}

          {hasDemo && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn btn-demo"
              aria-label={isLinkedInLink ? `View LinkedIn post for ${project.title}` : `View live demo for ${project.title}`}
              title={isLinkedInLink ? "LinkedIn Post" : "Live Demo"}
            >
              {isLinkedInLink ? <Linkedin size={15} /> : <ExternalLink size={15} />}
              <span>{isLinkedInLink ? "Post" : "Demo"}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
