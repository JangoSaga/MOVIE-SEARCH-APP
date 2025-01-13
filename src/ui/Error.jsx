/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledError = styled.span`
  display: flex;
  font-size: 5rem;
  color: white;
  justify-content: center;
`;
function Error({ messge }) {
  return <StyledError>{messge}</StyledError>;
}

export default Error;
