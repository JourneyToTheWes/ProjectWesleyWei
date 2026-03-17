import { motion } from "framer-motion";
import {
    getContainerVariants,
    getContainerChildVariants,
} from "../utils/framerAnimation";
import { useAbout } from "../hooks/useAbout";

const About = () => {
    const { data: about } = useAbout();

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

                {about && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            className="aspect-square bg-card border rounded-xl flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src={about.portraitImage?.url}
                                alt={about.portraitImage?.alt}
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            variants={getContainerVariants(0.3)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.p variants={getContainerChildVariants()}>
                                {about.intro} {about.philosophy.description}
                            </motion.p>

                            <motion.p
                                className="text-muted"
                                variants={getContainerChildVariants()}
                            >
                                {about.currentWork.description}
                            </motion.p>

                            <motion.div variants={getContainerChildVariants()}>
                                <h3 className="font-semibold mb-2">
                                    Focus Areas
                                </h3>
                                <ul className="list-disc list-inside text-muted">
                                    {about.focusAreas.map((focus) => (
                                        <li>{focus}</li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.p
                                className="text-sm text-muted"
                                variants={getContainerChildVariants()}
                            >
                                Outside of engineering I enjoy{" "}
                                {about.interests.reduce(
                                    (prev, current, index) => {
                                        return index ===
                                            about.interests.length - 1
                                            ? prev +
                                                  `and ${current.toLowerCase()}.`
                                            : prev +
                                                  `${current.toLowerCase()}, `;
                                    },
                                    "",
                                )}
                            </motion.p>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
