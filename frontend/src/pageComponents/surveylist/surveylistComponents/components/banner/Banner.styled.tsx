import styled, { css } from "styled-components";

const StyledBanner = styled.div`
  position:relative;
  width: 100%;
  height: 330px;
  min-width: 1000px
`

const StyledBannerText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const EngLight = props.theme.fonts.EnglishFontLight;
    const HangeulBold = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const xxlarge = props.theme.fontSizes.xlarge;
    const medium = props.theme.fontSizes.medium;

    return css`
      height: 100%;
      
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 30px;
      margin-top: 20px;
      gap: 36px;

      color: ${black};
      .eng{
        font-family: ${EngLight};
        font-size: ${medium};
      }
      .title{
        font-family: ${HangeulBold};
        font-size: ${xxlarge};
      }
      .content{
        font-family: ${HangeulBold};
        font-size: ${medium};
      }
    `;
  }};
`;

export { StyledBanner, StyledBannerText };
