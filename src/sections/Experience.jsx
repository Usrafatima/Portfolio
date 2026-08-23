import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards, experienceCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate each timeline's height as the user scrolls
    gsap.utils.toArray(".timeline").forEach((tl) => {
      gsap.to(tl, {
        transformOrigin: "bottom bottom",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: tl,
          start: "top center",
          end: "70% center",
          onUpdate: (self) => {
            gsap.to(tl, {
              scaleY: 1 - self.progress,
            });
          },
        },
      });
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 overflow-hidden scroll-mt-20"
    >
      <div className="w-full h-full md:px-20 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Education"
          sub="My Career Overview"
        />
        <div className="mt-20 md:mt-32 relative">
          <div className="relative z-50 space-y-20 md:space-y-32">
            {educationCards.map((card) => (
              <div key={card.title} id={card.title.toLowerCase().replace(/ /g, "-")} className="flex flex-col xl:flex-row gap-10 xl:gap-0 items-start scroll-mt-32">
                {/* Left Side: Glow Card */}
                <div className="xl:w-[32%] w-full">
                  <GlowCard card={card}>
                    <div className="flex justify-center">
                      <img src={card.imgPath} alt="exp-img" className="max-h-40 object-contain" />
                    </div>
                  </GlowCard>
                </div>

                {/* Timeline & Text container for mobile/tablet, separate columns for XL */}
                <div className="flex flex-1 items-start w-full xl:contents">
                  {/* Timeline Column - Perfectly Centered */}
                  <div className="relative flex-none flex flex-col items-center w-20 md:w-28 xl:w-[15%] self-stretch">
                    <div className="absolute inset-0 flex justify-center">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="timeline-logo relative z-30 !translate-y-0">
                      <img src={card.logoPath} alt="logo" className="size-10 md:size-12 object-contain" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="expText flex-1 pb-10 xl:w-[53%]">
                    <h1 className="font-semibold text-2xl md:text-3xl">{card.title}</h1>
                    <p className="my-3 md:my-5 text-white-50 text-sm md:text-base">
                      🗓️&nbsp;{card.date}
                    </p>
                    <p className="text-[#839CB5] italic text-sm">
                      Responsibilities
                    </p>
                    <ul className="list-disc ms-5 mt-3 md:mt-5 flex flex-col gap-3 md:gap-5 text-white-50">
                      {card.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index} className="text-base md:text-lg">
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-32 md:mt-48">
          <TitleHeader
            title="Experience"
            sub="My Work Experience"
          />
          <div className="mt-20 md:mt-32 relative">
            <div className="relative z-50 space-y-20 md:space-y-32">
              {experienceCards.map((card) => (
                <div key={card.title} id={card.title.toLowerCase().replace(/ /g, "-")} className="flex flex-col xl:flex-row gap-10 xl:gap-0 items-start scroll-mt-32">
                  {/* Left Side: Glow Card */}
                  <div className="xl:w-[32%] w-full">
                    <GlowCard card={card}>
                      <div className="flex justify-center">
                        <img src={card.imgPath} alt="exp-img" className="max-h-40 object-contain" />
                      </div>
                    </GlowCard>
                  </div>

                  {/* Timeline & Text container */}
                  <div className="flex flex-1 items-start w-full xl:contents">
                    {/* Timeline Column */}
                    <div className="relative flex-none flex flex-col items-center w-20 md:w-28 xl:w-[15%] self-stretch">
                      <div className="absolute inset-0 flex justify-center">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="timeline-logo relative z-30 !translate-y-0">
                        <img src={card.logoPath} alt="logo" className="size-10 md:size-12 object-contain" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="expText flex-1 pb-10 xl:w-[53%]">
                      <h1 className="font-semibold text-2xl md:text-3xl">{card.title}</h1>
                      <p className="my-3 md:my-5 text-white-50 text-sm md:text-base">
                        🗓️&nbsp;{card.date}
                      </p>
                      <p className="text-[#839CB5] italic text-sm">
                        Responsibilities
                      </p>
                      <ul className="list-disc ms-5 mt-3 md:mt-5 flex flex-col gap-3 md:gap-5 text-white-50">
                        {card.responsibilities.map(
                          (responsibility, index) => (
                            <li key={index} className="text-base md:text-lg">
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
