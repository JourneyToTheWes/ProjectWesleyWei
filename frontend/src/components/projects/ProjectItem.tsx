import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

type ProjectItemProps = {
    project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="relative flex items-start gap-4">
            {/* timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute left-4 top-2 h-3 w-3 rounded-full bg-primary border-2 border-background -translate-x-1/2"
            />

            <Link
                to={`/projects/${project.id}`}
                className="ml-10 block p-4 rounded-lg bg-card border hover:border-primary hover:shadow-sm transition"
            >
                <h4 className="font-semibold text-content">{project.title}</h4>

                <p className="text-sm text-muted">{project.date}</p>
                {/* Mobile view Project Item expansion */}
                <div className="lg:hidden mt-3 space-y-3">
                    <div className="mb-4 rounded-lg overflow-hidden border border-border aspect-video bg-secondary flex items-center justify-center">
                        {project.image && project.image.length > 0 ? (
                            <img
                                src={project.image}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-4xl font-bold text-muted">
                                {project.title[0]}
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-muted">{project.summary}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2 py-1 bg-secondary rounded"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <Button
                            variant="primary"
                            to={`/projects/${project.id}`}
                            className="text-sm"
                        >
                            View Project
                            <ArrowRight className="w-4 h-4" />
                        </Button>

                        {project.links && project.links.demo && (
                            <Button
                                variant="outline"
                                href={project.links.demo}
                                external
                                className="text-sm"
                            >
                                Live Demo
                            </Button>
                        )}

                        {project.links && project.links.github && (
                            <Button
                                variant="outline"
                                href={project.links.github}
                                external
                                className="text-sm"
                            >
                                GitHub
                            </Button>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectItem;
