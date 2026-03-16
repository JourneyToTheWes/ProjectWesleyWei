import type {
    ArchitectureSection,
    FeatureListSection,
    GallerySection,
    Metric,
    MetricSection,
    ProjectSection,
    TextSection,
} from "../../types/project";

const getSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
};

const TextSection: React.FC<TextSection> = ({ title, content }) => {
    return (
        <section id={getSlug(title)}>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            <p className="text-muted leading-relaxed">{content}</p>
        </section>
    );
};

const ArchitectureSection: React.FC<ArchitectureSection> = ({
    title,
    diagram,
    points,
}) => {
    return (
        <section id={getSlug(title)}>
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>

            <img src={diagram} className="rounded-lg border mb-6" />

            <ul className="space-y-3">
                {points.map((point) => (
                    <li key={point} className="text-muted">
                        • {point}
                    </li>
                ))}
            </ul>
        </section>
    );
};

const FeatureListSection: React.FC<FeatureListSection> = ({
    title,
    features,
}) => {
    return (
        <section id={getSlug(title)}>
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>

            <ul className="space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="text-muted">
                        • {feature}
                    </li>
                ))}
            </ul>
        </section>
    );
};

const MetricCard: React.FC<Metric> = ({ label, value }) => {
    return (
        <div className="border rounded-lg p-4 bg-card">
            <div className="text-2xl font-bold">{value}</div>

            <div className="text-sm text-muted">{label}</div>
        </div>
    );
};

const MetricsSection: React.FC<MetricSection> = ({ title, metrics }) => {
    return (
        <section id={getSlug(title)}>
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>

            <div className="grid grid-cols-3 gap-6">
                {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                ))}
            </div>
        </section>
    );
};

const GallerySection: React.FC<GallerySection> = ({ title, images }) => {
    return (
        <section id={getSlug(title)}>
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>

            <div className="grid grid-cols-2 gap-6">
                {images.map((img) => (
                    <img key={img} src={img} className="rounded-lg border" />
                ))}
            </div>
        </section>
    );
};

type ProjectSectionRendererProps = {
    sections: ProjectSection[];
};

const ProjectSectionRenderer: React.FC<ProjectSectionRendererProps> = ({
    sections,
}) => {
    return sections.map((section) => {
        switch (section.type) {
            case "text":
                return <TextSection key={section.title} {...section} />;

            case "architecture":
                return <ArchitectureSection key={section.title} {...section} />;

            case "feature-list":
                return <FeatureListSection key={section.title} {...section} />;

            case "metrics":
                return <MetricsSection key={section.title} {...section} />;

            case "gallery":
                return <GallerySection key={section.title} {...section} />;

            default:
                return null;
        }
    });
};

export default ProjectSectionRenderer;
