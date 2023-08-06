import styled, { css } from "styled-components";

const StyledDetailContainer = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  width: 100%;
  padding: 0px 0px 40px 0px;
  gap: 66px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledSurveyContent = styled.div.attrs<any>((props) => ({}))`
  width: 450px;
  padding: 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledTag = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const type = props.type;

    const lightpurple = "linear-gradient(0deg, rgba(168, 140, 255, 0.2) 0%, rgba(168, 140, 255, 0.2) 100%), #fff";
    const lightyellow = "linear-gradient(0deg, rgba(255, 241, 41, 0.30) 0%, rgba(255, 241, 41, 0.30) 100%), #FFF";
    const bgcolor = type === "NORMAL" ? lightpurple : lightyellow;

    const bcolor = type === "NORMAL" ? "rgba(168, 140, 255, 0.10)" : "rgba(255, 241, 41, 0.20)";
    const color = type === "NORMAL" ? props.theme.colors.blue : props.theme.colors.orange;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    return css`
      display: flex;

      padding: 4px 6px 4px 4px;
      align-items: center;
      justify-content: space-around;

      gap: 1.5px;
      border-radius: 6px;
      border: 0.7px solid ${bcolor};
      background: ${bgcolor};
      width: 70px;

      .type-text {
        font-family: ${font};
        font-size: ${xsmall};
        color: ${color};
      }
    `;
  }};
`;

const SurveyTitle = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.large};
`;

const SurveyPurpose = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
`;

const SurveyInformation = styled.div.attrs<any>((props) => ({}))`
  /* height: 46px; */
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const purple = props.theme.colors.purple;
    const orange = props.theme.colors.orange;

    return css`
      color: ${(props) => props.theme.colors.gray};
      font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
      font-size: ${(props) => props.theme.fontSizes.small};

      padding: 10px 0px;
      display: flex;
      align-items: center;
      gap: 20px;

      .bold {
        font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
        width: 80px;
      }
      .end {
        color: ${props.type === "NORMAL" ? purple : orange};
      }
    `;
  }};
`;

const SurveyInformationContent = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const SurveyCard = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  padding: 15px 20px;
  min-width: 130px;
  height: 90px;
  flex-direction: column;
  align-items: flex-end;
  gap: 13px;

  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 16px;
`;
const SurveyCardTitle = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  align-self: stretch;
`;

const SurveyCardText = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.medium};
  display: flex;
  justify-content: flex-end;
  height: 30px;
  align-items: flex-end;

  .number {
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
  }

  .hangeul {
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
  }
`;

const SurveyCardTime = styled.div.attrs<any>((props) => ({}))`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.EnglishFontLight};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => (props.type === "NORMAL" ? props.theme.colors.purple : props.theme.colors.orange)};
  display: flex;
  justify-content: flex-end;
  height: 30px;
  align-items: flex-end;
`;

export {
  StyledDetailContainer,
  StyledSurveyContent,
  StyledTag,
  SurveyTitle,
  SurveyPurpose,
  SurveyInformation,
  StyledText,
  SurveyInformationContent,
  SurveyCard,
  SurveyCardTitle,
  SurveyCardText,
  SurveyCardTime,
};
