import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const gameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={Image.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default gameScreenshots;
