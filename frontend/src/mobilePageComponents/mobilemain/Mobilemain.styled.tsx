import styled, { css } from "styled-components";

const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const lightgray = props.theme.colors.lightgray;
    const white = props.theme.colors.white;

    return css`
      width: 334px;
      height: 140px;
      padding-right: 8px;
      border: 1px solid ${lightgray};
      border-radius: 10px;
      background-color: ${white};

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;
  }};
`;

const StyledName = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.EnglishFontBold;
    const color = props.theme.colors.black;
    const size = props.theme.fontSizes.small;

    return css`
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
    `;
  }};
`;
const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontRegular;
    const color = props.theme.colors.black;
    const size = props.theme.fontSizes.small;

    return css`
      width: 137px;
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;

      /* display: flex; */
    `;
  }};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 50%;
`;

const StyledWoman = styled.img`
  width: 170px;
  height: 170px;
  position: fixed;
  left: 0;
  z-index: -1;
  bottom: -25px;
`;
export { StyledContainer, StyledBox, StyledName, StyledText, StyledLeft, StyledWoman };
