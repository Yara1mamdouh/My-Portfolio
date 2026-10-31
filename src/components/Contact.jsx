import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Download
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getCvPath = () => {
    if (!profileData.cvUrl) return '';
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const path = profileData.cvUrl.startsWith('/') ? profileData.cvUrl : `/${profileData.cvUrl}`;
    return `${cleanBase}${path}`;
  };

  const handleComposeEmail = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.senderName || 'Portfolio Visitor'}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.senderName}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
    );
    // Real mailto trigger without fake API simulation
    window.location.href = `mailto:${profileData.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to Software Engineering, Full Stack, and Backend opportunities. Feel free to reach out directly via email or professional networks.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-info-cards">
            {/* Email Card (real mailto:) */}
            <a
              href={`mailto:${profileData.email}`}
              className="contact-card-item"
              aria-label={`Send email to ${profileData.email}`}
            >
              <div className="contact-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Direct Email</span>
                <span className="contact-value">{profileData.email}</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
              aria-label="Visit LinkedIn Profile"
            >
              <div className="contact-icon-wrapper">
                <Linkedin size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn Profile</span>
                <span className="contact-value">linkedin.com/in/yara-khfagi</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
              aria-label="Visit GitHub Profile"
            >
              <div className="contact-icon-wrapper">
                <Github size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">GitHub Repository</span>
                <span className="contact-value">github.com/Yara1mamdouh</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-card-item" style={{ cursor: 'default' }}>
              <div className="contact-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">{profileData.location}</span>
              </div>
            </div>

            {/* Download CV Action Button (using centralized profile.cvUrl) */}
            {profileData.cvUrl && (
              <a
                href={getCvPath()}
                download="Yara-Khfagi-CV.pdf"
                className="btn btn-outline download-cv-contact-btn"
                aria-label="Download Yara Khfagi CV"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 24px',
                  marginTop: '4px',
                  width: '100%',
                  fontWeight: '600'
                }}
              >
                <Download size={18} />
                <span>Download CV (PDF)</span>
              </a>
            )}
          </div>

          {/* Quick Message Composer (Prepares mailto directly without fake backend) */}
          <div className="contact-form-container">
            <h3>Quick Message Composer</h3>
            <p>
              Draft your note below. Clicking Send will open your default email application pre-filled to reach me directly.
            </p>

            <form onSubmit={handleComposeEmail}>
              <div className="form-group">
                <label htmlFor="senderName" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  className="form-input"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.senderName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderEmail" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  className="form-input"
                  placeholder="e.g. sarah@company.com"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Internship / Full Stack Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hello Yara, I came across your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} />
                <span>Open in Email Client</span>
              </button>

              <div className="form-notice-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, marginBottom: '2px' }}>
                  <AlertCircle size={14} />
                  <span>Transparent Delivery Notice</span>
                </div>
                <span>
                  This form directly launches your email app using standard <code>mailto:</code> protocols. If you prefer continuous backend message ingestion, connect a serverless service like Formspree or EmailJS.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
