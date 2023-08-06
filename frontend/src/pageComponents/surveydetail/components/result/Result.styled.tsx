import styled, { css } from "styled-components";

const SurveyResultComent = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.medium};

  .purple {
    color: ${(props) => props.theme.colors.purple};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
  }
  .orange {
    color: ${(props) => props.theme.colors.orange};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
  }
`;
const HighLightFont = styled.span.attrs<any>((props) => ({}))`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const StyledImg = styled.img.attrs<any>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const purple = props.theme.colors.purple;
    let color;
    if (props.type === "NORMAL") {
      color = props.typename === "일반" ? purple : white;
    } else {
      color = black;
    }

    return css`
      border: 2.5px dashed ${color};
      border-radius: 48px;
      width: 80px;
    `;
  }};
`;

const PercentageContainer = styled.div.attrs<any>((props) => ({}))`
  width: 480px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Percentage = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const PercentageCard = styled.div.attrs<any>((props) => ({}))`
  width: 70px;
  height: 90px;
  display: flex;
  padding: 20px 20px 8px 20px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
  background: #fff;
`;
const PercentageElement = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.purple};
  text-align: right;
  font-family: ${(props) => props.theme.fonts.EnglishFontBold};
  font-size: ${(props) => props.theme.fontSizes.xxxlarge};
`;
export { SurveyResultComent, StyledImg, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement };
