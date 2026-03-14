export type About = {
    id: string;
    portraitImage: {
        url: string;
        alt: string;
    };
    intro: string;
    philosophy: {
        title: string;
        description: string;
    };
    currentWork: {
        project: string;
        description: string;
    };
    focusAreas: string[];
    interests: string[];
};
