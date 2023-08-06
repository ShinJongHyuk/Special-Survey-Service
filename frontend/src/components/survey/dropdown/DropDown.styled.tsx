import styled,{ThemeProvider} from 'styled-components'

const DropDown_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 100%;
    min-height : 5px;

    gap : 30px;
    padding: 28px 0px 28px 15px;
`

const DropDown_content_Box = styled.div.attrs({})`
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    flex-direction : row;
   
    width : 100%;
    min-height : 5%;
    
`

const MultipleCheckText = styled.input.attrs({})`
  display: flex;
  flex-wrap: wrap;
  resize : vertical;
  overflow : auto;
  width : 40%;
  min-width : 100px;
  min-height : 22px;
  border: none;
  outline: none;
  resize: vertical; 
  overflow: auto;
  background: white;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${props => props.theme.fontSizes.small};
 
`;

const MultipleCheck = styled.label.attrs({})`
    display : flex;
    justify-content : center;
    width : 12%;
    height: 22px;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.purple};

`;

const AddButton = styled.button.attrs({})`
    display : flex;
    flex-direction : row-reverse;
    width : 65%;
    height : 35px;
    min-width : 200px;
    align-items : center;
    justify-content : center;
    text-align : center;
    margin-left : 30px;
    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 20px;
    
    background-color : white;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.purple};
    cursor : pointer;
    
    &:hover {
    background-color: ${props => props.theme.colors.purple};
    color: white;
    }

`
const DeleteButton = styled.button.attrs({})`
  display: flex;
  border : none;
  background-color: white;
  margin-right : 25%;
  font-size: ${props => props.theme.fontSizes.medium};
  color: red;
  cursor: pointer;
  
`;

const LinkSelect_List = styled.select.attrs({})`
  display : flex;
  text-align : center;
  width: 24%;

  height: 35px;

  border : none;
  background-color : white;
  font-family: ${props => props.theme.fonts.HangeulFontRegular};
  font-size: 12.5px;
  color: black;
  box-sizing : border-box;
  border : 1px solid ${props => props.theme.colors.purple};
  border-radius : 18px;
  cursor : pointer;
  
`
const LinkSelect_Option = styled.option.attrs({})`
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};

`;
const Delete_Button_Container = styled.div.attrs({})`
    display : flex;
    width : 10%;
    min-width : 160px;
    justify-content : flex-end;
`



export {Delete_Button_Container,LinkSelect_List,LinkSelect_Option,DeleteButton,AddButton,DropDown_content_Box,MultipleCheck,MultipleCheckText,DropDown_Box}