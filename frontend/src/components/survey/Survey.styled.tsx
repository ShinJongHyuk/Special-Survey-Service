import styled,{ThemeProvider} from 'styled-components'


const SelectBox = styled.div.attrs({})`
  display: flex;
  width: 40%;
  min-width : 100px;
  height: 44px;
  border-radius: 8px;
  border : 0px solid ${props => props.theme.colors.purple};
  padding : 20px, 20px;
  margin-left : 2%;
  cursor: pointer;
`
const SelectBox_List = styled.select.attrs({})`
  display : flex;

  width: 100%;
  height: 100%;
  text-align : center;

  border: 1px solid ${props => props.theme.colors.purple};
  border-radius: 18px;
  background-color: white;
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  cursor: pointer;
`

const SelectBox_Option = styled.option.attrs({})`
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    text-align : center;

`;

const Main_Container = styled.div.attrs({tabIndex : 0})`
    display : flex;
    flex-direction : column;

    width : 100%;
    min-width : 600px;
    margin-top : 20px;
    min-height : 10px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 30px 30px 30px 30px;
    &:focus {
      box-sizing : border-box;
      border : 1.5px solid ${props => props.theme.colors.purple};
      box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightpurple} ;

    }
    
    hr {
    width : 710px;
    height: 1px;
    background-color: ${props => props.theme.colors.lightgray};
    border: none;
    margin: 0 0;
    margin-left : 17px;
  
  }
`
const Move_Container = styled.div.attrs({})`
    display : flex;
    align-items : center;
    justify-content : center;
    width : 740px;
    height : 40px;
`

const Question_Container = styled.div.attrs({})`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    border-left: 3px solid #8E69FF;
    
    width: 100%;
    min-width : 360px;
    height: 100%;
    padding: 0px 15px;

    
`
const Question_Inner_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    
    width : 100%;
    min-width : 400px;
    height : 100%;
    padding : 5px 5px 5px 20px;
`

const Question_Header_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 60%;
    min-width : 300px;
    height : 20%;
    
    
`

const Question_Header = styled.textarea.attrs<any>((props) => ({
    placeholder: `질문${props.index + 1}*`,
  }))`
    display: flex;
    width: 100%;
    height: 30px;
    resize : none;
    margin-bottom : 5px;
    border: none;
    resize : none;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    &::placeholder {
      color: ${props => props.theme.colors.black};
    }
    &:focus {
        outline : none;
        height: 30px;
    }
  `;

const Question_Content_Container = styled.div.attrs({})`
    display : flex;
    width : 100%;
    min-width : 200px;
    height : 30%;
    border : none;
`

const Question_Content = styled.textarea.attrs<any>(props => ({
    placeholder: `질문${props.index + 1}에 대한 설명`,
  }))`
    display: flex;
    width: 100%;
    height: 25px;
    border: none;
    resize : none;
    outline : none;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    &:focus {
        outline : none;
        height: 25px;
    }
  `;


const Bottom_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    width : 100%;
    min-width : 300px;
    height : 20px;
    margin-top : 20px;
    padding : 0px 0px 0px 40px;
`

const Link_Question_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    width : 169px;
    height: 100%;

`
const Link_Question_Title = styled.label.attrs({})` 
    display : flex;
    align-items : center;
    
    width : 80px;
    height : 100%;
    font-size : 14px;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
`
const LinkSelectBox = styled.div.attrs({})`
  display: flex;
  width: 70px;
  height: 100%;
  border: none; 


  cursor: pointer;
`
const LinkSelect_List = styled.select.attrs({})`
  display : flex;
  text-align : center;
  width: 100%;
  height: 100%;

  border : none;
  cursor: pointer;


  font-size : 14px;
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  
`
const LinkSelect_Option = styled.option.attrs({})`
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};

`;


const Elements_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;

    width : 65%;
    min-width : 10px;
    height: 100%;
    padding : 10px;
    
  
`

const Essential_Question_Box = styled.div.attrs({})`
    display : flex;
    justify-content : center;
    width : 200px;
    height: 100%;
    border-left : 2px solid ${props => props.theme.colors.lightgray};
    padding : 10px 10px;
`

const Essential_Question_Title =  styled.label.attrs({})` 
    display : flex;
    align-items : center;
    
    width : 50%;
    height : 100%;
    font-size : 14px;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
`
const CheckBox_Switch = styled.div.attrs({})`
  width: 45px;
  height: 100%;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;

  &:before {
    content: "";
    margin-top : 1.1px;
    margin-left : -4px;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 35px;
    background: ${props => props.theme.colors.lightpurple};
    transform: translate(0, -50%);
    transition : inherit;
    

  }
`;


const CheckBox_Input = styled.input.attrs({type : "checkbox"})`
  display: none;
  width : 100%;
  outline : none;
  &:checked + ${CheckBox_Switch} {
    background-color : ${props => props.theme.colors.purple};
    &:before {
      transform: translate(22px, -50%);
      
     }
   }
`;

const CheckBox_Label = styled.label.attrs({})`
  display: flex;
  align-items: center;
  gap : 0px;
  cursor: pointer;
`;


const ImageWrapper = styled.div`
    display : flex;
    margin-bottom : 25px;
    margin-top : 10px;
    justify-content : center;
    cursor : pointer;
`;

const UploadImage = styled.input.attrs({type : 'file'})`
    display : none;
    outline : none;
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
const Image_Container = styled.div.attrs({})`
    display : flex;
    width : 200px;
    height : 200px;
    margin-top : 15px;
    margin-left: 87px;
` ;



export {Image_Delete_Button,Image_Container,ImagePreiew_Box,ImagePreview,UploadImage,Move_Container,ImageWrapper,CheckBox_Input,CheckBox_Switch,CheckBox_Label,Essential_Question_Title,LinkSelectBox,LinkSelect_List,LinkSelect_Option,Link_Question_Title,Essential_Question_Box,Elements_Box,Link_Question_Box,Bottom_Box,Question_Inner_Container,SelectBox_Option,SelectBox,SelectBox_List,Question_Content_Container,Question_Content,Main_Container,Question_Container,Question_Header,Question_Header_Container}