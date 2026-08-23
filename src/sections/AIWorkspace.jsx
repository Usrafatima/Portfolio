import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CodeRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const snippets = [
      "import torch", "model.forward()", "agent.think()", "pinecone.query()",
      "npm start", "python main.py", "git push origin", "docker-compose up",
      "Llama-3-FineTune", "RAG_System.v2", "env: production", "api: online",
      "model.eval()", "loss: 0.024", "epoch: 42/100", "{\"status\": \"ok\"}"
    ];

    const columns = Math.floor(canvas.width / 150);
    const drops = new Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00f2ff';
      ctx.font = '12px monospace';

      drops.forEach((y, i) => {
        const text = snippets[Math.floor(Math.random() * snippets.length)];
        const x = i * 150;
        
        ctx.globalAlpha = 0.15;
        ctx.fillText(text, x, y);
        
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 1.5;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const terminalRef = useRef(null);

  const commands = [
    "booting ai environment...",
    "loading llm models...",
    "connecting vector database...",
    "initializing autonomous agents...",
    "running validation tests...",
    "deployment successful.",
    "system ready."
  ];

  useEffect(() => {
    if (currentLineIndex < commands.length) {
      if (currentCharIndex < commands[currentLineIndex].length) {
        const timeout = setTimeout(() => {
          setLines(prev => {
            const newLines = [...prev];
            if (currentCharIndex === 0) {
              newLines.push("> " + commands[currentLineIndex][0]);
            } else {
              newLines[newLines.length - 1] = "> " + commands[currentLineIndex].substring(0, currentCharIndex + 1);
            }
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 800);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  useGSAP(() => {
    const handleMouseMove = (e) => {
      if (!terminalRef.current) return;
      const { left, top, width, height } = terminalRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      gsap.to(terminalRef.current, {
        rotateY: x * 10,
        rotateX: -y * 10,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(terminalRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const terminalElement = terminalRef.current;
    terminalElement.addEventListener('mousemove', handleMouseMove);
    terminalElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      terminalElement.removeEventListener('mousemove', handleMouseMove);
      terminalElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={terminalRef}
      className="w-full max-w-xl aspect-[4/3] sm:aspect-video rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden relative group perspective-1000"
    >
      {/* Top Bar */}
      <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
        <div className="size-2 sm:size-3 rounded-full bg-red-500/50" />
        <div className="size-2 sm:size-3 rounded-full bg-yellow-500/50" />
        <div className="size-2 sm:size-3 rounded-full bg-green-500/50" />
        <div className="ml-auto flex gap-2 sm:gap-4 text-[8px] sm:text-[10px] font-mono text-white/40">
          <span>CPU: 42%</span>
          <span className="hidden sm:inline">GPU: ACTIVE</span>
          <span className="text-green-400">API: ONLINE</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base h-full overflow-y-auto custom-scrollbar">
        {lines.map((line, i) => (
          <div key={i} className={`mb-1 sm:mb-2 ${i === lines.length - 1 && i < commands.length - 1 ? 'text-cyan-400' : 'text-white/80'}`}>
            {line}
            {i === lines.length - 1 && <span className="inline-block w-2 h-3 sm:h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />}
          </div>
        ))}
        {lines.length === commands.length && (
          <div className="mt-2 sm:mt-4 text-green-400 font-bold animate-pulse text-sm sm:text-base">
            SYSTEM READY.
          </div>
        )}
      </div>
    </div>
  );
};

const AIWorkspace = () => {
  return (
    <section id="workspace" className="relative min-h-[80vh] flex items-center bg-black overflow-hidden py-20 scroll-mt-20">
      <CodeRain />
      
      <div className="w-full h-full md:px-20 px-5 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">Engineered Intelligence</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Inside My <br /> AI Workspace
              </h2>
            </div>
            
            <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed">
              A glimpse into how I build intelligent systems, deploy AI tools, and engineer production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'APIs', 'LLMs', 'Automation', 'Deployment'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Terminal */}
          <div className="flex justify-center xl:justify-end">
            <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIWorkspace;
