import React, { useState, useEffect } from "react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

function SectionNav() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      // Get the container that has the scroll-snap
      const container = document.querySelector(".snap-y");
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.height / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - containerCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section.id;
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    // Use the container's scroll event instead of window
    const container = document.querySelector(".snap-y");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Also check on initial load
      handleScroll();

      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeSection]);

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
