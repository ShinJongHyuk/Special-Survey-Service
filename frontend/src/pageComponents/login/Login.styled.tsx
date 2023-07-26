import styled, {css} from 'styled-components'

const InputBox = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        return css`
            width: 410px;
            height: 40px;
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

export {InputBox, LoginFont, LoginFont2}