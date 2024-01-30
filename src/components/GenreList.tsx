import { Button, HStack, Heading, Highlight, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background)} objectFit="cover" boxSize="32px" borderRadius={8} />

              <Button whiteSpace="normal" textAlign="left" variant="link" fontSize="lg" onClick={() => onSelectedGenre(genre)}>
                <Highlight
                  query={selectedGenre?.id === genre.id ? genre.name : ""}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "gray.400",
                    fontWeight: "bold",
                    whiteSpace: "normal",
                    textAlign: "center",
                  }}
                >
                  {genre.name}
                </Highlight>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
