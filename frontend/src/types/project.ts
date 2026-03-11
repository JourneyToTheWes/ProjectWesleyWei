export type Project = {
    id: string;
    title: string;
    date: string;
    year: number;

    summary: string;
    tech: string[];

    image: string;

    links?: {
        github?: string;
        demo?: string;
    };
};
