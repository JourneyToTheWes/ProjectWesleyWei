import type { Project } from "../../types/project";
import ProjectItem from "./ProjectItem";

type ProjectTimelineProps = {
    projectsByYear: Record<number, Project[]>;
};

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
    projectsByYear,
}) => {
    return (
        <div className="relative max-w-3xl mx-auto">
            {/* vertical timeline line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-border"></div>

            {Object.entries(projectsByYear)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, projects]) => (
                    <div key={year} className="mb-10">
                        <h3 className="mb-4 text-sm font-semibold text-muted ml-10">
                            {year}
                        </h3>

                        <div className="space-y-6">
                            {projects.map((project) => (
                                <ProjectItem
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProjectTimeline;
