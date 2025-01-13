import styled from "styled-components";
import Box from "../ui/Box";
import { useMovies } from "../hooks/MovieProvider";
import MovieCard from "../ui/MovieCard";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
const StyledMovies = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 2rem)
  ); /* Responsive grid */
  gap: 1rem; /* Adjust gap between items */
`;

function Home() {
  const { movies, isLoading, query } = useMovies();
  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : query.length > 3 && movies.length ? (
        <StyledMovies>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </StyledMovies>
      ) : (
        <Error />
      )}
    </Box>
  );
}

export default Home;
