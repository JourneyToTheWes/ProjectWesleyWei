import { useState, useEffect } from "react";
import { fetchAbout } from "../lib/api";
import type { About } from "../types/about";

export const useAbout = () => {
    const [about, setAbout] = useState<About | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAbout()
            .then(setAbout)
            .finally(() => setLoading(false));
    }, []);

    return { about, loading };
};
