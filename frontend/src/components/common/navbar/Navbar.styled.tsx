import styled, { css } from "styled-components";
import Link from "next/link";
interface NavbarType {
  pathname?: string;
}

const StyledNavbar = styled.div.attrs<NavbarType>((props) => ({}))`
  ${(props) => {
    let bgColor;
    const yellow = props.theme.colors.yellow;
    const white = props.theme.colors.white;

    switch (props.pathname) {
      case "/instantWinSurveyList":
        bgColor = "#FFFAAE";
        break;
      case "/normalSurveyList":
        bgColor = "#C6B6FF";
        break;
      case "/instantWinConfirm":
        bgColor = white;
        break;
      case "/surveydetail":
        bgColor = white;
        break;
      default:
        bgColor = yellow;
    }
    return css`
      width: 100%;
      height: 56px;
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
`

const StyledInstantNavLink = styled(Link).attrs<NavbarType>((props) => ({}))`
  ${(props) => {
    const orange = props.theme.colors.orange;
    const black = props.theme.colors.black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.small;
    return css`
      font-family: ${font};
      font-size: ${size};
      color: ${({ pathname }: any) => (pathname === "/instantWinSurveyList" ? orange : black)};
    `;
  }};
`;

const StyledTimeattackNavLink = styled(Link).attrs<NavbarType>((props) => ({}))`
  ${(props) => {
    const purple = props.theme.colors.purple;
    const black = props.theme.colors.black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.small;
    return css`
      font-family: ${font};
      font-size: ${size};
      color: ${({ pathname }: any) => (pathname === "/normalSurveyList" ? purple : black)};
    `;
  }};
`;

const StyledNavBtn = styled.button`
  background: transparent;
  border: none;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;

export { StyledNavbar, StyledNavLink, StyleLogout, StyledInstantNavLink, StyledTimeattackNavLink, StyledNavBtn };
