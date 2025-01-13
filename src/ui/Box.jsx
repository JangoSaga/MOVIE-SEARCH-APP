/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #343a40;
  margin: 1rem 0.2rem;
  min-height: 100vh;
  border-radius: 1rem;
  padding: 1rem;
`;
function Box({ children }) {
  return <StyledBox>{children}</StyledBox>;
}

export default Box;
