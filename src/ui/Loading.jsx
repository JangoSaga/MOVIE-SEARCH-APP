import styled from "styled-components";

const StyledLoading = styled.span`
  display: flex;
  font-size: 5rem;
  color: white;
  justify-content: center;
`;
function Loading() {
  return <StyledLoading>🍿Loading ...</StyledLoading>;
}

export default Loading;
