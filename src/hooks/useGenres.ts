import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import apiClient from "../services/api-client";
import { FetchRes } from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchRes<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });
};
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
