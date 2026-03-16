import type { Project } from "../../types/project";
import Button from "../ui/Button";
import ProjectTechBadge from "./ProjectTechBadge";

type ProjectHeroProps = {
    project: Project;
};

const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
    return (
        <div className="space-y-6">
            <img src={project.previewImage} className="rounded-xl border" />

            <div>
                <h1 className="text-4xl font-bold">{project.title}</h1>

                <p className="text-muted mt-2">{project.timeline.display}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <ProjectTechBadge key={tech} tech={tech} />
                ))}
            </div>

            <div className="flex gap-3">
                {project.links?.demo && (
                    <Button
                        variant="primary"
                        href={project.links.demo}
                        size="sm"
                    >
                        Live Demo
                    </Button>
                )}

                {project.links?.github && (
                    <Button
                        variant="outline"
                        href={project.links.github}
                        size="sm"
                    >
                        GitHub
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProjectHero;
