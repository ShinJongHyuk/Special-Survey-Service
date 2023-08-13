import styled, { css } from "styled-components";

const StyledTabContainer = styled.div`
  display: flex;
  width: 100vw;
`;

const StyledTab = styled.div<{ active: boolean }>`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const yellow = props.theme.colors.yellow;
    const white = props.theme.colors.white;
    const size = props.theme.fontSizes.small;
    const bgcolor = props.active ? yellow : white;

    return css`
      font-family: ${font};
      font-size: ${size};
      width: 50%;
      text-align: center;
      padding: 10px 0;
      cursor: pointer;
      background-color: ${bgcolor};
    `;
  }};
`;

export { StyledTabContainer, StyledTab };
