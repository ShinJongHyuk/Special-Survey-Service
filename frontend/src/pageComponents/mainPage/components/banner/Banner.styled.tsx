import styled, { css } from "styled-components";

const StyledBanner = styled.div`
  position:relative;
  width: 100%;
  height: 500px;

`
const StyledBannerBox = styled.div`

  width: 100%;
  height: 100%;
    
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  .textbox {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    width: 500px;
  }
`;

const StyledBannerText = styled.div.attrs<any>((props) => ({}))`
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

export { StyledBanner, StyledBannerText, StyledBannerBox };
