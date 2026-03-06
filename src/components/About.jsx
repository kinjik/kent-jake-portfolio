const skills = [
  {
    name: "Laravel SPA",
    level: "Comfortable",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.05.19-.14.24l-3.6 2.08v4.11c0 .1-.06.19-.14.24l-7.54 4.36c-.02.01-.04.02-.07.03h-.05c-.03.01-.05.01-.08 0h-.04a.2.2 0 01-.07-.03L2.44 17.57a.28.28 0 01-.14-.24V6.61c0-.03 0-.06.01-.08l.01-.04c.01-.02.02-.04.03-.06l.02-.03a.3.3 0 01.05-.05l.03-.02.06-.04 3.74-2.16a.28.28 0 01.28 0l3.74 2.16.06.04.04.02c.01.02.03.03.04.05l.03.03c.01.02.02.04.03.06l.01.04c.01.03.01.05.01.08v8.03l3.13-1.8V8.69c0-.03 0-.06.01-.08v-.04c.01-.02.02-.04.03-.06l.03-.03c.01-.02.03-.03.04-.05l.04-.02.06-.04 3.74-2.16a.28.28 0 01.28 0l3.74 2.16.06.04.03.02c.02.02.03.03.05.05l.02.03c.01.02.02.04.03.06l.01.04zM21.16 10.7V7.08l-1.32.76-1.82 1.05v3.63l3.14-1.81zm-3.74 6.39V13.5l-1.78 1.03-5.09 2.93v3.67l6.88-3.97v-.06zM3.14 7.08v10.25l6.87 3.97v-3.67l-3.6-2.03-.01-.01-.01-.01a.55.55 0 01-.04-.02l-.02-.03a.18.18 0 01-.03-.04l-.02-.04-.02-.04v-.05l-.01-.05V8.89l-1.8-1.05L3.14 7.08zm3.74-2.16l-3.14 1.8 3.13 1.81 3.14-1.81-3.13-1.8zm1.6 11.53l1.8-1.04V7.08l-1.31.76-1.82 1.05v8.33l1.32-.76zm8.14-9.53l-3.14 1.81 3.14 1.81 3.13-1.81-3.13-1.8zm-.28 4.16l-1.82-1.05-1.31-.76v3.63l1.81 1.04 1.32.77V11.08z" /></svg>
    ),
    tools: ["PHP", "Blade", "Eloquent ORM", "REST APIs"],
  },
  {
    name: "React / Web Dev",
    level: "Comfortable",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1.03-.95-1.5-.65-.04-1.33-.07-2-.07h-.68l-1.31.06c-.33.47-.65.97-.95 1.5L8.73 12l.81 1.5c.3.53.62 1.03.95 1.5.65.04 1.33.07 2 .07h.68c.44-.01.88-.03 1.32-.06l.95-1.5zM12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" /></svg>
    ),
    tools: ["JavaScript", "React", "Vite", "Tailwind CSS"],
  },
  {
    name: "Flutter Mobile",
    level: "Comfortable",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" /></svg>
    ),
    tools: ["Dart", "Widgets", "State Management", "APIs"],
  },
  {
    name: "IoT & Sensors",
    level: "Familiar",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
    ),
    tools: ["ESP32", "Arduino", "TFLite", "Sensor Integration"],
  },
  {
    name: "DevOps & Tools",
    level: "Exploring",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    ),
    tools: ["Docker", "Git", "MySQL", "Linux"],
  },
];

const levelColors = {
  "Comfortable": "text-emerald-400 bg-emerald-900/30 border-emerald-500/30",
  "Familiar": "text-amber-400 bg-amber-900/30 border-amber-500/30",
  "Exploring": "text-sky-400 bg-sky-900/30 border-sky-500/30",
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-slate-900 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Behind the <span className="text-cyan-400">Code</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: The Story */}
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a 4th Year BSIT student whose passion lies in building
              functional, impactful digital experiences. Currently, I'm honing
              my skills as an intern at{" "}
              <strong className="text-white">Leyte Normal University</strong>.
            </p>
            <p>
              My journey isn't just about writing code; it's about solving
              real-world problems. Whether I'm building a seamless admin
              dashboard with Laravel, crafting cross-platform mobile apps with
              Flutter, or tinkering with IoT sensors for a Capstone project, I
              thrive on the challenge.
            </p>
            <p>
              When I'm not debugging or optimizing algorithms, you'll probably
              find me exploring the latest tech stacks or figuring out how to
              make UIs feel just a bit more "alive".
            </p>
          </div>

          {/* Right Column: Skills */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Tech Arsenal
            </h3>

            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-cyan-400">{skill.icon}</span>
                    <span className="text-slate-200 font-medium flex-1">
                      {skill.name}
                    </span>
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${levelColors[skill.level]}`}>
                      {skill.level}
                    </span>
                  </div>
                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-1.5 pl-8">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 text-xs text-slate-400 bg-slate-700/50 rounded-md border border-slate-600/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
