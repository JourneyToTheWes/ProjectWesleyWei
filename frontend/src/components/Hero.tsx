import { motion } from "framer-motion";
import Button from "./ui/Button";
import Compass from "./ui/Compass";
import InteractiveHover from "./ui/InteractiveHover";
import Ocean from "./ui/Ocean";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center py-24 bg-gradient-to-b from-background to-surface">
            <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center">
                <div className="flex-1">
                    <motion.p
                        className="text-accent mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hi, I'm
                    </motion.p>

                    <motion.div
                        className="mb-6 flex flex-col lg:flex-row lg:items-baseline lg:gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-6xl font-bold tracking-tight lg:inline-block">
                            Wesley Wei
                        </h1>
                        <span className="text-xs lg:text-sm">
                            (aka West Way)
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-2xl text-muted mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Full-Stack Software Engineer
                    </motion.h2>

                    <motion.p
                        className="text-lg max-w-xl mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        I build high-performance web applications, interactive
                        developer tools, and modern browser-based platforms.
                    </motion.p>

                    <motion.p
                        className="text-sm text-muted mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        My site is called <strong>West Way</strong>—a nod to my
                        name and my compass always pointing west—charting my own
                        course in software.
                    </motion.p>

                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Button href="#projects" variant="primary">
                            View Projects
                        </Button>

                        <Button
                            href="https://github.com/JourneyToTheWes"
                            variant="outline"
                            external
                        >
                            GitHub
                        </Button>
                    </motion.div>

                    <motion.p
                        className="text-sm text-muted mt-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        React • TypeScript • Rust • WebAssembly • Vite
                    </motion.p>
                </div>

                <div className="relative lg:ml-10 mt-10 lg:mt-0 flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Ocean width={250} height={250} color={"primary"} />
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <InteractiveHover size={225}>
                            <Compass
                                size={225}
                                faceColor="none"
                                borderColor="content"
                                needleColor="content"
                                needleOutlineColor="content"
                                centerPinColor="primary"
                                tickColor="content"
                                majorTickColor="content"
                                labelColor="content"
                            />
                        </InteractiveHover>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
