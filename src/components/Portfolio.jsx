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
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
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
