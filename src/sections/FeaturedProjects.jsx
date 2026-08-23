import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../constants';

const projects = projectsData;

const Modal = ({ project, isOpen, onClose }) => {
  const navigate = useNavigate();

  // Prevent scroll when modal is open
  useEffect(() => {
    if (!isOpen || !project) return;
    document.body.style.overflow = 'hidden';
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    return () => {
      document.body.style.overflow = 'unset';
      if (header) header.style.display = '';
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const handleUnavailableNav = (platform) => {
    onClose();
    navigate(`/projects/unavailable/${platform}?project=${encodeURIComponent(project.title)}`);
  };

  const hasLiveDemo = project.liveDemo && project.liveDemo.trim() !== '' && !project.liveDemo.includes('linkedin.com') && !project.liveDemo.includes('YOUR_RESCUE_NEST');

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-[#0e0e10] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 hover:bg-white/15 text-white transition-colors backdrop-blur-sm cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          <div className="w-full relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] to-transparent" />
          </div>

          <div className="p-5 sm:p-8 md:p-12 -mt-10 sm:-mt-20 relative z-10 bg-[#0e0e10]">
            <div className="mb-6 sm:mb-8">
              <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-2 block">{project.subtitle}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-white/60 font-mono">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2 space-y-4 sm:space-y-6">
                <h4 className="text-white font-bold text-base sm:text-lg">About the Project</h4>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed">{project.fullDesc}</p>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-base sm:text-lg">Links</h4>
                  <div className="flex flex-col gap-3">
                    {/* Live Demo Link */}
                    {hasLiveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors text-sm sm:text-base"
                      >
                        <div className="flex items-center gap-2.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          <span>Live Demo</span>
                        </div>
                        <span className="text-xs font-mono">↗</span>
                      </a>
                    )}

                    {/* GitHub Link or Status Page */}
                    {project.github ? (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-colors text-sm sm:text-base"
                      >
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          <span>GitHub Source</span>
                        </div>
                        <span className="text-xs font-mono text-white/50">↗</span>
                      </a>
                    ) : (
                      <button 
                        onClick={() => handleUnavailableNav('github')} 
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-yellow-500/20 text-white font-bold hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-colors text-sm sm:text-base cursor-pointer text-left group/btn"
                      >
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          <span>GitHub <span className="text-xs font-normal font-mono text-yellow-400/80">(In Progress)</span></span>
                        </div>
                        <span className="text-xs font-mono text-yellow-400 group-hover/btn:translate-x-1 transition-transform">Status →</span>
                      </button>
                    )}

                    {/* LinkedIn Link or Status Page */}
                    {project.linkedin ? (
                      <a 
                        href={project.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-colors text-sm sm:text-base"
                      >
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span>LinkedIn Showcase</span>
                        </div>
                        <span className="text-xs font-mono text-white/50">↗</span>
                      </a>
                    ) : (
                      <button 
                        onClick={() => handleUnavailableNav('linkedin')} 
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-blue-500/20 text-white font-bold hover:bg-blue-500/10 hover:border-blue-500/40 transition-colors text-sm sm:text-base cursor-pointer text-left group/btn"
                      >
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span>LinkedIn <span className="text-xs font-normal font-mono text-blue-400/80">(Coming Soon)</span></span>
                        </div>
                        <span className="text-xs font-mono text-blue-400 group-hover/btn:translate-x-1 transition-transform">Status →</span>
                      </button>
                    )}

                    {/* Blog Link */}
                    {project.blog && (
                      <a href={project.blog} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors text-sm sm:text-base">
                        <div className="flex items-center gap-2.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                          <span>Read Blog</span>
                        </div>
                        <span className="text-xs font-mono text-white/50">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const cardRef = React.useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    if (project.github && project.github.trim() !== '') {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/projects/unavailable/github?project=${encodeURIComponent(project.title)}`);
    }
  };

  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    if (project.linkedin && project.linkedin.trim() !== '') {
      window.open(project.linkedin, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/projects/unavailable/linkedin?project=${encodeURIComponent(project.title)}`);
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
      className="project-card group relative rounded-3xl border border-white/10 bg-[#0e0e10] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer h-[380px] sm:h-[420px] md:h-[450px]"
    >
      {/* Radial Glow on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
           style={{
             background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 242, 255, 0.1), transparent 40%)`
           }}
      />

      {/* Black Swan Decorative Overlay */}
      {project.isBlackSwan && (
        <div className="absolute inset-x-0 top-0 flex flex-col items-center pointer-events-none z-5" style={{ paddingTop: '20px' }}>
          {/* Swan Silhouette & Bow */}
          <div className="relative">
            <svg width="90" height="68" viewBox="0 0 90 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <ellipse cx="45" cy="42" rx="32" ry="13" fill="rgba(20,20,22,0.85)" stroke="rgba(0,242,255,0.08)" strokeWidth="0.5"/>
              <path d="M58 40 C58 32, 50 22, 42 18 C38 16.5, 36 15, 35 13.5" stroke="rgba(20,20,22,0.9)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <ellipse cx="34.5" cy="12.5" rx="4" ry="3" fill="rgba(20,20,22,0.9)"/>
              <path d="M30.5 12.5 L27 13.5 L30.5 14" fill="rgba(0,180,200,0.25)" stroke="rgba(0,200,220,0.15)" strokeWidth="0.3"/>
              <circle cx="33" cy="12" r="0.6" fill="rgba(0,242,255,0.5)"/>
              <path d="M35 38 C22 30, 12 26, 8 24" stroke="rgba(15,15,17,0.7)" strokeWidth="1.5" fill="none"/>
              <path d="M33 40 C20 32, 9 28, 5 27" stroke="rgba(12,12,14,0.6)" strokeWidth="1.2" fill="none"/>
              <path d="M31 42 C18 34, 7 30, 3 29.5" stroke="rgba(10,10,12,0.5)" strokeWidth="1" fill="none"/>
              <path d="M55 38 C68 30, 78 26, 82 24" stroke="rgba(15,15,17,0.7)" strokeWidth="1.5" fill="none"/>
              <path d="M57 40 C70 32, 81 28, 85 27" stroke="rgba(12,12,14,0.6)" strokeWidth="1.2" fill="none"/>
              <path d="M59 42 C72 34, 83 30, 87 29.5" stroke="rgba(10,10,12,0.5)" strokeWidth="1" fill="none"/>
              <g transform="translate(45, 54)">
                <ellipse cx="0" cy="0" rx="1.8" ry="1.3" fill="rgba(18,18,20,0.9)" stroke="rgba(0,200,220,0.12)" strokeWidth="0.3"/>
                <path d="M-1.5 0 C-4 -2.5, -8 -2.5, -9 0 C-8 2.5, -4 2.5, -1.5 0Z" fill="rgba(15,15,18,0.85)" stroke="rgba(0,200,220,0.1)" strokeWidth="0.3"/>
                <path d="M1.5 0 C4 -2.5, 8 -2.5, 9 0 C8 2.5, 4 2.5, 1.5 0Z" fill="rgba(15,15,18,0.85)" stroke="rgba(0,200,220,0.1)" strokeWidth="0.3"/>
                <path d="M-1.5 0.5 C-3 3, -5.5 5, -6.5 7" stroke="rgba(12,12,15,0.7)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
                <path d="M1.5 0.5 C3 3, 5.5 5, 6.5 7" stroke="rgba(12,12,15,0.7)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              </g>
            </svg>

            {/* Subtle Cyan Particles */}
            <div className="absolute inset-0">
              {[
                { x: -15, y: 10, size: 2, opacity: 0.4, animDelay: '0s', animDur: '3.5s' },
                { x: 95, y: 15, size: 1.5, opacity: 0.35, animDelay: '1.2s', animDur: '4s' },
                { x: 25, y: -5, size: 1.8, opacity: 0.3, animDelay: '0.8s', animDur: '3.8s' },
                { x: 70, y: -2, size: 1.2, opacity: 0.25, animDelay: '2s', animDur: '4.2s' },
                { x: 5, y: 50, size: 1.4, opacity: 0.2, animDelay: '0.4s', animDur: '3.2s' },
                { x: 80, y: 45, size: 1.6, opacity: 0.22, animDelay: '1.6s', animDur: '3.6s' },
                { x: 45, y: -8, size: 1, opacity: 0.18, animDelay: '2.5s', animDur: '4.5s' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `calc(50% + ${p.x}px)`,
                    top: `calc(45% + ${p.y}px)`,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: 'rgba(0, 242, 255, ' + p.opacity + ')',
                    boxShadow: '0 0 ' + (p.size * 2) + 'px rgba(0, 242, 255, ' + (p.opacity * 0.6) + ')',
                    animation: `floatParticle ${p.animDur} ease-in-out ${p.animDelay} infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Honourable Mention Badge — upper right corner */}
      {project.isBlackSwan && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-yellow-500/30 bg-yellow-500/10" style={{ backdropFilter: 'blur(8px)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(250,204,21,0.35)" stroke="rgba(250,204,21,0.7)" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
          <span className="text-yellow-400 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-bold">Honourable Mention</span>
          <span className="text-yellow-500/40 text-[9px] hidden sm:inline">·</span>
          <span className="text-yellow-400/60 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.08em] hidden sm:inline">Qdrant Hackathon 2026</span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
          <p className="text-cyan-400/60 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{project.subtitle}</p>
        </div>

        <p className="text-white/40 text-sm mb-6 line-clamp-2">
          {project.desc}
        </p>

        {/* Project Visual Area */}
        <div className="relative flex-1 rounded-2xl overflow-hidden bg-white/5 border border-white/5 mb-6 group-hover:border-white/10 transition-colors">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" 
          />
          {/* View More Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
            <span className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider">View Details</span>
          </div>
        </div>

        {/* Tags and Quick Action Links */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-1">
          <div className="flex flex-wrap gap-1.5 overflow-hidden">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] text-white/35 font-mono truncate max-w-[130px]">#{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 shrink-0 z-20">
            {/* GitHub Quick Button */}
            <button
              onClick={handleGitHubClick}
              title={project.github ? "Open GitHub Repository" : "GitHub Repository (In Progress)"}
              aria-label={project.github ? "GitHub Repository" : "GitHub Status"}
              className={`size-8 rounded-lg border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                project.github 
                  ? "bg-white/5 border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-white/70 hover:text-cyan-300"
                  : "bg-white/5 border-white/10 hover:border-yellow-500/40 hover:bg-yellow-500/10 text-white/40 hover:text-yellow-300"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </button>

            {/* LinkedIn Quick Button */}
            <button
              onClick={handleLinkedInClick}
              title={project.linkedin ? "Open LinkedIn Post" : "LinkedIn Post (Coming Soon)"}
              aria-label={project.linkedin ? "LinkedIn Post" : "LinkedIn Status"}
              className={`size-8 rounded-lg border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                project.linkedin 
                  ? "bg-white/5 border-white/10 hover:border-[#0077b5]/80 hover:bg-[#0077b5]/10 text-white/70 hover:text-[#0077b5]"
                  : "bg-white/5 border-white/10 hover:border-blue-400/40 hover:bg-blue-500/10 text-white/40 hover:text-blue-300"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CARDS_PER_PAGE = 4;

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const maxPage = totalPages - 1;

  const handlePrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(maxPage, p + 1));

  const startIdx = currentPage * CARDS_PER_PAGE;
  const visibleProjects = projects.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <section id="projects" className="py-32 bg-black relative z-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-cyan-500" />
              <span className="text-cyan-400 font-mono tracking-widest uppercase text-[10px] font-bold">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Projects.
            </h2>
            <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
              A curated selection of intelligent systems and autonomous tools built with production-grade AI technologies.
            </p>
          </div>

          {/* Navigation Arrows — right side */}
          <div className="flex items-center gap-3 pb-2">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentPage >= maxPage}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        {/* Project Grid — 2×2 per page with fade transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" key={currentPage}>
          {visibleProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={(p) => setSelectedProject(p)} 
            />
          ))}
        </div>

      </div>

      {/* Modal for project details */}
      <Modal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default FeaturedProjects;
