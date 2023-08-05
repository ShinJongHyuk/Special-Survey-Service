import styled, { css } from "styled-components";

const StyledList = styled.div`
  display: grid;
  padding: 30px 50px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  justify-content: start;
  grid-gap: 2rem;
`;
export { StyledList };
