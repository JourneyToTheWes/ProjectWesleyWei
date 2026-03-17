import { fetchAbout } from "../lib/api";
import { useQuery } from "@tanstack/react-query";

export const useAbout = () => {
    return useQuery({
        queryKey: ["about"],
        queryFn: fetchAbout,
        staleTime: Infinity,
    });
};
