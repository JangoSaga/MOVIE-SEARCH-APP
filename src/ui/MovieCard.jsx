/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import styled from "styled-components";

/* Card container */
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #212529;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease;

  ${StyledCard}:hover & {
    transform: scale(1);
  }
`;

/* Movie title styles */
const Title = styled.h3`
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
`;

function MovieCard({ movie }) {
  const navigate = useNavigate();

  function handleMovieClick() {
    // Navigate to the movie detail page with the movieId
    navigate(`/movies/${movie.imdbID}`);
  }

  return (
    <StyledCard onClick={handleMovieClick}>
      <Poster src={movie.Poster} alt={"No images"} />
      <Title>{movie.Title}</Title>
    </StyledCard>
  );
}

export default MovieCard;
