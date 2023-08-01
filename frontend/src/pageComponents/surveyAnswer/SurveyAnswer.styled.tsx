import styled from 'styled-components'

const SurveyAnswerPage = styled.div.attrs<any>((props) => ({}))`
    height: 100vh;
`

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

const ProgressContainer = styled.div.attrs<any>((props) => ({}))`
    width: 100%;
    height: 40px;
    flex-shrink: 0;
    background-color: #F0F1F8;
    display: flex;
    position: relative;
    align-items: center;
`

const ProgressBar = styled.div.attrs<any>((props) => ({}))`
    height: 100%;
    width: ${(props) => props.width}; 
    background-color: ${(props) => props.theme.colors.purple}
`
const ProgressBarPercentage = styled.div.attrs<any>((props) => ({}))`
    z-index: 1;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.medium};
    position: absolute;
    right: 50%;
`

const Survey_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    width : 80%;
    min-height: 200px;
    position : absolute;

`;
export { SurveyAnswerPage, SurveyAnswerTitleContainer, SurveyAnswerTitleInnerContainer, SurveyAnswerTitle,
     ProgressContainer, ProgressBar, ProgressBarPercentage, Survey_Container}