import styled, { css } from "styled-components";

const LoginPage = styled.div.attrs<any>((props) => ({}))`
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginText = styled.div.attrs<any>((props) => ({}))`
  margin-top: 30px;
  font-size: 60px;
  font-family: ${(props) => props.theme.fonts.EnglishFontBold};
  color: ${(props) => props.theme.colors.purple};
`;

const Uptext = styled.div.attrs<any>((props) => ({}))`
  margin-left: 10px;
  font-size: ${(props) => props.theme.fonts.small};
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;

const LoginContainer = styled.form.attrs<any>((props) => ({}))`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
`;
const LoginFont2 = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;

export { LoginPage, LoginText, LoginFont2, LoginContainer, Uptext };
