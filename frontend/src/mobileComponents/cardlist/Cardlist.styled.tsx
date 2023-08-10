import styled, { css } from "styled-components";

const StyledCardList = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;
  }};
`;

export { StyledCardList };
