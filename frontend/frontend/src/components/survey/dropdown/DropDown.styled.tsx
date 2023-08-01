import styled,{ThemeProvider} from 'styled-components'

const DropDown_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 600px;
    min-height : 10px;

    gap : 30px;
    padding: 40px 25px;
`

const DropDown_content_Box = styled.div.attrs({})`
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    flex-direction : row;
   
    width : 700px;
    min-height : 10%;
    
`

const MultipleCheckText = styled.input.attrs({type : 'text'})`
  display: flex;
  flex-wrap: wrap;

  width : 65%;
  height : 22px;
  border: none;
  outline: none;

  word-break: break-all;
  background: white;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
`;

const MultipleCheck = styled.label.attrs({})`
    display : flex;
    text-align : center;
    margin-left : 23px;
    margin-top : -5px;
    width : 7%;
    height: 22px;
    
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.purple};

`;

const AddButton = styled.button.attrs({})`
    display : flex;
    width : 74px;
    text-align : center;

    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 20px;
    margin-left : 60px;
    background-color : white;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.purple};
    

`
const DeleteButton = styled.button.attrs({})`
  display: flex;

  margin-left : 100px;
  border : none;
  background-color: white;
  font-size: ${props => props.theme.fontSizes.medium};
  color: red;
  
`;





export {DeleteButton,AddButton,DropDown_content_Box,MultipleCheck,MultipleCheckText,DropDown_Box}