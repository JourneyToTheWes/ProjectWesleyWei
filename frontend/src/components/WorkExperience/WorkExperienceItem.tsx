import { motion } from "framer-motion";
import type { WorkExperienceType } from "../../types/workExperience";

type Props = { job: WorkExperienceType };

const WorkExperienceItem: React.FC<Props> = ({ job }) => (
    <div className="relative flex items-start gap-4">
        {/* Dot */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute left-4 top-2 h-3 w-3 rounded-full bg-primary border-2 border-background -translate-x-1/2"
        />

        <div className="ml-10 p-4 rounded-lg bg-card border hover:border-primary hover:shadow-sm transition">
            <h4 className="font-semibold text-content">{job.role}</h4>
            <p className="text-sm text-muted">{job.company}</p>
            <p className="text-sm text-muted">
                {job.startDate} - {job.endDate}
            </p>

            <ul className="mt-2 list-disc list-inside space-y-1 text-content">
                {job.experiences.map((exp, i) => (
                    <li key={i}>{exp}</li>
                ))}
            </ul>

            {job.tech && job.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {job.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-1 bg-secondary rounded"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default WorkExperienceItem;
