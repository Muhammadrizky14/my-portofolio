
import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const projects = [
  {
    id: 1,
    title: 'Health Tourism',
  description: 'IT professional specializing in digital wellness platforms, UI/UX design, and database management. Experienced in partner collaboration and platform optimization for VITALIFE’s wellness ecosystem.',
    tools: ['Laravel', 'Tailwind CSS', 'AI Chatbot', 'Payment Gateway', 'MySQL'],
    keyFeatures: [
      'Find medical services and travel info easily',
      'AI-powered chatbot for recommendations',
      'Responsive Tailwind CSS design',
      'Integrated payment gateway',
      'Personalized user experience'
    ],
    imageUrl: '/images/portfolio5.jpeg',
    category: 'WEB',
    demoLink: '#',
    codeLink: 'https://github.com/Byassslaaaa/Vitalife',
    featured: true
  },
  {
    id: 2,
    title: 'UI/UX Ecommerce UMKM',
    description: 'UI/UX Designer specializing in e-commerce platforms for SMEs, creating user-friendly, modern interfaces in Figma to help local businesses sell online effectively.',
    tools: ['Figma', 'Canva'],
    keyFeatures: [
      'Modern ecommerce homepage and product pages',
      'Easy product search and filtering',
      'User-friendly checkout flow',
      'Responsive mobile and desktop layouts',
      'Admin dashboard for UMKM management'
    ],
    imageUrl: '/images/portfolio6.png',
    category: 'DESIGN',
    demoLink: '#',
    codeLink: 'https://www.figma.com/design/uHzjkUghXPQD4dGa3qGqtC/kelompok-6?m=auto&t=uJ3Jekgrrx6EydnL-6',
    featured: true
  },
  {
    id: 3,
    title: 'Student Profile Page',
    description: 'A responsive student profile page design with clean layout and modern UI, built using React and CSS.',
    tools: ['Html', 'CSS'],
    keyFeatures: [
      'Modern responsive layout',
      'Profile info and photo',
      'Clean UI/UX',
      'Easy to customize'
    ],
    imageUrl: '/images/portfolio3.png',
    category: 'WEB',
    demoLink: '#',
    codeLink: 'https://github.com/Muhammadrizky14/profil-latihan',
    featured: false
  },
  {
    id: 4,
    title: 'Save the Patient Game',
    description: 'An educational game about saving patients from viruses, built with Greenfoot. Features fun gameplay and OOP logic.',
    tools: ['Java', 'Greenfoot'],
    keyFeatures: [
      'Fun and educational gameplay',
      'OOP logic with Greenfoot',
      'Multiple levels',
      'Simple controls',
      'Engaging graphics'
    ],
    imageUrl: '/images/portfolio2.png',
    category: 'GAME',
    demoLink: '#',
    codeLink: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Simple Task List',
    description: 'A simple and responsive to-do list app for managing daily tasks, built with React.',
    tools: ['Html', 'JavaScript', 'CSS'],
    keyFeatures: [
      'Add, edit, delete tasks',
      'Responsive design',
      'Easy to use',
      'Clean interface'
    ],
    imageUrl: '/images/portfolio1.png',
    category: 'WEB',
    demoLink: '#',
    codeLink: 'https://github.com/Muhammadrizky14/todolist',
    featured: false
  },
  {
    id: 6,
    title: 'Dashboard Finance',
    description: 'A modern finance dashboard UI for tracking income, expenses, and profit, designed with React and CSS.',
    tools: ['React', 'CSS', 'Chart.js'],
    keyFeatures: [
      'Track income and expenses',
      'Profit margin visualization',
      'Modern dashboard UI',
      'Charts and analytics'
    ],
    imageUrl: '/images/portfolio4.png',
    category: 'DESIGN',
    demoLink: '#',
    codeLink: 'https://github.com/Muhammadrizky14',
    featured: false
  },
  {
    id: 7,
    title: 'Flowchart Wellness Tourism',
    description: 'Proficient in creating comprehensive flowcharts to visualize user journeys and system processes, from registration to booking and payment, supporting system documentation and improving process clarity.',
    tools: ['Flowchart', 'Diagram', 'System Design'],
    keyFeatures: [
      'Visualizes user and admin flows',
      'Covers registration, booking, payment, and event management',
      'Useful for documentation and team onboarding',
      'Clear branching for different user roles',
      'Easy to update and share'
    ],
    imageUrl: '/images/portfolio7.png',
    category: 'DOCUMENTATION',
    demoLink: '',
    codeLink: 'https://drive.google.com/file/d/1nQaMvzCKZsJkHIAjJHYilYu_w2WizUE9/view?usp=sharing',
    featured: false
  },
  {
    id: 8,
    title: 'Medical Record System',
    description: 'A web-based medical record management system built with Laravel, PHP, and MySQL. Enables clinics to manage patient data, doctor schedules, reservations, and medical records efficiently with a modern admin dashboard.',
    tools: ['PHP', 'MySQL', 'Laravel'],
    keyFeatures: [
      'Admin dashboard for clinics',
      'Manage doctors, patients, schedules, and reservations',
      'Medical record CRUD operations',
      'Role-based access control',
      'Responsive UI with Blade templates'
    ],
    imageUrl: '/images/portfolio8.png',
    category: 'WEB',
    demoLink: '#',
    codeLink: 'https://github.com/Muhammadrizky14/Medical-Record',
    featured: false
  },
];


