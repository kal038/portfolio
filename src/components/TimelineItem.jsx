import React from "react";

function TimelineItem({ year, title, duration, details, location }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg hover:p-4 hover:-ml-4">
      <li className="mb-4 md:mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex flex-wrap gap-2 md:gap-4 items-center">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md text-xs md:text-sm">
              {year}
            </span>
            <h3 className="text-base md:text-lg font-semibold text-stone-900 dark:text-white">
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-stone-400 dark:text-stone-500">
            <span>{duration}</span>
            <span>{location}</span>
          </div>
          <p className="text-sm md:text-base font-normal text-stone-500 dark:text-stone-400 mt-1">
            {details}
          </p>
        </div>
      </li>
    </ol>
  );
}

export default TimelineItem;
