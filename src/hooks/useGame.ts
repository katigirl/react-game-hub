import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClinet from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClinet<Game>("/games");
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("1d"),
  });
};

export default useGame;
