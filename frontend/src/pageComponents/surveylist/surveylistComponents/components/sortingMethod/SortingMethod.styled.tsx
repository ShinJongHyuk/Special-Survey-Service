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

export { StyledSortingMethodList }