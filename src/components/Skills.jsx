import React from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Wrench, 
  Binary, 
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/skills';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} />;
      case 'Server': return <Server size={22} />;
      case 'Layout': return <Layout size={22} />;
      case 'Database': return <Database size={22} />;
      case 'Wrench': return <Wrench size={22} />;
      case 'Binary': return <Binary size={22} />;
      default: return <Cpu size={22} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, backend frameworks, database systems, and core computer science foundations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.category} className="skill-category-card">
              <div className="category-card-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3>{category.category}</h3>
              </div>

              <p className="category-desc">{category.description}</p>

              <div className="skills-items-wrap">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-dot" aria-hidden="true"></span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
