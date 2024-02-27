import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import APIClinet from "../services/api-client";
import ScreenShot from "../entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClinet<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
  });
};

export default useScreenShots;
