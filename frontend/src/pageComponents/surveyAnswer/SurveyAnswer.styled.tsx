import styled, {css} from 'styled-components'

const SurveyAnswerPage = styled.div.attrs<any>((props) => ({}))`
    height: 100vh;
`

const BackButtonContainer = styled.div.attrs<any>((props) => ({}))`
${(props) => {
    const bgcolor = props.bgcolor || "#FAFAFA"
    return css`
        position: relative;
        height: 99px;
        background-color: ${bgcolor};
        padding-left: 30px;
    `
}}
    
`
const BackButton = styled.div.attrs<any>((props) => ({}))`
    position: absolute;
    bottom: 0px;
    cursor: pointer;
`

const QuestionLocation = styled.div`
    padding-top: 190px;
    padding-bottom: 10px;
    background-image: url("/survey/background_survey5.png");
    background-repeat: repeat;
`


export { SurveyAnswerPage, BackButtonContainer, BackButton, QuestionLocation }

