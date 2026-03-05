const skills = [
  { name: "Laravel SPA", level: "85%" },
  { name: "React / Web Dev", level: "85%" },
  { name: "Flutter Mobile", level: "80%" },
  { name: "IoT & Sensors", level: "75%" },
  { name: "Docker", level: "60%" },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 text-sm">{skill.level}</span>
                  </div>
                  {/* Progress Bar Background */}
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    {/* Progress Bar Fill */}
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2.5 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
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
