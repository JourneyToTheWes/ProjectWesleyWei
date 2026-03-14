export const fetchAbout = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/about`);
    if (!res.ok) throw new Error("Failed to fetch About");
    return res.json();
};
