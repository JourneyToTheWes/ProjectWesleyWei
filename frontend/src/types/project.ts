export type ProjectLink = {
    github?: string;
    demo?: string;
};

export type ProjectSection =
    | TextSection
    | ArchitectureSection
    | FeatureListSection
    | MetricSection
    | GallerySection;

export type TextSection = {
    type: "text";
    title: string;
    content: string;
};

export type ArchitectureSection = {
    type: "architecture";
    title: string;
    diagram: string;
    points: string[];
};

export type FeatureListSection = {
    type: "feature-list";
    title: string;
    features: string[];
};

export type Metric = {
    label: string;
    value: string;
};

export type MetricSection = {
    type: "metrics";
    title: string;
    metrics: Metric[];
};

export type GallerySection = {
    type: "gallery";
    title: string;
    images: string[];
};

export type Project = {
    slug: string;
    title: string;

    timeline: {
        start: string;
        display: string;
    };

    year: number;

    summary: string;
    tech: string[];

    previewImage: string;

    links?: ProjectLink;

    sections: ProjectSection[];
};
