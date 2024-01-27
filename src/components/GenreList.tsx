import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();
  console.log(genres);

  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
