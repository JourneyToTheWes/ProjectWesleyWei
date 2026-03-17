import { useQuery } from "@tanstack/react-query";
import { fetchWorkExperience } from "../lib/api";

export const useWorkExperience = () => {
    return useQuery({
        queryKey: ["work-experience"],
        queryFn: fetchWorkExperience,
        staleTime: Infinity,
    });
};
