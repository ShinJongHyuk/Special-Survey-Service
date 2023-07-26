import styled, { css } from "styled-components";
import { TextType } from "../../MainPage.type";

const StyledContent = styled.div`
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;

  position: absolute;
  top: 110%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const StyledContentText = styled.div.attrs<TextType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const color = props.isSub ? props.theme.colors.gray : props.theme.colors.black;
    const size = props.isSub ? props.theme.fontSizes.medium : props.theme.fontSizes.large;

    return css`
      width: 100%;
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
    `;
  }};
`;

export { StyledContent, StyledContentText };
