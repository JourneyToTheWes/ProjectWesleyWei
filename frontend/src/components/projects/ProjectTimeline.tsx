import { motion } from "framer-motion";
import type { Project } from "../../types/project";
import ProjectItem from "./ProjectItem";

type ProjectTimelineProps = {
    projectsByYear: Record<number, Project[]>;
    onProjectHover: (project: Project) => void;
};

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
    projectsByYear,
    onProjectHover,
}) => {
    return (
        <div className="relative max-w-3xl mx-auto">
            {/* vertical timeline line */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-4 top-0 h-full w-[2px] bg-border -translate-x-1/2"
            />

            {Object.entries(projectsByYear)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, projects]) => (
                    <div key={year} className="mb-10">
                        <h3 className="mb-4 text-sm font-semibold text-muted ml-10">
                            {year}
                        </h3>

                        <div className="space-y-6">
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: -100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ duration: 0.5 }}
                                    onMouseEnter={() => onProjectHover(project)}
                                >
                                    <ProjectItem project={project} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProjectTimeline;
