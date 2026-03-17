import type { About } from "../types/about";
import type { Project } from "../types/project";

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
