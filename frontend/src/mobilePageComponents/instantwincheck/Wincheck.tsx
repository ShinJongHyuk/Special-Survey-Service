import styled, { css } from "styled-components";
interface FlippedProps {
  isFlipped: boolean;
}
const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      touch-action: none;
      width: 100%;
      height: 100%;
      margin-top: 180px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 35px;
    `;
  }};
`;
const StyledTitleBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const ml = props.theme.fontSizes.mediumlarge;
    const small = props.theme.fontSizes.small;

    return css`
      color: ${black};
      font-family: ${font};
      text-align: center;

      width: 100%;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;

      .title {
        font-size: ${ml};
      }

      .subtitle {
        font-size: ${small};
      }
    `;
  }};
`;

const StyledWinBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.mediumlarge;
    return css`
      position: relative;
      width: 380px;
      height: 140px;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      font-family: ${font};
      font-size: ${size};
      color: ${black};
    `;
  }};
`;

const BottomButtonBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.mediumlarge;
    return css`
      position: fixed;
      bottom: 0;
      height: 60px;
      width: 100%;
      background-color: #fff129;
    `;
  }};
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
`;

const CardFront = styled.div<FlippedProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

const CardBack = styled.div<FlippedProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.isFlipped ? "rotateY(0deg)" : "rotateY(180deg)")};
`;

export { CardWrapper, CardBack, CardFront, BottomButtonBox, StyledTitleBox, StyledBox, StyledWinBox };
