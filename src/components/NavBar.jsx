import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef(null);

  // Track scroll for navbar background styling & active link detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Determine active section for nav highlight
      const sections = ["hero", "projects", "experience", "skills", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest("#hamburger-btn")) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = link.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner relative">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="logo cursor-pointer"
        >
          Yusra Fatima
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop">
          <ul className="flex items-center space-x-8">
            {navLinks.map(({ link, name }) => {
              const secId = link.replace("#", "");
              const isActive = activeSection === secId;

              return (
                <li key={name} className="group relative">
                  <a
                    href={link}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`transition-colors duration-300 font-medium ${
                      isActive ? "text-cyan-400" : "text-white-50 hover:text-white"
                    }`}
                  >
                    <span>{name}</span>
                    <span
                      className={`underline ${
                        isActive ? "!w-full !bg-cyan-400" : ""
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="contact-btn group hidden lg:flex"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        {/* Mobile / Tablet Header Actions */}
        <div className="flex items-center gap-2.5 lg:hidden">
          {/* Mobile Quick Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="contact-btn group"
          >
            <div className="inner !px-3 !py-1.5 text-xs sm:text-sm">
              <span>Contact</span>
            </div>
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            id="hamburger-btn"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="size-9 sm:size-10 flex flex-col justify-center items-center rounded-lg bg-black-200/80 border border-white-50/15 hover:border-cyan-400/50 hover:bg-black-100 transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <span
              className={`w-4 sm:w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5 bg-cyan-400" : ""
              }`}
            />
            <span
              className={`w-4 sm:w-5 h-0.5 bg-white rounded-full transition-all duration-300 my-1 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`w-4 sm:w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5 bg-cyan-400" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Drawer Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute top-full left-0 right-0 mt-3 p-4 sm:p-6 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white-50/15 shadow-2xl shadow-black/90 transition-all duration-300 origin-top z-50 ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map(({ link, name }) => {
              const secId = link.replace("#", "");
              const isActive = activeSection === secId;

              return (
                <a
                  key={name}
                  href={link}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl font-medium text-base transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{name}</span>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "text-white/30"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}

            <div className="pt-3 mt-1 border-t border-white-50/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-center block hover:bg-cyan-400 transition-colors duration-300 shadow-md text-sm sm:text-base"
              >
                Let&apos;s Talk — Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
