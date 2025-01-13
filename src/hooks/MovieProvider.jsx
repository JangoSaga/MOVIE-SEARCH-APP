/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { KEY } from "../ui/Constants";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("interstellar");
  const [watchedList, setWatchedList] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!response.ok)
          throw new Error("Something went wrong, maybe you are offline!");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found!");
        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        isLoading,
        error,
        query,
        setQuery,
        watchedList,
        setWatchedList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

// Custom Hook for consuming the context
function useMovies() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
}

export { MovieProvider, useMovies };
