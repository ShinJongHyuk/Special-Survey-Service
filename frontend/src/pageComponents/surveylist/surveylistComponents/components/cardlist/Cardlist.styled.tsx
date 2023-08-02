import styled, { css } from "styled-components";

const StyledSortingMethodList = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      width: 100%;
      padding: 18px;
      justify-content: center;
      align-items: center;
      gap: 65px;
    `;
  }};
`;

const StyledList = styled.div`
  display: grid;
  padding: 30px 50px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  justify-content: start;
  grid-gap: 2rem;
`;
export { StyledSortingMethodList, StyledList };
