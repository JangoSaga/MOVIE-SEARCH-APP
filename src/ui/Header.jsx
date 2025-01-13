import styled from "styled-components";
import { useMovies } from "../hooks/MovieProvider";
import { useNavigate } from "react-router";

const StyledLogo = styled.img`
  height: 4rem; /* Adjusted for a sleeker look */
  cursor: pointer;
`;

const StyledHeader = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #1c1f24; /* Slightly darker for better contrast */
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid #444;
  color: #fff;
  gap: 1rem; /* Space between sections */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Lugrasimo", serif;
  font-size: 2.5rem;
  color: #e2e8f0; /* Light grey for better readability */
  cursor: pointer;

  &:hover {
    color: #a0aec0; /* Slight color change on hover */
  }
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: none;
  width: 18rem;
  border-radius: 0.5rem;
  background-color: #2a2f33; /* Softer background for input */
  font-size: 1rem;
  color: #cbd5e0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: #3b4045; /* Darker background on focus */
    box-shadow: 0 0 5px #4fd1c5; /* Glow effect */
  }

  &::placeholder {
    color: #718096; /* Subtle placeholder text */
  }
`;

const StyledButton = styled.button`
  background-color: #4fd1c5;
  color: #1a202c;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #38b2ac; /* Slightly darker shade on hover */
  }

  &:disabled {
    background-color: #a0aec0; /* Disabled state */
    cursor: not-allowed;
  }
`;

const StyledResults = styled.div`
  font-size: 1.2rem;
  color: #a0aec0;
  font-weight: 500;
`;

/* Wrapper for the input, button, and results */
const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function Header() {
  const { movies, setQuery, query, watchedList } = useMovies();
  const navigate = useNavigate();

  function handleWatchList() {
    navigate("/watchList");
  }

  return (
    <StyledHeader>
      <LogoTitleContainer onClick={() => navigate("/")}>
        <StyledLogo src="./Logo.png" alt="Logo" />
        <StyledTitle>findMyMoviez</StyledTitle>
      </LogoTitleContainer>

      <SearchContainer>
        {watchedList && watchedList.length > 0 && (
          <StyledButton onClick={handleWatchList}>🛒 WatchList</StyledButton>
        )}
        <StyledInput
          type="text"
          placeholder="Search your movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <StyledResults>Found {movies.length} results</StyledResults>
      </SearchContainer>
    </StyledHeader>
  );
}

export default Header;
