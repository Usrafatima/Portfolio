import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import FloatingAIAgentNetwork from "../components/FloatingAIAgentNetwork";

// Toggle between 3D model and AI Agent Network
// Set to true to show the Floating AI Agent Network
// Set to false to restore the original 3D model
const SHOW_AI_NETWORK = true;

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-10 w-full">
        <img src="/images/bg.png" alt="" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center lg:w-[58%] xl:w-[54%] 2xl:w-[50%] w-full pl-5 sm:pl-10 md:pl-16 lg:pl-16 xl:pl-20 pr-5 sm:pr-10 md:pr-16 lg:pr-4 xl:pr-6 relative z-20 pointer-events-none">
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-6 xl:gap-7">
            <div className="hero-text !items-start !text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold leading-[1.12] sm:leading-[1.12] lg:leading-[1.1] xl:leading-[1.08] tracking-tight lg:tracking-[-0.025em]">
                Engineering
                <span className="slide inline-block align-middle">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-2 pb-1.5 lg:pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-10 lg:size-9 md:size-8 size-7 md:p-1.5 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold leading-[1.12] sm:leading-[1.12] lg:leading-[1.1] xl:leading-[1.08] tracking-tight lg:tracking-[-0.025em]">
                into Intelligent Systems
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold leading-[1.12] sm:leading-[1.12] lg:leading-[1.1] xl:leading-[1.08] tracking-tight lg:tracking-[-0.025em]">
                that Power Tomorrow
              </h1>
            </div>

            <p className="text-white-50 text-base sm:text-lg md:text-lg xl:text-xl max-w-xl leading-relaxed relative z-10">
              Hi, I’m Yusra, an AI Engineer specializing in AI agents, intelligent systems, automation, and modern web experiences. I build AI-powered solutions that connect intelligent agents with real-world workflows, APIs, and applications to turn complex problems into practical products.
            </p>
            <div className="pointer-events-auto w-full sm:w-fit mt-1 sm:mt-2">
              <Button
                text="See My Work"
                className="w-full sm:w-fit min-w-[220px] sm:min-w-[260px] max-w-[280px] sm:max-w-none"
                id="projects"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or AI Agent Network */}
        <div className="hero-3d-layout md:block">
          {SHOW_AI_NETWORK ? <FloatingAIAgentNetwork /> : <HeroExperience />}
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
