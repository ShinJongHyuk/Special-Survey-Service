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
    width : 700px;
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
  display: flex;
  background-color: white;
  color: ${props => props.theme.colors.purple};
  border : none;
  &:hover {

    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.black};
  }
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
    font-weight: bold;
    cursor: pointer;
    opacity: 0; /* Hide the X button by default */
    transition: opacity 0.2s ease-in-out; /* Add a transition effect for smooth visibility */
`;

const ImagePreiew_Box = styled.div`
    display: flex;
    position: relative;
    max-width: 70px;
    max-height: 70px;

    &:hover {
        ${Image_Delete_Button} {
            opacity: 1; 
        }
    }
`;

const ImagePreview = styled.img`
  max-width: 70px;
  max-height: 70px;
  border-radius : 6px;

`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

`;




export {Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleCheck,MultipleCheckText,MultipleChoice_Box}