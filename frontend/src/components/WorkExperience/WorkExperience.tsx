import { motion } from "framer-motion";
import type { WorkExperience } from "../../types/workExperience";
import WorkExperienceItem from "./WorkExperienceItem";
import { useWorkExperience } from "../../hooks/useWorkExperience";

const WorkExperience: React.FC = () => {
    const { data: workExperience } = useWorkExperience();

    const groupedWork = workExperience?.reduce<
        Record<number, WorkExperience[]>
    >((acc, job) => {
        const startYear = new Date(job.startDate).getFullYear();
        if (!acc[startYear]) acc[startYear] = [];
        acc[startYear].push(job);
        return acc;
    }, {});

    return (
        <section id="work-experience" className="py-24 bg-surface">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    className="mb-12 flex flex-col gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-content">
                        Work Experience
                    </h2>
                    <p className="text-sm text-muted">
                        Some highlights of my professional experience
                    </p>
                </motion.div>

                {/* Timeline */}
                {workExperience && groupedWork && (
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical timeline line */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute left-4 top-0 w-[2px] bg-border -translate-x-1/2"
                        />

                        {Object.entries(groupedWork)
                            .sort(([a], [b]) => Number(b) - Number(a))
                            .map(([year, jobs]) => (
                                <div key={year} className="mb-10">
                                    <motion.h3
                                        className="mb-4 text-sm font-semibold text-muted ml-10"
                                        initial={{ opacity: 0, y: -50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {year}
                                    </motion.h3>

                                    {/* Jobs */}
                                    <div className="space-y-6">
                                        {jobs.map((job) => (
                                            <motion.div
                                                key={job.company + job.role}
                                                initial={{ opacity: 0, y: -50 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.8,
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <WorkExperienceItem job={job} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* Download Resume Button */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <a
                        href="https://yourcdn.com/resume.pdf" // replace with hosted resume
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkExperience;
