import styled, { css } from "styled-components";

const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemibold;
    const color = props.theme.colors.black;
    const size = props.theme.fontSizes.small;

    return css`
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;

      /* display: flex; */
    `;
  }};
`;
export { StyledText };
