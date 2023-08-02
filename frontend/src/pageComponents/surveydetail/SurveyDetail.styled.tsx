import styled, { css } from 'styled-components'

const SurveyDetailPage = styled.div.attrs<any>((props) => ({}))`
    height: 100vh;
`
const BackButtonContainer = styled.div.attrs<any>((props) => ({}))`
${(props) => {
    const bgcolor = props.bgcolor || "#FAFAFA"
    return css`
        position: relative;
        height: 111px;
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

const SurveyResultContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 1536px;
    padding: 50px 0px 95px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #F0F2F3;
`
export {SurveyDetailPage, BackButtonContainer, BackButton, SurveyResultContainer }
     