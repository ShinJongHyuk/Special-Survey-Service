import styled, { css } from "styled-components";

const StyledBanner = styled.div`
  img{
    width: 100%;
    height: 500px;
  }
  
`
const StyledBannerBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top:40%;
  left:50%;
  transform: translate(-50%, -50%);

  gap:48px;
`
const StyledTextbox = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  width: 500px;
`;

interface TextType {
  isKo: boolean;
}

const StyledBannerText = styled.div.attrs<TextType>((props) => ({}))`
  ${(props) => {
    const font = props.isKo ? props.theme.fonts.HangeulFontSemiBold : props.theme.fonts.EnglishFontLight;
    const black = props.theme.colors.black;
    const gray = props.theme.colors.gray;
    const size = props.isKo ? props.theme.fontSizes.xlarge : props.theme.fontSizes.large;

    return css`
      width: 100%;
      color: ${black};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
      ${props.isKo && `
    text-shadow: 1px 0 ${black}, -1px 0 ${black}, 0 1px ${black}, 0 -1px ${black}, 0 2px ${gray};
  `}
    `;
  }};
`;

export { StyledTextbox, StyledBanner, StyledBannerText, StyledBannerBox };
