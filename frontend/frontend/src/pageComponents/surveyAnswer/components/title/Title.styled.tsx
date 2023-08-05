import styled from 'styled-components'

const SurveyAnswerTitleContainer = styled.div.attrs<any>((props) => ({}))`
    height: 100px;    
`
const SurveyAnswerTitleInnerContainer = styled.div.attrs<any>((props) => ({}))`
    margin: 10px auto 10px 100px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;   
`
const SurveyAnswerTitle = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.black};;
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.mediumlarge};
`

export { SurveyAnswerTitleContainer, SurveyAnswerTitleInnerContainer, SurveyAnswerTitle }