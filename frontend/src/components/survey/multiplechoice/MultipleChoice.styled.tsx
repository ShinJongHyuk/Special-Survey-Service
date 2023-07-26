import styled,{ThemeProvider} from 'styled-components'

const MultipleChoice_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 600px;
    min-height : 100px;

    gap : 30px;
    padding: 40px 25px;
`

const MultipleChoice_content_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 600px;
    height : 20px;
    
`

const MultipleCheckText = styled.input.attrs({type : 'text'})`
  display: flex;
  flex-wrap: wrap;

  width : 73%;
  min-height: 100%;
  border: none;
  outline: none;

  word-break: break-all;
  background: white;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};

`;

const MultipleCheck = styled.input.attrs({ type: 'radio' })`
    display : flex;
    width : 10%;
    height: 100%;
  

`;

const AddButton = styled.button.attrs({})`
    display : flex;
    border : none;
    background-color : white;
    font-size: ${props => props.theme.fontSizes.xsmall};
    color: ${props => props.theme.colors.purple};

`
const DeleteButton = styled.button.attrs({})`
    display : flex;
    border : none;
    background-color : white;
    font-size: ${props => props.theme.fontSizes.xsmall};
    color: ${props => props.theme.colors.black};

`



export {DeleteButton,AddButton,MultipleChoice_content_Box,MultipleCheck,MultipleCheckText,MultipleChoice_Box}