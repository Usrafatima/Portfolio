import React, { useState, useEffect } from 'react';

const projects = [
   
   {
  id: 1,
  title: "Black Swan",
  subtitle: "AI-Powered Financial Market Intelligence & Risk Analysis Platform",
  achievement: "🏆 Honourable Mention — Qdrant Hackathon 2026",
  isBlackSwan: true,
  blog: "https://qdrant.tech/blog/vector-space-hackathon-winners-2026/#black-swan-yusra",
  desc: "An AI-powered financial intelligence platform that analyzes market data, detects unusual patterns, and provides context-aware insights using advanced AI and vector search.",
  fullDesc: "Black Swan is an AI-powered financial market intelligence platform built to identify and analyze unusual market events and potential black swan scenarios. The system combines financial data with AI-powered reasoning and semantic search to help users understand market movements, risks, and emerging anomalies. Qdrant Vector Database powers the semantic search and retrieval layer, while FastAPI provides the backend and Next.js, React, and Tailwind CSS power the frontend. The project was selected for an Honourable Mention at the Qdrant Hackathon 2026, recognizing its use of vector search and AI to address financial intelligence and risk analysis.",
  image: "/images/swan.png",
  tags: [
    "🏆 Qdrant Hackathon — Honourable Mention",
    "AI",
    "Qdrant Vector DB",
    "FastAPI",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Financial Analytics",
    "RAG",
    "Semantic Search"
  ],
  link: "YOUR_BLACK_SWAN_DEPLOYED_LINK",
  github: "YOUR_BLACK_SWAN_GITHUB_LINK"
},
{
    id: 3,
    title: "Nexa Support",
    subtitle: "AI-Powered Multi-Channel Customer Support System",
    desc: "AI-powered multi-channel customer support with smart automation and escalation",
    fullDesc:"Nexa Support is an AI-powered 24/7 customer support platform developed for Hackathon 5 that automates customer queries across Email, WhatsApp, and Web Forms. It acts as a virtual support agent that converts user queries into tickets, generates intelligent responses using Google Gemini 2.5 Flash, and resolves over 85% of issues automatically while escalating complex cases to human agents. The system ensures fast response times, efficient ticket management, and seamless multi-channel communication, making it a scalable and cost-effective solution for modern support systems.",  
    image: "/images/nexa.png",
     tags: ["FastAPI", "Python", "Nextjs", "PostgreSQl", "Kafka", "Gemini", "Meta API", "Docker","Kubernetes"],
    link: "https://www.linkedin.com/posts/yusra-fatima-245967366_nexa-support-hackathon-5-project-nexa-support-ugcPost-7439130898689699840-Zc4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg",
    github: "#"
   
  },
 
{
  id: 3,
  title: "Session X",
  subtitle: "Smart Global Market Sessions & Trading Intelligence Platform",
  desc: "A real-time trading intelligence platform that helps traders track global market sessions, ICT Kill Zones, market overlaps, and weekly candle openings across different time zones.",
  fullDesc: "Session X is a smart trading intelligence platform designed to help traders monitor global financial market sessions from a single interface. It provides real-time clocks for major trading markets, including New York, London, Tokyo, and Sydney, while automatically handling time-zone differences and daylight saving time. The platform also highlights ICT Kill Zones, session overlaps, market open and close times, and weekly FX candle openings. An intelligent notification system provides timely alerts for important trading events, with Firebase Cloud Messaging and PWA support enabling push notifications across devices. The application was built with Next.js, React, TypeScript, and Tailwind CSS, with Firebase used for notifications and backend services and Twelve Data integrated for market data.",
  image: "/images/session.png",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "FCM Push Notifications",
    "PWA",
    "Twelve Data API",
    "Trading Sessions",
    "ICT Kill Zones"
  ],
  link: "https://sessionx-trading.vercel.app/",
  github: "YOUR_SESSION_X_GITHUB_LINK"
},
{
  id: 4,
  title: "Marvel Saga",
  subtitle: "Interactive Marvel Cinematic Universe Discovery Platform",
  desc: "A full-featured Marvel fan platform with authentication, interactive quizzes, MCU timelines, movie discovery, and Marvel news — bringing the entire Marvel experience into one interactive web application.",
  fullDesc: "Marvel Saga is an interactive web platform built for Marvel fans to explore the Marvel Cinematic Universe in one place. The platform includes user authentication and login functionality, allowing users to access the application's personalized features. Users can explore Marvel movies and upcoming releases, read Marvel-related blogs and news, test their knowledge through interactive quizzes, and navigate the MCU through a chronological timeline. The project combines modern frontend development with authentication, responsive UI design, structured content management, and interactive user experiences to create a complete Marvel-focused entertainment platform.",
  image: "/images/marvel.png",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Authentication",
    "Interactive Quiz",
    "MCU Timeline",
    "Marvel Movies",
    "Blog Platform",
    "Responsive Design"
  ],
  link: "https://marvel-sagaa.vercel.app/",
  github: "YOUR_MARVEL_SAGA_GITHUB_LINK"
},
  
