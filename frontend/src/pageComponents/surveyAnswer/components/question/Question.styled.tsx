import styled, {css} from 'styled-components'

const Survey_Container =  styled.div.attrs<any>((props) => ({}))`
    display: flex;
    min-height: 300px;
    justify-content: center;
`;

const Survey_Title_Container = styled.div.attrs<any>((props) => ({}))`
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
const StyledTag = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const type = props.type;

    const lightpurple = "linear-gradient(0deg, rgba(168, 140, 255, 0.2) 0%, rgba(168, 140, 255, 0.2) 100%), #fff";
    const lightyellow = "linear-gradient(0deg, rgba(255, 241, 41, 0.30) 0%, rgba(255, 241, 41, 0.30) 100%), #FFF";
    const bgcolor = type === "NORMAL" ? lightpurple : lightyellow;

    const bcolor = type === "NORMAL" ? "rgba(168, 140, 255, 0.10)" : "rgba(255, 241, 41, 0.20)";
    const color = type === "NORMAL" ? props.theme.colors.blue : props.theme.colors.orange;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    return css`
      display: flex;
      padding: 4px 6px 4px 4px;
      align-items: center;
      gap: 1.5px;
      border-radius: 6px;
      border: 0.7px solid ${bcolor};
      background: ${bgcolor};

      .type-text {
        font-family: ${font};
        font-size: ${xsmall};
        color: ${color};
      }
    `;
  }};
`;
export { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container, StyledTag }