import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./src/ui/Header";
import { MovieProvider } from "./src/hooks/MovieProvider";
import { MovieDetailsProvider } from "./src/hooks/MovieDetailsProvider";
const StyledAppLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
function AppLayout() {
  // create outlet for the route

  return (
    <MovieProvider>
      <MovieDetailsProvider>
        <StyledAppLayout>
          <Header />
          <main>
            <Outlet />
          </main>
        </StyledAppLayout>
      </MovieDetailsProvider>
    </MovieProvider>
  );
}

export default AppLayout;
