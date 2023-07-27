import styled, { css } from "styled-components";
import { TextType } from "./MainPage.type";

const StyledBannerBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  gap: 48px;

  .textbox {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    width: 500px;
  }
`;

const StyledBannerText = styled.div.attrs<TextType>((props) => ({}))`
  ${(props) => {
    const isko = props.$isko === "true";
    const font = isko ? props.theme.fonts.HangeulFontSemiBold : props.theme.fonts.EnglishFontLight;
    const black = props.theme.colors.black;
    const size = isko ? props.theme.fontSizes.xlarge : props.theme.fontSizes.large;

    return css`
      width: 100%;
      color: ${black};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
      ${isko && ` text-shadow: 1px 0 ${black};`}
    `;
  }};
`;

export { StyledBannerText, StyledBannerBox };
