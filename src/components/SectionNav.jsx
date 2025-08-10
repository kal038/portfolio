import React, { useState, useEffect } from "react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "resume", label: "Resume" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

function SectionNav() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      {
        root: null, // viewport or scroll container if you pass one
        threshold: [0.3, 0.6],
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
      <nav className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            aria-label={`Go to ${section.label} section`}
          >
            {/* The bead/dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-stone-800/80 dark:bg-stone-100/80 border-stone-400/80 dark:border-stone-200/80 scale-125"
                  : "bg-transparent border-stone-400/50 dark:border-stone-500/50 hover:border-stone-500/80 dark:hover:border-stone-400/80 hover:scale-110"
              }`}
            ></div>

            {/* Tooltip label on hover */}
            <span
              className={`absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-300 pointer-events-none bg-stone-800/90 dark:bg-stone-700/90 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default SectionNav;
