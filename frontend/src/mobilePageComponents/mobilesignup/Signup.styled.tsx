import styled, { css } from "styled-components";

const SignUpPage = styled.div.attrs<any>((props) => ({}))`
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupText = styled.div.attrs<any>((props) => ({}))`
  margin: 30px;
  font-size: 60px;
  font-family: ${(props) => props.theme.fonts.EnglishFontBold};
  color: ${(props) => props.theme.colors.purple};
`;

const DuplicationBox = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
`;

const DuplicationButton = styled.button.attrs<any>((props) => ({}))`
  height: 40px;
  width: 60px;
  background-color: ${(props) => (props.iscert === "true" ? props.theme.colors.yellow : props.theme.colors.lightgray)};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  border: none;
  cursor: pointer;
`;

const InputBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      width: 80vw;
      height: 40px;
      margin: 10px;
    `;
  }}
`;

const SignUpContainer = styled.form.attrs<any>((props) => ({}))`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  width: 90vw;
  gap: 20px;
`;

const SignUpText = styled.div.attrs<any>((props) => ({}))`
  margin-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;

const SignUpItem = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PasswordCondition = styled.div.attrs<any>((props) => ({}))`
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => (props.isPasswordRegex ? "green" : "red")};
`;

const InputRadioBox = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 210px;
  height: 40px;
  margin: 10px;
`;

export {
  SignUpPage,
  SignupText,
  SignUpContainer,
  InputRadioBox,
  SignUpText,
  SignUpItem,
  DuplicationBox,
  InputBox,
  PasswordCondition,
  DuplicationButton,
};
