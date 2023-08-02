import styled from 'styled-components'

const Survey_Container =  styled.div.attrs<any>((props) => ({}))`
    display: flex;
    min-height: 200px;
    justify-content: center;
`;

const Survey_Title_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 600px;
    margin : 30px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 16px;
    padding : 20px 30px 25px 55px;
    gap: 15px;
`;

const SurveyQuestionContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`


const SurveyQuestion = styled.div.attrs<any>((props) => ({}))`
    margin: 3px;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.medium};
`

export { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container }