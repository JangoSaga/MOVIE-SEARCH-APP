import { useParams } from "react-router";
import Box from "../ui/Box";
import { useMovieDetails } from "../hooks/MovieDetailsProvider";
import { useEffect, useState } from "react";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import styled from "styled-components";
import { useMovies } from "../hooks/MovieProvider";
const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledPoster = styled.img`
  min-width: 25rem;
  object-fit: contain;
  padding: 0.7rem;
  background-color: #212529;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #212529;
  border-radius: 1rem;
  border: 1px solid white;
  flex-grow: 1;
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.4rem;
  background-color: ${(props) =>
    props.colorType === "green" ? "#2ecc71" : "red"};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
function MovieDetails() {
  const { movieID } = useParams(); // Read movieID from URL
  const { movieDetails, setMovieID, isDetailsLoading, isDetailsError } =
    useMovieDetails();
  const { watchedList, setWatchedList } = useMovies();
  const [details, setDetails] = useState({});
  useEffect(() => {
    setMovieID(movieID);
  }, [movieID, setMovieID]);

  useEffect(() => {
    setDetails(movieDetails);
  }, [movieDetails]);
  const isAdded = watchedList.length && watchedList?.includes(movieID);
  if (isDetailsError) return <Error messge={isDetailsError} />;
  if (isDetailsLoading) return <Loading />;
  function saveMovies() {
    if (!movieID) return;
    if (isAdded) {
      alert("You have already added this movie!");
      return;
    }
    setWatchedList((prevList) => {
      const updatedList = [...prevList, movieID];
      console.log(updatedList); // Log the updated list
      return updatedList;
    });
    alert("Added successfully");
  }
  return (
    <Box>
      <StyledMovieDetails>
        <StyledPoster src={details.Poster} alt="No Poster Found" />
        <StyledContent>
          <h2 style={{ textAlign: "center" }}>{details.Title}</h2>
          <i>{details.Plot}</i>
          <div>
            <p> Released at: {details.Released}</p>
            <p>Runtime: {details.Runtime}</p>
            <p>Genre: {details.Genre}</p>
            <p>
              Starring :{" "}
              <strong>
                <i>{details.Actors}</i>
              </strong>
            </p>
            <p>
              Directed By{" "}
              <i>
                <strong>{details.Director}</strong>
              </i>{" "}
            </p>
          </div>
          <StyledButton
            onClick={saveMovies}
            disabled={isAdded}
            colorType={isAdded ? "green" : "red"}
          >
            {isAdded ? "Already added" : "Add to watchlist"}
          </StyledButton>
        </StyledContent>
      </StyledMovieDetails>
    </Box>
  );
}

export default MovieDetails;
