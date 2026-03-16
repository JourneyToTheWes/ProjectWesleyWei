import type { Project } from "../../types/project";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

interface ProjectPreviewProps {
    activeProject: Project;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ activeProject }) => {
    return (
        <>
            {activeProject && (
                <div className="sticky top-24 p-6 border rounded-lg bg-card">
                    <div className="mb-4 rounded-lg overflow-hidden border border-border aspect-video bg-secondary flex items-center justify-center">
                        {activeProject.previewImage &&
                        activeProject.previewImage.length > 0 ? (
                            <img
                                src={activeProject.previewImage}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-4xl font-bold text-muted">
                                {activeProject.title[0]}
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-semibold">
                        {activeProject.title}
                    </h3>

                    <p className="text-muted mt-2">{activeProject.summary}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                        {activeProject.tech.map((t) => (
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
                            size="sm"
                            to={`/projects/${activeProject.slug}`}
                        >
                            View Project
                            <ArrowRight className="w-4 h-4" />
                        </Button>

                        {activeProject.links && activeProject.links.demo && (
                            <Button
                                variant="outline"
                                size="sm"
                                href={activeProject.links.demo}
                                external
                            >
                                Live Demo
                            </Button>
                        )}

                        {activeProject.links && activeProject.links.github && (
                            <Button
                                variant="outline"
                                size="sm"
                                href={activeProject.links.github}
                                external
                            >
                                GitHub
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectPreview;
