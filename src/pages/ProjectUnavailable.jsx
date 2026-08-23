import React, { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";

const ProjectUnavailable = () => {
  const { platform: paramPlatform } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryPlatform = searchParams.get("platform");
  const projectName = searchParams.get("project");

  const platform = (paramPlatform || queryPlatform || "github").toLowerCase();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate("/#projects");
    setTimeout(() => {
      const elem = document.getElementById("projects");
      if (elem) {
        const headerOffset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        window.location.href = "/#projects";
      }
    }, 100);
  };

  const isLinkedIn = platform === "linkedin";
  const isGitHub = platform === "github";

  const config = {
    platformName: isLinkedIn ? "LinkedIn" : isGitHub ? "GitHub" : "Resource",
    title: isLinkedIn ? "Not available yet" : isGitHub ? "Still working on it" : "Not available yet",
    message: isLinkedIn
      ? "This project hasn't been shared on LinkedIn yet."
      : isGitHub
      ? "The GitHub repository for this project is currently being worked on and isn't available yet."
      : "This project link is currently being prepared and isn't available yet.",
    subtext: isLinkedIn
      ? "A comprehensive project overview, architecture insights, and live demonstration highlights are currently being prepared for the developer community. Stay tuned for the upcoming showcase post!"
      : isGitHub
      ? "The codebase is undergoing refactoring, documentation updates, and security cleanup before its official public release. In the meantime, explore my other open-source repositories!"
      : "The team is putting the final touches on this resource. Please check back soon or explore other featured projects.",
    badge: isLinkedIn ? "Showcase In Preparation" : isGitHub ? "Under Active Development" : "Coming Soon",
    statusDotColor: isLinkedIn ? "bg-blue-400" : isGitHub ? "bg-cyan-400" : "bg-purple-400",
    profileLink: isLinkedIn
      ? "https://www.linkedin.com/in/yusra-fatima-245967366/"
      : "https://github.com/Usrafatima",
    profileBtnText: isLinkedIn ? "View LinkedIn Profile" : "Explore GitHub Profile",
    icon: isLinkedIn ? (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ) : (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Navbar Header */}
      <NavBar />

      {/* Main Content Area */}
      <main className="relative flex-1 flex items-center justify-center pt-32 pb-20 px-5 md:px-10 overflow-hidden">
        {/* Background Glowing Spots & Decorative Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px"
          }}
        />

        {/* Central Card Container */}
        <div className="w-full max-w-2xl bg-[#0e0e10] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-white/20">
          {/* Subtle Top Border Gradient Accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Top Status Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.statusDotColor} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${config.statusDotColor}`} />
              </span>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
                {config.platformName} · Status
              </span>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-[11px]">
              {config.badge}
            </span>
          </div>

          {/* Icon & Title Area */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center shrink-0">
              {config.icon}
            </div>

            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                {config.platformName}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {config.title}
              </h1>

              {projectName && (
                <div className="inline-flex items-center gap-1.5 pt-1">
                  <span className="text-white/40 text-xs font-mono">Project:</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">
                    {projectName}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Intentional Message Box */}
          <div className="my-6 border-l-2 border-cyan-400 bg-white/[0.03] p-4 sm:p-5 rounded-r-2xl">
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              "{config.message}"
            </p>
            <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed">
              {config.subtext}
            </p>
          </div>

          {/* Development Roadmap Progress Indicator */}
          <div className="my-6 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 font-semibold block">
              Workflow Status
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-2">
                <span className="text-xs">✓</span>
                <span>Architecture</span>
              </div>
              <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 flex items-center gap-2">
                <span className="animate-spin text-xs">⚙</span>
                <span>Refinement</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 flex items-center gap-2">
                <span className="text-xs">○</span>
                <span>Public Release</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3.5">
            <button
              onClick={handleBackToProjects}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm sm:text-base hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.25)] hover:scale-[1.02] cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to Projects</span>
            </button>

            <a
              href={config.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{config.profileBtnText}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectUnavailable;
