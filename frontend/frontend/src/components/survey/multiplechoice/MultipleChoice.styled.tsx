import styled,{ThemeProvider} from 'styled-components'

const MultipleChoice_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 600px;
    min-height : 10px;

    gap : 30px;
    padding: 40px 25px;
`

const MultipleChoice_content_Box = styled.div.attrs({})`
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
const Image_Container = styled.div.attrs({})`
    display : flex;
    width : 200px;
    height : 200px;
    margin-top : 15px;
    margin-left: 87px;
` ;

const MultipleCheck = styled.input.attrs({ type: 'radio' })`
    display : flex;
    width : 12%;
    height: 22px;
  

`;

const AddButton = styled.button.attrs({})`
    display : flex;
    width : 74px;
    text-align : center;

    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 20px;
    margin-left : 71px;
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

const UploadImage = styled.input.attrs({type : 'file'})`
    display : none;
`;


const Image_Delete_Button = styled.button`
    content: 'X';
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: ${props => props.theme.colors.purple};
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border : 3px solid lightgray;
    cursor: pointer;
    opacity: 0; 
    transition: opacity 0.2s ease-in-out; 
`;

const ImagePreiew_Box = styled.div`
    display: flex;
    position : relative;

    width: 100%;
    height: 100%;
    
    &:hover {
        ${Image_Delete_Button} {
            opacity: 1; 
        }
    }
`;

const ImagePreview = styled.img`
  width: 100%;
  height : 100%;
  border-radius : 6px;

`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

`;

const LinkSelect_List = styled.select.attrs({})`
  display : flex;
  text-align : center;
  width: 94%;
  margin-left : 25.5px;
  height: 30px;

  border : none;


  font-size: ${props => props.theme.fontSizes.xsmall};
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  
`
const LinkSelect_Option = styled.option.attrs({})`
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};

`;


export {LinkSelect_List,LinkSelect_Option,Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleCheck,MultipleCheckText,MultipleChoice_Box}