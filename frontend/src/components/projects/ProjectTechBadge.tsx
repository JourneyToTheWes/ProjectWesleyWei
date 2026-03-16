type ProjectTechBadgeProps = {
    tech: string;
};
const ProjectTechBadge: React.FC<ProjectTechBadgeProps> = ({ tech }) => {
    return (
        <span className="px-3 py-1 text-xs rounded bg-secondary">{tech}</span>
    );
};

export default ProjectTechBadge;
