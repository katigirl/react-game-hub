import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import APIClient from "../services/api-client";
import ms from "ms";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: genres,
  });

export default useGenres;
