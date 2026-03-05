export default function Contact() {
    return (
        <footer
            id="contact"
            className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden"
        >
            {/* Background glow effect for footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-48 bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's Build Something <span className="text-cyan-400">Great</span>.
                </h2>

                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                    Whether you need a sleek Laravel SPA, a cross-platform Flutter app, or
                    just want to chat about tech and IoT, my inbox is always open.
                </p>

                {/* Contact Button */}
                <a
                    href="https://www.facebook.com/kent.jake.sanico"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 mb-16"
                >
                    Say Hello
                </a>

                {/* Social Links & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 mt-8">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Designed & Built by Kent Jake Sanico, a 4th Year BSIT Student.
                    </p>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/kinjik"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kent-jake-sanico-66b2a2393/"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
