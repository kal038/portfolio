import React from "react";
import Title from "./Title";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
      },
      {
        name: "HTML/CSS",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
      },
      {
        name: "Java",
        icon: "https://www.svgrepo.com/show/473668/java.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
      },
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
      },
      {
        name: "AWS",
        icon: "https://www.svgrepo.com/show/448299/aws.svg",
      },
      {
        name: "Gradle",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gradle.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vite.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg",
      },
    ],
  },
];

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <Title>Skills & Technologies</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-stone-800 p-3 md:p-6 rounded-xl shadow-lg border border-stone-200 dark:border-stone-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-6 text-center text-stone-900 dark:text-white">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center p-1 md:p-3 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors duration-200 group"
                >
                  <div className="mb-1 md:mb-2 transform group-hover:scale-110 transition-transform duration-200">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 md:w-8 md:h-8 filter dark:invert"
                    />
                  </div>
                  <span className="text-xs font-medium text-center text-stone-700 dark:text-stone-300 leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
    </div>
  );
}

export default Skills;
