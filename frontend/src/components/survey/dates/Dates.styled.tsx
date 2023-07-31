import styled,{ThemeProvider} from 'styled-components'

const Dates_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 720px;
    min-height : 10px;

    gap : 30px;
    padding: 40px 25px;
`

const Dates_content_Box = styled.div.attrs({})`
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
    flex-direction : row;

    width : 700px;
    min-height : 10%;
    
`


const Image_Container = styled.div.attrs({})`
    display : flex;
    width : 300px;
    height : 300px;
    margin-left :25%;
    margin-right :25%;
    margin-bottom : 35px;
` ;

const MultipleCheck = styled.input.attrs({ type: 'date' })`
    display : flex;
    width : 44%;
    height: 40px;
    border-radius : 50px;
    margin-left : 70px;
    margin-right : 40px;
    border : 2px solid ${props => props.theme.colors.purple};
    letter-spacing : 7px;
    text-indent : 10px;
    text-align : center;
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
    width: 40px;
    height: 40px;
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




export {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,Dates_content_Box,MultipleCheck,Dates_Box}