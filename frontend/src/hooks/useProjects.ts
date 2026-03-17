import { useState, useEffect } from "react";
import { fetchProjects } from "../lib/api";
import type { Project } from "../types/project";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects()
            .then(setProjects)
            .finally(() => setLoading(false));
    }, []);

    return { projects, loading };
};
