import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../lib/api";

export const useProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        staleTime: Infinity,
    });
};
