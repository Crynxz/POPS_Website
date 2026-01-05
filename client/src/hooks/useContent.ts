import { useQuery } from "@tanstack/react-query";
import type { CmsContent } from "../../../shared/schema";

export function useContent(slug: string, fallback?: string) {
  const { data, isLoading, error } = useQuery<CmsContent>({
    queryKey: ["cms", slug],
    queryFn: async () => {
      const res = await fetch(`/api/cms/${slug}`);
      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error("Failed to fetch content");
      }
      return res.json();
    },
  });

  const value = data?.value ?? fallback ?? "";
  
  return {
    content: data,
    value,
    isLoading,
    error
  };
}
