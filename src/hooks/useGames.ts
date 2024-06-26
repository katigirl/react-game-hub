import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClinet from "../services/api-client";
import useGameQueryStore from "../store/store";
import Game from "../entities/Game";

const apiClient = new APIClinet<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    staleTime: ms("1d"),
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
