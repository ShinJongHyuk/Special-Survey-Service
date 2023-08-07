import styled from 'styled-components'
import TextAreaAutosize from 'react-textarea-autosize'


const MultipleChoice_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 100%;
    min-height : 5px;

    gap : 30px;
    padding: 28px 0px 28px 15px;
`

const MultipleChoice_content_Box = styled.div.attrs({})`
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    flex-direction : row;
   
    width : 100%;
    min-height : 5%;
    
`

const MultipleCheckText = styled(TextAreaAutosize)`
  display: flex;
  flex-wrap: wrap;
  resize : none;

  width : 40%;
  min-width : 100px;
  min-height : 22px;
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
    width : 12%;
    height: 22px;
    outline : none;

`;

const Add_Button_Container = styled.button.attrs({})`
    display : flex;
    justify-content : flex-start;
    border :none;
    background-color :white;
    padding : 0px 17px;
`


const AddButton = styled.button.attrs({})`
    display : flex;
    flex-direction : row-reverse;
    width : 68.5%;
    height : 35px;
    min-width : 200px;
    align-items : center;
    justify-content : center;
    text-align : center;
    margin-left : 10px;
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

const Delete_Button_Container = styled.div.attrs({})`
    display : flex;
    width : 18%;
    min-width : 50px;
    justify-content : flex-end;

`

const DeleteButton = styled.button.attrs({})`
  display: flex;
  border : none;

  background-color: white;
  font-size: ${props => props.theme.fontSizes.medium};
  color: red;
  cursor: pointer;
  
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

`;

const LinkSelect_List = styled.select.attrs({})`
  display : flex;
  text-align : center;
  width: 28%;
  min-width : 30px;
  height: 35px;
  margin-left: 10px;

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


export {Add_Button_Container,Delete_Button_Container,LinkSelect_List,LinkSelect_Option,ImageWrapper,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleCheck,MultipleCheckText,MultipleChoice_Box}