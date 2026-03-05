export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Gradients for modern aesthetic */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-900/30 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                            Aspiring Web & Mobile Developer
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            <span className="block text-white">Hi, I'm</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mt-2">
                                A 4th Year BSIT Student
                            </span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Currently an intern at <span className="text-white font-semibold border-b-2 border-cyan-500">Leyte Normal University</span>.
                            I have experience bringing ideas to life—from simple educational games to IoT, Flutter mobile dev, and modern web applications.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <a
                                href="#projects"
                                className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transform hover:-translate-y-1"
                            >
                                View My Capstone
                            </a>
                            <a
                                href="https://www.facebook.com/kent.jake.sanico"
                                className="inline-block px-8 py-4 bg-transparent text-white border border-slate-500 rounded-full font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end relative">
                        {/* Decorative elements behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="absolute inset-4 border-2 border-slate-700 rounded-full animate-[spin_10s_linear_infinite]"></div>

                        {/* Image Container */}
                        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-2xl flex items-center justify-center">
                            {/* Replace '/images/profile.jpg' with your actual image path */}
                            <img
                                src="/images/IDPIC.png"
                                alt="Kent's Profile"
                                className="w-full h-full object-cover relative z-10"
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Hide broken image icon if no picture is added yet
                                    e.target.nextSibling.style.display = 'flex'; // Show placeholder
                                }}
                            />
                            {/* Placeholder text (shown only if image fails to load) */}
                            <div style={{ display: 'none' }} className="absolute inset-0 flex-col items-center justify-center text-slate-500 bg-slate-800/50 p-6 text-center">
                                <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <p className="text-sm font-medium">Add profile.jpg to</p>
                                <p className="text-xs">public/images/</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
