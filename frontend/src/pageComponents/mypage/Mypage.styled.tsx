import styled, { css } from "styled-components";

const StyledBanner = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      padding-top: 60px;
      gap: 100px;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const fontsemibold = props.theme.fonts.HangeulFontSemiBold;
    const fontregular = props.theme.fonts.HangeulFontRegular;
    const medium = props.theme.fontSizes.medium;
    const small = props.theme.fontSizes.small;
    return css`
      display: flex;
      gap: 10px;
      flex-direction: column;
      .email {
        font-family: ${fontsemibold};
        font-size: ${medium};
      }

      .others {
        font-family: ${fontregular};
        font-size: ${small};
      }

      .survey {
        font-family: ${fontregular};
        font-size: ${small};
      }
    `;
  }}
`;
export { StyledBanner, StyledText };
