import styled from "styled-components";
import Link from "next/link";

const StyledNavbar = styled.div`
width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.colors.yellow};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 30px;

  position: fixed;
`;

const StyledNavLink = styled(Link)`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

export { StyledNavbar, StyledNavLink };
