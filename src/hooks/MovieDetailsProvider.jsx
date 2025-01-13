/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { KEY } from "../ui/Constants";

const MovieDetailsContext = createContext();

function MovieDetailsProvider({ children }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isDetailsLoading, setIsDetailsLoading] = useState(true);
  const [isDetailsError, setIsDetailsError] = useState(null);
  const [movieID, setMovieID] = useState("tt5083736");
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsDetailsLoading(true);
        setIsDetailsError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${movieID}`
        );
        if (!response.ok)
          throw new Error("Something went wrong, maybe you are offline!");

        const data = await response.json();
        console.log(data);
        setMovieDetails(data);
      } catch (err) {
        setIsDetailsError(err.messages);
      } finally {
        setIsDetailsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieID]);
  return (
    <MovieDetailsContext.Provider
      value={{
        isDetailsError,
        movieDetails,
        isDetailsLoading,
        setMovieID,
      }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
}

function useMovieDetails() {
  const context = useContext(MovieDetailsContext);
  if (context === undefined) {
    throw new Error("useMovieDetails must be used within MovieDetailsProvider");
  }
  return context;
}
export { MovieDetailsProvider, useMovieDetails };
