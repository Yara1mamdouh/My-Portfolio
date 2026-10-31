import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const FILTER_TABS = [
  { id: 'all', label: 'All Projects (9)' },
  { id: 'dotnet-backend', label: '.NET & Backend' },
  { id: 'frontend-fullstack', label: 'Frontend & Full-Stack' },
  { id: 'desktop-systems', label: 'Desktop & Python/Java' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects if a specific tab is chosen, but keeping default 'all' showing all 9 projects in exact order
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'dotnet-backend') {
      return (
        project.technologies.includes('.NET') ||
        project.technologies.includes('ASP.NET Core') ||
        project.technologies.includes('Node.js') ||
        project.technologies.includes('PHP')
      );
    }
    if (activeFilter === 'frontend-fullstack') {
      return (
        project.technologies.includes('Angular') ||
        project.technologies.includes('React') ||
        project.technologies.includes('HTML') ||
        project.technologies.includes('Bootstrap') ||
        project.id === 'cravers'
      );
    }
    if (activeFilter === 'desktop-systems') {
      return (
        project.technologies.includes('Python') ||
        project.technologies.includes('Java') ||
        project.technologies.includes('Tkinter')
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="section-title">
            Crafted <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive showcase of 9 web applications, backend architectures, and desktop systems built with .NET, Node.js, Angular, Python, and Java.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project filter categories">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Responsive Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal Lightbox for Screenshots and Full Details */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
