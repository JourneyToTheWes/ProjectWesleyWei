export type WorkExperienceType = {
    company: string; // e.g., "Nintex"
    role: string; // e.g., "Software Engineer"
    startDate: string; // e.g., "Jan 2021"
    endDate: string; // e.g., "Dec 2022" or "Present"
    experiences: string[]; // bullet points of responsibilities / achievements
    tech?: string[]; // optional array of tech/tools used
    image?: string; // optional company/project logo for preview
};
