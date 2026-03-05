import React, { useState } from "react";
import Modal from "./Modal";

const projects = [
  {
    title: "LettuceSphere",
    credit: "Capstone Group Project",
    description:
      "Developed an IoT-based hydroponics system with real-time pH/temperature monitoring and AI-powered lettuce health classification.",
    longDescription:
      "LettuceSphere is a comprehensive vertical farming solution. It bridges the gap between hardware and software, utilizing ESP32 microcontrollers to read sensor data (pH, temperature, humidity) and an AI model (TFLite) to classify the health of the lettuce leaves, all viewed in real-time on a cross-platform mobile app.",
    features: [
      "Real-time IoT sensor data visualization",
      "AI-powered leaf health classification using TensorFlow Lite",
      "Cross-platform mobile application built with Flutter",
      "Hardware integration with ESP32 and Arduino",
    ],
    tech: ["Flutter", "Dart", "TFLite", "ESP32", "Sensors"],
    link: "#",
    githubUrl: "#",
    images: [`${import.meta.env.BASE_URL}images/LS1.jpg`, `${import.meta.env.BASE_URL}images/LS2.jpg`, `${import.meta.env.BASE_URL}images/LS3.jpg`, `${import.meta.env.BASE_URL}images/LS4.jpg`, `${import.meta.env.BASE_URL}images/LS5.jpg`],
    orientation: "portrait",
  },
  {
    title: "Scramble Twist",
    credit: "Personal Project",
    description:
      "Designed a language learning game featuring word-unscrambling challenges and a speech-recognition feature for pronunciation practice.",
    longDescription:
      "Scramble Twist makes learning languages fun and interactive. Players are challenged to unscramble words under a time limit, but the real twist is the pronunciation practice: using a Speech-to-Text API, players must speak the unscrambled word correctly to pass the level.",
    features: [
      "Interactive word unscrambling algorithms",
      "Voice recognition for pronunciation validation",
      "Engaging UI/UX designed in Flutter",
      "Progress tracking and scoring system",
    ],
    tech: ["Flutter", "Dart", "Speech-to-Text API"],
    link: "#",
    githubUrl: "#",
    images: [`${import.meta.env.BASE_URL}images/ST1.jpg`, `${import.meta.env.BASE_URL}images/ST2.jpg`, `${import.meta.env.BASE_URL}images/ST3.jpg`, `${import.meta.env.BASE_URL}images/ST4.jpg`, `${import.meta.env.BASE_URL}images/ST5.jpg`, `${import.meta.env.BASE_URL}images/ST6.jpg`],
    orientation: "portrait",
  },
  {
    title: "MemberPay",
    credit: "Group Project",
    description:
      "Developed a centralized membership fee management system to digitize student records and payment tracking in whole LNU organizations.",
    longDescription:
      "MemberPay replaced manual, paper-based tracking of organization fees at Leyte Normal University. It is a secure, role-based system where administrators can manage collections, track debts, and generate reports, while students can log in to view their payment history and outstanding balances.",
    features: [
      "Role-based access control (Admin vs Student views)",
      "Digital payment tracking and receipt generation",
      "Responsive dashboard built with Bootstrap",
      "Containerized deployment using Docker",
    ],
    tech: ["PHP/Laravel", "Docker", "MySQL", "Bootstrap", "HTML/CSS"],
    link: "#",
    githubUrl: "#",
    images: [`${import.meta.env.BASE_URL}images/MP1.png`, `${import.meta.env.BASE_URL}images/MP2.png`, `${import.meta.env.BASE_URL}images/MP3.png`, `${import.meta.env.BASE_URL}images/MP4.png`],
    orientation: "landscape",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project, e) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200); // Wait for transition before clearing data
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group cursor-pointer"
              onClick={(e) => openModal(project, e)}
            >
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              {project.credit && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 text-xs font-medium text-amber-300 bg-amber-900/30 rounded-full border border-amber-500/20">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.credit}
                </span>
              )}
              <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/30 rounded-full border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Trigger Link */}
              <button
                onClick={(e) => openModal(project, e)}
                className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1"
              >
                View Project Details{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}