function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [modalIdx, setModalIdx] = useState(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);


  return (
    <section id="projects" className="projects section-bg">
      <div className="container">
        <ScrollAnimation delay={200}>
          <h2 className="projects-title" style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.5rem', marginBottom: 8, color: '#8B5CF6' }}>Featured Projects</h2>
          <div style={{ textAlign: 'center', color: '#444b5e', fontSize: '1.2rem', marginBottom: 40 }}>A selection of my best work</div>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <div
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 32,
              justifyContent: 'center',
              width: '100%',
              maxWidth: 1200,
              margin: '0 auto',
              padding: '0 8px',
            }}
          >
            <style>{`
              @media (min-width: 600px) {
                .projects-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 36px !important;
                }
              }
              @media (min-width: 1100px) {
                .projects-grid {
                  grid-template-columns: repeat(3, 1fr) !important;
                  gap: 40px !important;
                }
              }
              .project-card {
                transition: box-shadow 0.2s, transform 0.2s;
              }
              .project-card:hover {
                box-shadow: 0 8px 40px #0004;
                transform: translateY(-4px) scale(1.01);
              }
              @media (max-width: 600px) {
                .project-card {
                  max-width: 98vw !important;
                  min-width: 0 !important;
                }
              }
            `}</style>
            {visibleProjects.map((project, idx) => (
              <div key={project.id} className="project-card" style={{ background: 'var(--card-bg, #232c43)', borderRadius: 24, boxShadow: '0 4px 32px #0002', width: '100%', maxWidth: 540, minWidth: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', margin: '0 auto', flex: 1 }}>
                {/* Badge Kategori */}
                {project.category && (
                  <span style={{ position: 'absolute', top: 18, right: 18, background: project.category === 'AI' ? '#7c3aed' : '#0ea5e9', color: '#fff', fontWeight: 700, borderRadius: 16, padding: '6px 18px', fontSize: 16, letterSpacing: 1 }}>{project.category}</span>
                )}
                {/* Gambar */}
                <div style={{ width: '100%', aspectRatio: '16/7', background: 'var(--img-bg, #fff)', borderRadius: '24px 24px 0 0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 140, maxHeight: 260 }}>
                  <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px 24px 0 0', minHeight: 140, maxHeight: 260 }} />
                </div>
                {/* Info */}
                <div style={{ padding: '24px 18px 0 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ color: 'var(--text-color, #fff)', fontWeight: 700, fontSize: '1.6rem', marginBottom: 12 }}>{project.title}</h3>
                  <p style={{ color: 'var(--subtitle-color, #bfc9e0)', fontSize: '1.1rem', marginBottom: 18 }}>{project.description}</p>
                  {/* Tools */}
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                    {project.tools.map((tool, i) => (
                      <span key={i} style={{ background: '#2d3756', color: '#c7d0ea', fontWeight: 600, borderRadius: 12, padding: '7px 18px', fontSize: 15 }}>{tool}</span>
                    ))}
                  </div>
                  {/* Tombol */}
                  <div style={{ display: 'flex', gap: 12, marginTop: 0, marginBottom: 32, flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => setModalIdx(idx)}
                      style={{ flex: 1, background: '#10b981', color: '#fff', fontWeight: 700, fontSize: '1.15rem', borderRadius: 12, padding: '18px 0', textAlign: 'center', border: 'none', textDecoration: 'none', boxShadow: '0 2px 8px #0001', transition: 'background 0.2s', cursor: 'pointer' }}
                    >View Details</button>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{ flex: 1, background: 'var(--card-bg, #232c43)', color: '#c7d0ea', fontWeight: 700, fontSize: '1.15rem', borderRadius: 12, padding: '18px 0', textAlign: 'center', textDecoration: 'none', boxShadow: '0 2px 8px #0001', border: '2px solid #2d3756', transition: 'background 0.2s' }}>Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {projects.length > 4 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
              <button
                onClick={() => setShowAll((v) => !v)}
                style={{
                  background: '#6366f1',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  border: 'none',
                  borderRadius: 10,
                  padding: '14px 38px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #0001',
                  transition: 'background 0.2s',
                }}
              >
                {showAll ? 'Show Less' : 'Load More'}
              </button>
            </div>
          )}
          {/* Modal Project Detail */}
          {modalIdx !== null && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(252, 252, 252, 0.85)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
                padding: '8px',
                boxSizing: 'border-box',
              }}
              onClick={e => {
                // Only close if click is on the overlay, not inside the modal
                if (e.target === e.currentTarget) setModalIdx(null);
              }}
            >
              <style>{`
                @media (max-width: 900px) {
                  .modal-content {
                    max-width: 98vw !important;
                    padding: 0 !important;
                  }
                }
                @media (max-width: 600px) {
                  .modal-content {
                    border-radius: 10px !important;
                    font-size: 13px !important;
                    max-width: 100vw !important;
                    min-width: 0 !important;
                  }
                  .modal-header-img {
                    min-height: 70px !important;
                    max-height: 100px !important;
                    border-radius: 10px 10px 0 0 !important;
                  }
                  .modal-header-title {
                    font-size: 1rem !important;
                    padding: 0 2px !important;
                  }
                  .modal-section {
                    padding: 8px 2px 8px 2px !important;
                    max-width: 98vw !important;
                  }
                  .modal-section > div, .modal-section ul {
                    max-width: 98vw !important;
                    word-break: break-word;
                  }
                }
              `}</style>
              <div
                className="modal-content"
                style={{
                  background: 'var(--card-bg, #181f2e)',
                  borderRadius: 24,
                  maxWidth: 800,
                  width: '100%',
                  minWidth: 0,
                  minHeight: 'min(80vh, 340px)',
                  boxShadow: '0 12px 64px #000b',
                  color: 'var(--text-color, #fff)',
                  position: 'relative',
                  animation: 'fadeIn .2s',
                  fontSize: 16,
                  overflow: 'auto',
                  maxHeight: '96vh',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                tabIndex={0}
                aria-modal="true"
                role="dialog"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalIdx(null)}
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: 32,
                    cursor: 'pointer',
                    fontWeight: 700,
                    lineHeight: 1,
                    zIndex: 10,
                    padding: 0,
                    margin: 0,
                  }}
                  aria-label="Close"
                >&times;</button>
                {/* Gambar header full width */}
                <div className="modal-header-img" style={{ position: 'relative', width: '100%', aspectRatio: '16/5', background: '#222', borderRadius: '24px 24px 0 0', overflow: 'hidden', minHeight: 120, maxHeight: 220, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                  <img src={visibleProjects[modalIdx].imageUrl} alt={visibleProjects[modalIdx].title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px 24px 0 0', filter: 'brightness(0.65)', minHeight: 120, maxHeight: 220 }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg,rgba(24,31,46,0.15) 30%,rgba(24,31,46,0.98) 100%)', zIndex: 1 }} />
                  <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', zIndex: 2, padding: '0 12px 12px 12px', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                      {visibleProjects[modalIdx].category && (
                        <span style={{ background: visibleProjects[modalIdx].category === 'AI' ? '#7c3aed' : '#0ea5e9', color: '#fff', fontWeight: 700, borderRadius: 14, padding: '5px 18px', fontSize: 15, letterSpacing: 1 }}>{visibleProjects[modalIdx].category}</span>
                      )}
                      {visibleProjects[modalIdx].featured && (
                        <span style={{ background: '#facc15', color: '#232c43', fontWeight: 700, borderRadius: 14, padding: '5px 14px', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontSize: 18, color: '#fbbf24' }}>★</span> FEATURED
                        </span>
                      )}
                    </div>
                    <h2 className="modal-header-title" style={{ color: '#fff', fontWeight: 800, fontSize: '2rem', margin: 0, lineHeight: 1.1, textAlign: 'center', padding: 0 }}>{visibleProjects[modalIdx].title}</h2>
                  </div>
                </div>
                {/* Section bawah */}
                <div className="modal-section" style={{
                  padding: '24px 18px 18px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: 700,
                  boxSizing: 'border-box',
                }}>
                  {/* Deskripsi singkat di bawah judul */}
                  <div style={{ color: '#e0e7ef', fontSize: 18, marginBottom: 28, marginTop: 0, textAlign: 'center', maxWidth: 700 }}>{visibleProjects[modalIdx].description}</div>
                  {/* Tombol Code Saja */}
                  <div style={{ display: 'flex', gap: 18, marginBottom: 36, width: '100%', maxWidth: 500, justifyContent: 'center' }}>
                    <a href={visibleProjects[modalIdx].codeLink} target="_blank" rel="noopener noreferrer" style={{ background: 'none', color: '#fff', fontWeight: 700, fontSize: '1.13rem', borderRadius: 12, padding: '16px 0', textAlign: 'center', textDecoration: 'none', flex: 1, border: '2px solid #3b4256', boxShadow: '0 2px 8px #0001', transition: 'background 0.2s' }}>View Code</a>
                  </div>
                  {/* Overview & Tools */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 36, marginBottom: 32, justifyContent: 'center', width: '100%' }}>
                    <div style={{ flex: 2, minWidth: 220, maxWidth: 400 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <span style={{ background: '#6366f1', color: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🛈</span>
                        <span style={{ fontWeight: 700, fontSize: 20, color: '#fff' }}>Project Overview</span>
                      </div>
                      <div style={{ color: '#bfc9e0', fontSize: 16, lineHeight: 1.7 }}>{visibleProjects[modalIdx].description}</div>
                    </div>
                    <div style={{ flex: 1.2, minWidth: 180, maxWidth: 300 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <span style={{ background: '#f59e42', color: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🛠️</span>
                        <span style={{ fontWeight: 700, fontSize: 20, color: '#fff' }}>Technologies Used</span>
                      </div>
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6, marginBottom: 10 }}>
                        {visibleProjects[modalIdx].tools.map((tool, i) => (
                          <span key={i} style={{ background: '#2d3756', color: '#c7d0ea', fontWeight: 600, borderRadius: 10, padding: '7px 16px', fontSize: 15 }}>{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Key Features */}
                  <div style={{ marginBottom: 0, width: '100%', maxWidth: 700 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ background: '#10b981', color: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✔️</span>
                      <span style={{ fontWeight: 700, fontSize: 20, color: '#fff' }}>Key Features</span>
                    </div>
                    <ul style={{ margin: '10px 0 0 22px', color: '#bfc9e0', fontSize: 16, lineHeight: 1.7 }}>
                      {visibleProjects[modalIdx].keyFeatures.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Projects;
