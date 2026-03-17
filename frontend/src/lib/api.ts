import type { About } from "../types/about";
import type { Project } from "../types/project";
import type { SiteConfig } from "../types/siteConfig";
import type { WorkExperience } from "../types/workExperience";

export const fetchAbout = async (): Promise<About> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/about`);
    if (!res.ok) throw new Error("Failed to fetch About");
    return res.json();
};

export const fetchProjects = async (): Promise<Project[]> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
    if (!res.ok) throw new Error("Failed to fetch Projects");
    return res.json();
};

export const fetchWorkExperience = async (): Promise<WorkExperience[]> => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/work-experience`,
    );
    if (!res.ok) throw new Error("Failed to fetch Work Experience");
    return res.json();
};

export const fetchSiteConfig = async (): Promise<SiteConfig> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/site-config`);
    if (!res.ok) throw new Error("Failed to fetch Site Config");
    return res.json();
};