{
  id: 2,
  title: "Rescue Nest",
  subtitle: "AI-Powered Wildlife Rescue & Emergency Response Platform",
  desc: "An AI-powered platform designed to connect wildlife in need with rescuers, organizations, and communities through intelligent reporting, location-based coordination, and real-time emergency response.",
  fullDesc: "Rescue Nest is an AI-powered wildlife rescue and emergency response platform built to make reporting, locating, and coordinating wildlife rescues faster and more efficient. Users can report injured, endangered, or stranded animals, provide their location and relevant details, and connect with nearby rescuers or organizations. The platform features an interactive map for location-based rescue coordination and an AI-powered system to assist with animal identification, situation assessment, and rescue guidance. The frontend was developed using Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Leaflet, while the backend was built with FastAPI. Rescue Nest demonstrates practical experience in AI integration, geospatial technology, full-stack development, and technology-driven social impact.",
  image: "/images/rescue.png",
  tags: [
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Leaflet",
    "Geolocation",
    "Wildlife Rescue"
  ],
  link: "YOUR_RESCUE_NEST_DEPLOYED_LINK",
  github: "YOUR_RESCUE_NEST_GITHUB_LINK"
},
  {
    id: 2,
    title: "TaskPilot",
    subtitle: "Cloud-Native Event-Driven Microservices Productivity Platform",
    desc: "A sophisticated chatbot capable of context-aware responses, fast reasoning, and seamless scalability using state-of-the-art LLMs.",
    fullDesc: "This project involves building a production-grade chatbot using OpenAI's GPT-4. It features a retrieval-TaskPilot, a cloud-native productivity application that evolved from a monolithic FastAPI backend into a scalable microservices architecture. The system features task management with authentication (JWT and Google OAuth), and was refactored into independent services (task, audit, reminder, recurring) communicating through an event-driven architecture using Dapr and Kafka (Redpanda). The frontend was developed with Next.js and Tailwind CSS, while the backend leveraged FastAPI and SQLModel. The entire application was containerized with Docker and deployed on Kubernetes (Minikube for local development), demonstrating real-world skills in distributed systems, async communication, and cloud deployment. generation (RAG) pipeline to provide context-aware answers from a custom knowledge base. The backend is built with FastAPI for high performance, and the frontend uses React for a smooth user experience.",
    image: "/images/taskpilot.png",
    tags: ["Gemini", "Vector DB", "FastAPI","JWT, Google OAuth","Kubernetes (Minikube, AKS/GKE ready)", "Docker, Docker Compose","Kafka / Redpanda"],
    link: "https://task-pilot-inky.vercel.app/",
    github: "https://github.com/Usrafatima/To-do-app/tree/main"
  },
  
  
  {
    id: 5,
    title: "Autonomous 24/7 AI Workflow Automation Platform",
    subtitle: "24/7 AI-powered workflow automation system",
    desc: "**An autonomous AI system that monitors, plans, and executes business tasks across multiple platforms with minimal human intervention**",
    fullDesc: "This project focuses on building an AI Employee that works 24/7 to automate core business workflows across platforms like Gmail, WhatsApp, and LinkedIn. It continuously monitors incoming data, understands tasks using an AI reasoning engine, and executes actions such as replying to emails, qualifying leads, scheduling meetings, and generating or posting content. The system includes a human-in-the-loop approval layer for sensitive operations, ensuring both automation and control, and runs on a scheduled cycle with zero manual intervention while maintaining detailed logs for transparency and tracking. By automating repetitive tasks, it significantly improves efficiency and allows greater focus on strategy and growth. The tech stack includes Python for core logic, FastAPI for backend and APIs, Playwright for browser automation, Gemini AI for reasoning and task understanding, Windows Task Scheduler for continuous execution, and Obsidian for logging and dashboard visualization.",
    image: "/images/post.png",
    tags: ["Python", "FastAPI", "Obsidian", "Gemini", "Playwright", "Windows Task Scheduler", ],
    link: "https://www.linkedin.com/posts/yusra-fatima-245967366_ai-automation-businessautomation-ugcPost-7433845662045061120-4pBu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg",
    github: "https://www.linkedin.com/posts/yusra-fatima-245967366_ai-automation-businessautomation-ugcPost-7433845662045061120-4pBu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg"
  },
  {
    id: 4,
    title: "Humanoid-Robot-Book",
    subtitle: "AI-Powered Content Creation",
    desc: "Generate entire books or high-quality long-form content from simple prompts.",
    fullDesc: "Physical AI & Humanoid Robotics is an interactive AI-powered learning platform designed to teach the fundamentals of embodied AI and robotics through a modern, hands-on approach. Built for a hackathon, the project transforms traditional static content into a dynamic learning experience by combining a structured curriculum with an intelligent RAG-based chatbot that provides real-time explanations, translations, and contextual assistance. The platform covers key topics such as sensors, control systems, ROS2, simulation environments, and Vision-Language-Action models, while also offering practical coding examples to reinforce learning. Developed using Next.js, React, and Tailwind CSS, and deployed on Vercel, it functions as a complete AI-native educational ecosystem that bridges the gap between theory and real-world robotics, making complex concepts more accessible, interactive, and engaging for learners.",
    image: "/images/humanoidbook.png",
    tags: ["LLMs", "Rag Chatbot", "API","VectorDb","Spec-Driven Development", "Gemini","Nextjs", "Tailwind"],
    link: "https://humaoid-robot-book-q6en.vercel.app/",
    github: "https://github.com/Usrafatima/Humanoid-robot-book"
  },
  
];

