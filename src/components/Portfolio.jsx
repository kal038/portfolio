import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolio = [
  {
    title: "Apply Flow",
    imgUrl: "/assets/applyflow.png",
    stack: ["React", "Node", "TypeScript", "AWS"],
    link: "http://applyflow.xyz",
  },
  {
    title: "Developer Portfolio",
    imgUrl: "/assets/portfolio.png",
    stack: ["React", "Tailwind", "Vite"],
    link: "http://khoianhlam.com",
  },
  {
    title: "Jiggle Bliss",
    imgUrl: "/assets/ai-nerf-gun.jpg",
    stack: ["Next.js", "Tailwind", "Supabase", "Vercel"],
    link: "http://jigglebliss.com",
  },
];

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl">
        {portfolio.map((project, index) => (
          <PortfolioItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
