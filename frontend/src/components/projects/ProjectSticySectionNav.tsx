import type { ProjectSection } from "../../types/project";

type ProjectStickySectionNavProps = {
    sections: ProjectSection[];
};

const ProjectStickySectionNav: React.FC<ProjectStickySectionNavProps> = ({
    sections,
}) => {
    const getSlug = (text: string) => {
        return text.toLowerCase().replace(/\s+/g, "-");
    };

    return (
        <div className="sticky top-28 h-fit">
            <ul className="space-y-3 text-sm">
                {sections.map((section) => (
                    <li key={getSlug(section.title)}>
                        <a
                            href={`#${getSlug(section.title)}`}
                            className="text-muted hover:text-content"
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectStickySectionNav;
