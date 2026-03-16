import { useState } from "react";
import ProjectPreview from "./ProjectPreview";
import ProjectTimeline from "./ProjectTimeline";
import type { Project } from "../../types/project";
import { motion } from "framer-motion";
import { projects } from "./dummyData";

const groupedProjects = projects.reduce<Record<number, typeof projects>>(
    (acc, project) => {
        if (!acc[project.year]) {
            acc[project.year] = [];
        }

        acc[project.year].push(project);
        return acc;
    },
    {},
);
const Projects = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(
        projects[0],
    );

    return (
        <section id="projects" className="py-24 bg-surface">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    className="mb-12 flex flex-col gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-content">
                        Featured Projects
                    </h2>
                    <p className="text-sm text-muted">
                        Hover over a project to preview
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ProjectTimeline
                        projectsByYear={groupedProjects}
                        onProjectHover={(project) => setActiveProject(project)}
                    />
                    <div className="hidden lg:block sticky top-24 self-start">
                        {activeProject && (
                            <motion.div
                                key={activeProject.slug}
                                initial={{ opacity: 0, y: -8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ amount: 0.5 }}
                            >
                                <ProjectPreview activeProject={activeProject} />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
