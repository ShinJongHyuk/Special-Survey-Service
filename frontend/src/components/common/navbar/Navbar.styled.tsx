import styled, { css } from "styled-components";
import Link from "next/link";

const StyledNavbar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    let bgColor;
    const yellow = props.theme.colors.yellow;
    const white = props.theme.colors.white;

    const surveylistcolor = props.selectBtn === "1" ? "#C6B6FF" : "#FFFAAE";

    const height = props.pathname === "/makesurvey" ? "72px" : "56px";

    switch (props.pathname) {
      case "/surveylist":
        bgColor = surveylistcolor;
        break;
      case "/instantWinConfirm":
      case "/surveydetail":
      case "/makesurvey":
        bgColor = white;
        break;
      default:
        bgColor = yellow;
    }
    return css`
      width: 100%;
      height: ${height};
      background-color: ${bgColor};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 30px;

      position: fixed;
      z-index: 1;
    `;
  }};
`;

const StyledStartComp = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const size = props.pathname === "/makesurvey" ? "15%" : "20%";
    return css`
      width: ${size};
    `;
  }};
`;

const StyledMidComp = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const size = props.pathname === "/makesurvey" ? "85%" : "60%";
    const jc = props.pathname === "/makesurvey" ? "space-between" : "center";
    const ai = props.pathname === "/makesurvey" ? "center" : "";
    return css`
      width: ${size};
      display: flex;
      justify-content: ${jc};
      align-items: ${ai};
      gap: 30px;
    `;
  }};
`;
const StyledEndComp = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const size = props.pathname === "/makesurvey" ? "10%" : "20%";
    return css`
      width: ${size};
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    `;
  }};
`;

const StyledNavLink = styled(Link)`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyleLogout = styled.div`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;

const StyledSurveyListNavBtn = styled.button.attrs<any>((props) => ({}))`
  ${(props) => {
    const purple = props.theme.colors.purple;
    const orange = props.theme.colors.orange;
    const black = props.theme.colors.black;

    const color = props.isactive ? (props.btntype === "1" ? purple : orange) : black;
    return css`
      background: transparent;
      border: none;
      font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
      font-size: ${(props) => props.theme.fontSizes.small};
      cursor: pointer;
      color: ${color};
    `;
  }};
`;

const StyledMypageNavBtn = styled.button.attrs<any>((props) => ({}))`
  ${(props) => {
    const orange = props.theme.colors.orange;
    const black = props.theme.colors.black;

    const color = props.selectBtn === props.colorCode ? orange : black;
    return css`
      background: transparent;
      border: none;
      font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
      font-size: ${(props) => props.theme.fontSizes.small};
      cursor: pointer;
      color: ${color};
    `;
  }};
`;

const StyledPropfileLink = styled(Link)`
  display: flex;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyledProfileName = styled.div`
  margin-left: 5px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyledTitleInput = styled.input.attrs({ placeholder: "설문지 제목" })`
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-weight: 800;
  height : 30px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  text-overflow: ellipsis;
  border: 0px;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.black};
    border-radius: 5px;
  }
`;

const StyledText = styled.div`
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.gray};
`;

export {
  StyledText,
  StyledTitleInput,
  StyledStartComp,
  StyledMidComp,
  StyledEndComp,
  StyledPropfileLink,
  StyledProfileName,
  StyledNavbar,
  StyledNavLink,
  StyleLogout,
  StyledSurveyListNavBtn,
  StyledMypageNavBtn,
};
