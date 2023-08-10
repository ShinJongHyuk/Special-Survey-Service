import styled, { css } from "styled-components";

const StyledTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontRegular;
    const color = props.theme.colors.black;
    const size = props.theme.fontSizes.mediumlarge;

    return css`
      width: 100%;
      height: 100%;
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
      padding-top: 97px;
    `;
  }};
`;

export { StyledTitle };
