import styled from 'styled-components'

const SurveyAnswerTitleContainer = styled.div.attrs<any>((props) => ({}))`
    height: 100%;    
    background-color: white;
    width: 90%;
`
const SurveyAnswerTitleInnerContainer = styled.div.attrs<any>((props) => ({}))`
    margin: 0px auto 10px 50px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 52px; 
    width: 100%;
`
const SurveyAnswerTitle = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.black};;
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 10px 0px 5px 0px;
    width: 100%;
    word-wrap: break-word;
`

const SurveyAnswercontent = styled.div.attrs<any>((props) => ({}))`
    color: #6D7075;
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
`

export { SurveyAnswerTitleContainer, SurveyAnswerTitleInnerContainer, SurveyAnswerTitle, SurveyAnswercontent }