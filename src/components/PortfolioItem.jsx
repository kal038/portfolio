import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-stone-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 border border-stone-200 dark:border-stone-700 w-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-32 sm:h-40 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-3 md:p-6">
        <h3 className="text-base md:text-xl lg:text-2xl font-bold text-stone-900 dark:text-white mb-2 md:mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1 md:gap-2">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 text-xs font-medium bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full border border-stone-300 dark:border-stone-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
