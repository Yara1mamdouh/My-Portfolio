import React, { useState } from 'react';
import { Award, BookCheck } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section-wrapper section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials &amp; Specialized Tracks</span>
          </div>
          <h2 className="section-title">
            Certifications &amp; <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Formal technical programs and rigorous government/industrial initiatives in enterprise .NET, MEAN Stack, and Node.js development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onPreview={(c) => setSelectedCert(c)}
            />
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </div>
    </section>
  );
}
