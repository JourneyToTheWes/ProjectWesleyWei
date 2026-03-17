import { useQuery } from "@tanstack/react-query";
import { fetchSiteConfig } from "../lib/api";

export const useSiteConfig = () => {
    return useQuery({
        queryKey: ["site-config"],
        queryFn: fetchSiteConfig,
        staleTime: Infinity,
    });
};
