import { motion } from "framer-motion";
import {
    getContainerVariants,
    getContainerChildVariants,
} from "../utils/framerAnimation";

const About = () => {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-content">About</h2>
                    <p className="text-sm text-muted">
                        A little more about what I enjoy building
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        className="aspect-square bg-card border rounded-xl flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Portrait
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={getContainerVariants(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.p variants={getContainerChildVariants()}>
                            I'm a software engineer who enjoys building systems
                            at the intersection of performance, usability, and
                            creativity. I approach my work like navigating with
                            a compass—finding a clear direction and purpose in
                            every project I take on. That’s the philosophy
                            behind <strong>West Way</strong>: charting my own
                            path while delivering meaningful, well-crafted
                            software.
                        </motion.p>

                        <motion.p
                            className="text-muted"
                            variants={getContainerChildVariants()}
                        >
                            I’m currently exploring the limits of web
                            performance by building a custom spreadsheet engine
                            from the ground up using Rust and WebAssembly. This
                            project serves as the foundation for Milkbread,
                            where I’m integrating AI-assisted tooling to help
                            users generate sophisticated financial models
                            seamlessly. My work on Milkbread reflects a broader
                            interest in the rapid advancements of AI; I’m
                            focused on utilizing its specialized expertise to
                            build software that isn't just automated, but
                            genuinely helpful and intuitive for complex tasks.
                        </motion.p>

                        <motion.div variants={getContainerChildVariants()}>
                            <h3 className="font-semibold mb-2">Focus Areas</h3>
                            <ul className="list-disc list-inside text-muted">
                                <li>Interactive web applications</li>
                                <li>Developer tooling</li>
                                <li>Performance-driven systems</li>
                                <li>Creative technical projects</li>
                            </ul>
                        </motion.div>

                        <motion.p
                            className="text-sm text-muted"
                            variants={getContainerChildVariants()}
                        >
                            Outside of engineering I enjoy cooking, bowling,
                            fitness, and experimenting with creative technical
                            projects.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
