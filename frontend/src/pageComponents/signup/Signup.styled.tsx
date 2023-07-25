import styled from 'styled-components'

const SignUpPage = styled.div.attrs<any>((props) => ({}))`
    min-width: 1320px;
    display: flex;
    justify-content: center;
`

const SignUpContainer = styled.form.attrs<any>((props) => ({}))`
    width: 540px;
    height: auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 0px;
`

const SignUpText = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100%;
    font-size: 16px;
    font-family: 'Suit';
    @font-face {
        font-family: 'Suit';
        src: url('/fonts/SUIT-Regular.ttf');
    }
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

export { SignUpPage, SignUpContainer, InputRadioBox, SignUpText, SignUpItem }