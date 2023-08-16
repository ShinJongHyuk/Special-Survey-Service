import styled, { css } from "styled-components";

const FindIdPage = styled.div.attrs<any>((props) => ({}))`
  height: 100vh;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* background-image: url("/BGimg.png"); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f9fafb;

  @media (max-width: 1180px) {
    background-size: cover;
  }
  @media (max-height: 700px) {
    background-size: cover;
  }
`;

const FindIdTitle = styled.div.attrs<any>((props) => ({}))`
  margin-top: 30px;
  font-size: 60px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  color: ${(props) => props.theme.colors.black};
`;

const InputBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      width: 410px;
      height: 50px;
      margin: 10px;
    `;
  }}
`;

const DuplInput = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      width: 310px;
      height: 50px;
      margin: 10px;
    `;
  }}
`;

const LoginContainer = styled.form.attrs<any>((props) => ({}))`
  width: 430px;
  height: auto;
  border-radius: 5px;
  padding: 10px 0px;
  margin-top: 5%;
`;

const LoginFont = styled.div.attrs<any>((props) => ({}))`
  width: 200px;
  height: 20px;
  margin-left: 5px;
  margin-bottom: 3.5px;
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;
const LoginFont2 = styled.p.attrs<any>((props) => ({}))`
  width: 100px;
  height: 20px;

  font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;

const DuplicationButton = styled.button.attrs<any>((props) => ({}))`
  width: 90px;
  height: 40px;
  background-color: ${(props) => (props.iscert === "true" ? props.theme.colors.yellow : props.theme.colors.lightgray)};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  border: none;
  margin-right: 8px;
  &:enabled {
    &:active {
      margin-right: 7px;
      margin-top: 3px;
    }
  }

  cursor: pointer;
`;

const DuplBox = styled.div.attrs<any>((props) => ({}))`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export { DuplInput, DuplBox, DuplicationButton, FindIdPage, FindIdTitle, InputBox, LoginFont, LoginFont2, LoginContainer };
