import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClinet from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";
const apiClient = new APIClinet<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: platforms,
  });

export default usePlatforms;
