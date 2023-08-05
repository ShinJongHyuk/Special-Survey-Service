import styled, { css } from "styled-components";

const StyledModal = styled.div`
  width: 380px;
  height: 450px;

  border-radius: 15px;
  box-shadow: 0px 0px 10px 5px ${(props) => props.theme.colors.lightgray};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.colors.white};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      width: 100%;
      height: 100%;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
    return css`
      position: relative;
      height: 140px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `;
  }};
`;

export { StyledModal, StyledTitleBox, StyledBox, StyledWinBox };
