import React from "react";
import PortfolioItem from "./PortfolioItem";
import applyflowImg from "/assets/applyflow.png";
import portfolioImg from "/assets/portfolio.png";

const portfolio = [
  {
    title: "Apply Flow",
    imgUrl: applyflowImg,
    stack: ["React", "Node", "TypeScript", "AWS"],
    link: "http://applyflow.xyz",
  },
  {
    title: "Developer Portfolio",
    imgUrl: portfolioImg,
    stack: ["React", "Tailwind", "Vite"],
    link: "http://khoianhlam.com",
  },
  {
    title: "Jiggle Bliss",
    imgUrl: portfolioImg,
    stack: ["Next.js", "Tailwind", "Supabase", "Vercel"],
    link: "http://jigglebliss.com",
  },
];

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 w-full max-w-xs md:max-w-6xl">
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
