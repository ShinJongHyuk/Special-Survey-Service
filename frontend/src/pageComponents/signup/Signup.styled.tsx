import styled from 'styled-components'

const SignUpPage = styled.div.attrs<any>((props) => ({}))`
  min-width: 1340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const WomanBGStyles = styled.div.attrs<any>((props) => ({}))` 
  position: absolute;
  bottom: 0;
  left: 0;
  width: 460px;
  height: 400px;
  background-image: url("/womanBG.png");
`
const ManBGStyles = styled.div.attrs<any>((props) => ({}))` 
  position: absolute;
  bottom: 0;
  right: 0;
  width: 390px;
  height: 350px;
  background-image: url("/manBG.png");
`

const SignUpContainer = styled.form.attrs<any>((props) => ({}))`
    width: 540px;
    height: auto;
    border-radius: 5px;
    padding: 10px 0px;
`

const SignUpText = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 100px;
    height: 100%;
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular}
   
`

const SignUpItem = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: center;
`

const InputRadioBox = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 410px;
    height: 40px;
    margin: 10px;

`

export { SignUpPage, SignUpContainer, InputRadioBox, SignUpText, SignUpItem, WomanBGStyles, ManBGStyles }