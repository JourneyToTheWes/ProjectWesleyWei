import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectItemProps = {
    project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="relative flex items-start gap-4">
            {/* timeline dot */}
            <div className="absolute left-4 top-2 h-3 w-3 rounded-full bg-primary border-2 border-background -translate-x-1/2" />

            <Link
                to={`/projects/${project.id}`}
                className="ml-10 block p-4 rounded-lg bg-card border hover:border-primary hover:shadow-sm transition"
            >
                <h4 className="font-semibold text-content">{project.title}</h4>

                <p className="text-sm text-muted">{project.date}</p>
            </Link>
        </div>
    );
};

export default ProjectItem;
