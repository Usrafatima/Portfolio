import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aiSystemSkills } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const SystemUptimeWidget = () => {
  const [uptime, setUptime] = useState(99.98);
  const [latency, setLatency] = useState(31);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => Math.max(99.95, Math.min(99.99, prev + (Math.random() - 0.5) * 0.01)));
      setLatency((prev) => Math.max(28, Math.min(45, prev + Math.floor((Math.random() - 0.5) * 5))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-lg font-mono text-xs md:text-sm text-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between gap-4">
          <span className="text-white/40">SYSTEM STATUS:</span>
          <span className="text-green-400">ONLINE</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-white/40">SYSTEM UPTIME:</span>
          <span className="text-green-400">{uptime.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-white/40">LATENCY:</span>
          <span className="text-blue-400">{latency}ms</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-white/40">CORE MODULES:</span>
          <span className="text-cyan-400">9</span>
        </div>
      </div>
    </div>
  );
};

const colorMap = {
  green: "bg-green-500 shadow-[0_0_8px_#22c55e]",
  blue: "bg-blue-500 shadow-[0_0_8px_#3b82f6]",
  cyan: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
  purple: "bg-purple-500 shadow-[0_0_8px_#a855f7]",
  yellow: "bg-yellow-500 shadow-[0_0_8px_#eab308]",
};

const StatusIndicator = ({ status, color }) => {
  if (status === "RUNNING") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-400 animate-[progress_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-[10px] text-cyan-400 font-mono tracking-tighter">{status}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`size-1.5 rounded-full ${colorMap[color]} ${status === "ACTIVE" || status === "TRAINING" ? "animate-pulse" : ""}`} />
      <span className={`text-[10px] font-mono tracking-tighter text-${color}-400`}>{status}</span>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-none transition-all duration-300 hover:translate-y-[-4px] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden cursor-crosshair flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scanline Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)] h-[10%] w-full animate-[scan_3s_linear_infinite]" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-1">Module // {skill.name.split(' ')[0]}</span>
            <h3 className="text-white font-mono text-lg md:text-xl font-bold tracking-tight uppercase">
              [ {skill.name} ]
            </h3>
          </div>
          <StatusIndicator status={skill.status} color={skill.color} />
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-3 flex-grow">
          {skill.skills?.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`size-1.5 ${colorMap[skill.color]?.split(' ')[0]} opacity-50`} />
              <span className="text-white/80 font-mono text-sm uppercase tracking-wide">{item}</span>
            </div>
          ))}
        </div>

        <div className="h-[1px] w-full bg-white/5" />

        <div className="flex flex-col gap-2 min-h-[40px]">
          <p className="font-mono text-[10px] text-white/50 lowercase italic">
            {isHovered ? `> ${skill.subtext}` : `> system_idle...`}
          </p>
          {isHovered && (
            <div className="flex gap-1">
              <div className="size-1 bg-blue-500 animate-bounce" />
              <div className="size-1 bg-blue-500 animate-bounce [animation-delay:0.2s]" />
              <div className="size-1 bg-blue-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 size-2 border-t border-l border-white/20" />
      <div className="absolute top-4 right-0 size-2 border-t border-r border-white/20" />
      <div className="absolute bottom-0 left-0 size-2 border-b border-l border-white/20" />
      <div className="absolute bottom-0 right-0 size-2 border-b border-r border-white/20" />
      
      {/* Glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
    </div>
  );
};

const TechStack = () => {
  useGSAP(() => {
    gsap.from(".system-module", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
      },
    });
  });

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-black scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
              <span className="font-mono text-xs text-green-500 tracking-[0.3em] uppercase">SYSTEM STATUS: ONLINE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter text-white uppercase">
              AI SYSTEM STATUS // <span className="text-blue-500">SKILL MATRIX</span>
            </h2>
          </div>
          <SystemUptimeWidget />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {aiSystemSkills.map((skill, index) => (
            <div key={index} className="system-module h-full">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <span>Core: v4.2.0</span>
            <span>Auth: OK</span>
            <span>Buffer: 100%</span>
          </div>
          <div className="mt-4 md:mt-0">
            © 2026 AI COMMAND CENTER - ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
