import type { Metric } from "../../types/project";

const ProjectMetricCard: React.FC<Metric> = ({ label, value }) => {
    return (
        <div className="border rounded-lg p-4 bg-card">
            <div className="text-2xl font-bold">{value}</div>

            <div className="text-sm text-muted">{label}</div>
        </div>
    );
};

export default ProjectMetricCard;
