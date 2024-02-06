import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import apiClient from "../services/api-client";
import { FetchRes } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchRes<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
