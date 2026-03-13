import { Instagram, Youtube } from "lucide-react";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import {
    getContainerVariants,
    getContainerChildVariants,
} from "../utils/framerAnimation";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-surface">
            <motion.div
                className="max-w-5xl mx-auto px-6 text-center"
                variants={getContainerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h2
                    className="text-3xl font-bold mb-6 text-content"
                    variants={getContainerChildVariants()}
                >
                    Contact
                </motion.h2>

                <motion.p
                    className="text-lg text-muted max-w-xl mx-auto mb-12"
                    variants={getContainerChildVariants()}
                >
                    Interested in working together or just want to say hi? Feel
                    free to reach out.
                </motion.p>

                <div className="flex justify-center gap-6 flex-wrap mb-8">
                    {/* Primary CTA buttons */}
                    <motion.div variants={getContainerChildVariants()}>
                        <Button
                            href="mailto:wesley631w@email.com"
                            variant="primary"
                        >
                            Email
                        </Button>
                    </motion.div>
                    <motion.div variants={getContainerChildVariants()}>
                        <Button
                            href="https://linkedin.com/in/wes-wei"
                            variant="primary"
                            external
                        >
                            LinkedIn
                        </Button>
                    </motion.div>
                    <motion.div variants={getContainerChildVariants()}>
                        <Button
                            href="https://github.com/JourneyToTheWes"
                            variant="primary"
                            external
                        >
                            GitHub
                        </Button>
                    </motion.div>
                </div>

                {/* Secondary circular social links */}
                <div className="flex justify-center gap-4 flex-wrap">
                    <motion.div variants={getContainerChildVariants()}>
                        <Button
                            href="https://www.youtube.com/channel/UCHSsr_f2vnk1p5YlCfj82lg"
                            variant="outline"
                            size="icon"
                            external
                        >
                            <Youtube />
                        </Button>
                    </motion.div>
                    <motion.div variants={getContainerChildVariants()}>
                        <Button
                            href="https://www.instagram.com/journeytothewes/"
                            variant="outline"
                            size="icon"
                            external
                        >
                            <Instagram />
                        </Button>
                    </motion.div>
                </div>

                <motion.p
                    className="text-xs text-muted mt-16"
                    variants={getContainerChildVariants()}
                >
                    © {new Date().getFullYear()} Wesley Wei — Built with React &
                    TypeScript
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Contact;
