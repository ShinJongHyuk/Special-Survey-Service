import styled, { css } from "styled-components";

const StyledHoverMsg = styled.div`
  position: absolute;
  bottom: 65px;
  right: 5px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 7px;
  padding: 10px;
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  z-index: 1;
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.xsmall};

  width: 80px;
`;

const StyledPlusBtn = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const purple = props.theme.colors.purple;
    const yellow = props.theme.colors.yellow;
    const white = props.theme.colors.white;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const color = props.selectbtn === "1" ? purple : yellow;

    return css`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: ${color};
      background-color: ${white};
      font-family: ${font};
      font-size: 53px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    `;
  }};
`;
export { StyledHoverMsg, StyledPlusBtn };
