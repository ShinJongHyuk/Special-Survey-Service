import styled from 'styled-components'

const SurveyResultComent = styled.div.attrs<any>((props) => ({}))`
    width: 418px;
    height: 96px;
    color: ${(props) => props.theme.colors.black};;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.medium};
`
const HighLightFont = styled.span.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.purple};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-style: normal;
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
    padding: 20px 20px 8px 20px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.colors.lightgray};
    background: #FFF;
`
const PercentageElement = styled.div.attrs<any>((props) => ({}))`
    color : ${(props) =>  props.theme.colors.purple };
    text-align: right;
    font-family: ${(props) => props.theme.fonts.EnglishFontBold};
    font-size: ${(props) => props.theme.fontSizes.xxxlarge};
    `
export { SurveyResultComent, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement }