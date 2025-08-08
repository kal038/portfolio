import React from "react";
import resume from "/assets/resume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white dark:bg-stone-800 rounded-xl shadow-lg p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-stone-900 dark:text-white">
            Resume
          </h2>

          <div className="flex flex-col items-center">
            {/* PDF Viewer using iframe */}
            <div className="w-full h-96 md:h-[600px] border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
              <iframe
                src={resume}
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>

            {/* Download Button */}
            <div className="mt-6">
              <a
                href={resume}
                download="resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
