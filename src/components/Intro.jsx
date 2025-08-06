import React, { useState, useEffect } from "react";

function Intro() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Software Engineer", "Builder", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText("");
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, roleIndex]);

  return (
    <div className="flex items-center justify-center flex-col text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-8xl dark:text-white mb-6 md:mb-8 font-bold tracking-tight">
        Khoi A. Lam
      </h1>

      <h2 className="text-xl md:text-3xl mb-8 md:mb-12 font-light text-stone-600 dark:text-stone-400">
        {displayText}
        <span className="inline-block w-3 h-5 md:h-6 bg-current animate-pulse ml-2 align-middle -translate-y-0.5 -translate-x-0.5"></span>
      </h2>

      <div className="max-w-2xl space-y-6">
        <p className="text-lg md:text-xl leading-relaxed text-stone-700 dark:text-stone-300 font-light">
          I solve problems and build ideas from{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
            zero to one
          </span>{" "}
          through code.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-stone-600 dark:text-stone-400">
          In the process, I create scalable systems and elegant products that
          power positive user experiences.
        </p>
      </div>
    </div>
  );
}

export default Intro;
