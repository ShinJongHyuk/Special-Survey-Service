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

const StyledImg = styled.img.attrs<any>((props) => ({}))`
  ${(props) => {
    const orange = props.theme.colors.orange;
    const purple = props.theme.colors.purple;

    let color;
    if (props.type === "NORMAL") {
      color = purple;
    } else {
      color = orange;
    }

    return css`
      position: relative;
      border: 2.5px solid ${color};
      border-radius: 90px;
      width: 180px;
    `;
  }};
`;

const StyledMsg = styled.img`
  position: absolute;
  right: -30px;
  bottom: -20px;
  transform: rotate(13.438deg);
`;

const PercentageCard = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const orange = props.theme.colors.orange;
    const purple = props.theme.colors.purple;
    const color = props.type === "NORMAL" ? purple : orange;
    return css`
      width: 70px;
      height: 80px;

      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 16px;
      border: 1px solid ${(props) => props.theme.colors.lightgray};
      background: #fff;

      color: ${color};
      font-family: ${(props) => props.theme.fonts.EnglishFontBold};
      font-size: ${(props) => props.theme.fontSizes.xxxlarge};
    `;
  }};
`;
const Percentage = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const orange = props.theme.colors.orange;
    const purple = props.theme.colors.purple;
    const color = props.type === "NORMAL" ? purple : orange;
    return css`
      color: ${color};
      font-family: ${(props) => props.theme.fonts.EnglishFontBold};
      font-size: ${(props) => props.theme.fontSizes.xxxlarge};
    `;
  }};
`;
export { SurveyResultComent, StyledImg, StyledMsg, Percentage, PercentageCard };