const Modal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    return () => {
      document.body.style.overflow = 'unset';
      if (header) header.style.display = '';
    };
  }, []);

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
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 hover:bg-white/15 text-white transition-colors backdrop-blur-sm"
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors text-sm sm:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors text-sm sm:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      Source Code
                    </a>
                    {project.blog && (
                      <a href={project.blog} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors text-sm sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        Read Blog
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

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
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
              {/* Swan body - subtle dark silhouette with faint cyan edge glow */}
              <ellipse cx="45" cy="42" rx="32" ry="13" fill="rgba(20,20,22,0.85)" stroke="rgba(0,242,255,0.08)" strokeWidth="0.5"/>
              {/* Neck curve */}
              <path d="M58 40 C58 32, 50 22, 42 18 C38 16.5, 36 15, 35 13.5" stroke="rgba(20,20,22,0.9)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              {/* Head */}
              <ellipse cx="34.5" cy="12.5" rx="4" ry="3" fill="rgba(20,20,22,0.9)"/>
              {/* Beak - subtle cyan accent */}
              <path d="M30.5 12.5 L27 13.5 L30.5 14" fill="rgba(0,180,200,0.25)" stroke="rgba(0,200,220,0.15)" strokeWidth="0.3"/>
              {/* Eye - tiny cyan dot */}
              <circle cx="33" cy="12" r="0.6" fill="rgba(0,242,255,0.5)"/>
              {/* Left wing feathers */}
              <path d="M35 38 C22 30, 12 26, 8 24" stroke="rgba(15,15,17,0.7)" strokeWidth="1.5" fill="none"/>
              <path d="M33 40 C20 32, 9 28, 5 27" stroke="rgba(12,12,14,0.6)" strokeWidth="1.2" fill="none"/>
              <path d="M31 42 C18 34, 7 30, 3 29.5" stroke="rgba(10,10,12,0.5)" strokeWidth="1" fill="none"/>
              {/* Right wing feathers - mirrored */}
              <path d="M55 38 C68 30, 78 26, 82 24" stroke="rgba(15,15,17,0.7)" strokeWidth="1.5" fill="none"/>
              <path d="M57 40 C70 32, 81 28, 85 27" stroke="rgba(12,12,14,0.6)" strokeWidth="1.2" fill="none"/>
              <path d="M59 42 C72 34, 83 30, 87 29.5" stroke="rgba(10,10,12,0.5)" strokeWidth="1" fill="none"/>
              {/* Satin bow - refined, small, centered beneath body */}
              <g transform="translate(45, 54)">
                {/* Bow center knot */}
                <ellipse cx="0" cy="0" rx="1.8" ry="1.3" fill="rgba(18,18,20,0.9)" stroke="rgba(0,200,220,0.12)" strokeWidth="0.3"/>
                {/* Left loop */}
                <path d="M-1.5 0 C-4 -2.5, -8 -2.5, -9 0 C-8 2.5, -4 2.5, -1.5 0Z" fill="rgba(15,15,18,0.85)" stroke="rgba(0,200,220,0.1)" strokeWidth="0.3"/>
                {/* Right loop */}
                <path d="M1.5 0 C4 -2.5, 8 -2.5, 9 0 C8 2.5, 4 2.5, 1.5 0Z" fill="rgba(15,15,18,0.85)" stroke="rgba(0,200,220,0.1)" strokeWidth="0.3"/>
                {/* Left ribbon tail */}
                <path d="M-1.5 0.5 C-3 3, -5.5 5, -6.5 7" stroke="rgba(12,12,15,0.7)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
                {/* Right ribbon tail */}
                <path d="M1.5 0.5 C3 3, 5.5 5, 6.5 7" stroke="rgba(12,12,15,0.7)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              </g>
            </svg>

            {/* Subtle Cyan Particles / Glowing Specks */}
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

        {/* Tags */}
        <div className="flex items-center justify-between gap-4 mt-auto">
           <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] text-white/30 font-mono">#{tag}</span>
            ))}
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
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentPage >= maxPage}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
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
