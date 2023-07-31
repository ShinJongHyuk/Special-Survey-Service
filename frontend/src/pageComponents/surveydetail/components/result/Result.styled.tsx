import styled from 'styled-components'

const SurveyResultComent = styled.div.attrs<any>((props) => ({}))`
    width: 418px;
    height: 96px;
    color: #000;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    
`
const HighLightFont = styled.span.attrs<any>((props) => ({}))`
    color: #8E69FF;
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
`

const PercentageContainer = styled.div.attrs<any>((props) => ({}))`
    width: 480px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Percentage = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`
const PercentageCard = styled.div.attrs<any>((props) => ({}))`
    width: 70px;
    height: 90px;
    display: flex;
    padding: 23px 20px 8px 20px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 16px;
    border: 1px solid #E4E7EC;
    background: #FFF;
`
const PercentageElement = styled.div.attrs<any>((props) => ({}))`
    color : ${(props) => props.type === "타임어택" ? props.theme.colors.purple : props.theme.colors.yellow };
    
    text-align: right;
    font-family: ${(props) => props.theme.fonts.EnglishFontBold};
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    `
export { SurveyResultComent, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement }