import styled, {css} from 'styled-components'

const LoginPage = styled.div.attrs<any>((props) => ({}))`
    /* margin: 50px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const InputBox = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        return css`
            width: 410px;
            height: 50px;
            margin: 10px;
        `
    }}
`

const LoginFont = styled.div.attrs<any>((props) => ({}))`
    width: 200px;
    height: 20px;
    margin-left: 10px;
    margin-bottom:10px;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`
const LoginFont2 = styled.p.attrs<any>((props) => ({}))`
    width: 100px;
    height: 20px;

    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`

export {LoginPage,InputBox, LoginFont, LoginFont2}