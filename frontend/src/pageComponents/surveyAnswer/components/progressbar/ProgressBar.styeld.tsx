import styled from 'styled-components'
const ProgressContainer = styled.div.attrs<any>((props) => ({}))`
    width: 100%;
    height: 45px;
    background-color: #F0F1F8;
    display: flex;
    position: relative;
    align-items: center;
`

const ProgressBar = styled.div.attrs<any>((props) => ({}))`
    height: 100%;
    width: ${(props) => props.width}%; 
    background-color: ${(props) => props.type === "NORMAL"?  props.theme.colors.purple : props.theme.colors.yellow};
    cursor: ${(props) => props.width === 100 ? "pointer" : null}
`
const ProgressBarPercentage = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.width === 100 ? props.theme.fonts.HangeulFontSemiBold : props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.medium};
    position: absolute;
    right: 50%;
    margin-top: 6px;
    cursor: ${(props) => props.width === 100 ? "pointer" : null}
`


export { ProgressContainer, ProgressBar, ProgressBarPercentage }