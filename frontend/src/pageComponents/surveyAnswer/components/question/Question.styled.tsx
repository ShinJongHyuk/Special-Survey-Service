import styled, {css} from 'styled-components'

const Survey_Container =  styled.div.attrs<any>((props) => ({}))`
    display: flex;
    margin: 40px;
    justify-content: center;
`;

const Survey_Title_Container = styled.div.attrs<any>((props) => ({}))`
    display : flex;
    flex-direction : column;
    width : 600px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 16px;
    padding : 15px 10px 10px 40px;
    gap: 15px;
    min-height: 200px;
    background-color: white;
`;

const SurveyQuestionContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`


const SurveyQuestion = styled.div.attrs<any>((props) => ({}))`
    margin-top: 3px;
    color: ${(props) => props.disabled? props.theme.colors.lightgray : props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.medium};
`
const Surveycontent = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.disabled? props.theme.colors.lightgray : "#6D7075"};
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.small};
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
    const disabledColor = props.theme.colors.lightgray;
    const disabled = props.disabled;
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
        color: ${() => disabled ? disabledColor : color}
      }
    `;
  }};
`;

const SurveyImage = styled.div.attrs<any>((props) => ({}))`
  width: 100%;
  display: flex;
  justify-content: center;
`
export { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container, StyledTag, Surveycontent, SurveyImage }