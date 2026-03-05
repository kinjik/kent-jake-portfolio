import React, { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent scrolling when modal is open and reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0); // Reset to first image when opened
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Determine if we have multiple images
  const hasImages = project.images && project.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1,
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop (Clicking outside closes modal) */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-20"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-10">
          {/* Header */}
          <h3 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>
          {project.credit && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 text-sm font-medium text-amber-300 bg-amber-900/30 rounded-full border border-amber-500/20">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.credit}
            </span>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Image Gallery / Carousel */}
          <div className={`relative w-full bg-slate-800 border border-slate-700 rounded-xl mb-8 flex items-center justify-center overflow-hidden group ${project.orientation === "portrait" ? "h-[28rem] sm:h-[32rem]" : "h-64 sm:h-96"}`}>
            {hasImages ? (
              <>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className={`h-full transition-opacity duration-300 ${project.orientation === "portrait" ? "object-contain" : "w-full object-cover"}`}
                />

                {/* Carousel Controls (only show if more than 1 image) */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 text-white rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 text-white rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Image Indicators (Dots) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? "bg-cyan-400" : "bg-slate-500/50"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              // Placeholder when no images exist
              <div className="text-slate-500 flex flex-col items-center">
                <svg
                  className="w-12 h-12 mb-2 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>No screenshots available</span>
              </div>
            )}
          </div>

          {/* Detailed Content */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                The Challenge
              </h4>
              <p>{project.longDescription || project.description}</p>
            </div>

            {project.features && (
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Key Features
                </h4>
                <ul className="list-disc pl-5 space-y-1 marker:text-cyan-500">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors border border-slate-700"
              >
                View Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-500 hover:text-slate-900 text-white rounded-xl font-medium transition-all duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
