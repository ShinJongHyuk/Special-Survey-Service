import styled, { css } from "styled-components";
import Link from "next/link";

interface NavbarType {
  pathname?: string
}
const StyledNavbar = styled.div<NavbarType>`
  width: 100%;
  height: 56px;
  background-color: ${({ pathname }: any) => (pathname === '/instantWinSurveyList' ? '#FFFAAE' : '#C6B6FF')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 30px;

  position: fixed;
  z-index: 1;
`;


const StyledInstantNavLink = styled(Link).attrs<NavbarType>((props) => ({}))`
  ${(props) => {
    const orange = props.theme.colors.orange;
    const black = props.theme.colors.black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.small;
    return css`
      font-family:${font};
      font-size: ${size};
      color: ${({ pathname }: any) => (pathname === '/instantWinSurveyList' ? orange : black)};
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
      font-family:${font};
      font-size: ${size};
      color: ${({ pathname }: any) => (pathname === '/timeattackSurveyList' ? purple : black)};
    `;
  }};
`;

const StyledNavLink = styled(Link)`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};

`;

export { StyledNavbar, StyledNavLink, StyledInstantNavLink, StyledTimeattackNavLink };
