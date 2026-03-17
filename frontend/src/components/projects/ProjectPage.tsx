import { useProjects } from "../../hooks/useProjects";
import ProjectHero from "./ProjectHero";
import ProjectSectionRenderer from "./ProjectSectionRenderer";
import ProjectStickySectionNav from "./ProjectSticySectionNav";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
    const { slug } = useParams();
    const { data: projects } = useProjects();
    const project = projects?.find((p) => p.slug === slug);

    if (!project) {
        return <div className="py-40 text-center">Project not found</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-24">
            {project && projects && (
                <>
                    <ProjectHero project={project} />

                    <div className="grid lg:grid-cols-[220px_1fr] gap-16 mt-16">
                        <div className="hidden lg:block">
                            <ProjectStickySectionNav
                                sections={project.sections}
                            />
                        </div>

                        <div className="space-y-24">
                            <ProjectSectionRenderer
                                sections={project.sections}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
