import styled, { css } from "styled-components";

const StyledContent = styled.div`
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 80px;
  position: absolute;

  .buttonbg {
    display: flex;
    width: 60px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border-radius: 32px;
    background: ${(props) => props.theme.colors.lightpurple};
    border: 0px;

    margin: 0px 20px;
  }

  .buttontext {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const StyledContentText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const issub = props.$issub === "true";
    const font = issub ? props.theme.fonts.HangeulFontSemiBold : props.theme.fonts.EnglishFontBold;
    const color = issub ? props.theme.colors.gray : props.theme.colors.black;
    const size = issub ? props.theme.fontSizes.medium : props.theme.fontSizes.large;

    return css`
      width: 100%;
      height: 100%;
      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;
    `;
  }};
`;

const StyledCardList = styled.div`
  display: flex;
  gap: 15px;
`;

export { StyledContent, StyledContentText, StyledCardList };
