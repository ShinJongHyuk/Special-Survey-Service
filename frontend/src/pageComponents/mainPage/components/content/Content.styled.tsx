import styled, { css } from "styled-components";

const StyledContent = styled.div`
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;
  position: absolute;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const StyledContentText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const issub = props.$issub === "true";
    const font = issub ? props.theme.fonts.HangeulFontSemiBold : props.theme.fonts.EnglishFontLight;
    const color = issub ? props.theme.colors.gray : props.theme.colors.black;
    const size = issub ? props.theme.fontSizes.medium : props.theme.fontSizes.large;

    return css`
      width: 100%;
      height: 100%;
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
    `;
  }};
`;

export { StyledContent, StyledContentText };
