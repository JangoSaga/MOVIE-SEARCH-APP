import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import AppLayout from "../AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import WatchList from "./pages/Watchlist";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route index element={<Navigate replace={<Home />} to={"/home"} />} />
          <Route path="/movies/:movieID" element={<MovieDetails />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="*" element={<Navigate replace to={"/home"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// header: logo, search bar, results
// movieMenu: movies-> movie-details, add to cart
// footer
