import platforms from "../data/platforms";
import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => ({ data: platforms, error: null });

export default usePlatforms;
