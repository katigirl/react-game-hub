import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClinet from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClinet<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGames;
