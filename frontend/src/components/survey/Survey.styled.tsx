import styled,{ThemeProvider} from 'styled-components'


const SelectBox = styled.div.attrs({})`
  display: flex;
  width: 170px;
  height: 44px;
  border-radius: 8px;
  border : 0px solid ${props => props.theme.colors.purple};
  padding : 20px, 20px;
  margin-left : 29px;
  cursor: pointer;
`
const SelectBox_List = styled.select.attrs({})`
  display : flex;

  width: 100%;
  height: 100%;
  text-align : center;

  border: 1px solid ${props => props.theme.colors.purple};
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  
`

const SelectBox_Option = styled.option.attrs({})`
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    text-align : center;

`;

const Main_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    width : 800px;
    min-height : 320px;
    margin : 0px 30px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.gray};
    border-radius : 30px;
    padding : 0px 30px 30px 30px;
    
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
    
    width: 520px;
    height: 57px;
    padding: 0px 20px;
    
`
const Question_Inner_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    
    
    width : 765px;
    height : 60px;
    padding : 0px 20px;
`

const Question_Header_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 500px;
    height : 25px;
    
`

const Question_Header = styled.input.attrs({ placeholder : "질문1*"})`
    display : flex;
    
    width : 100%;
    height : 100%;
    border : none;

    font-size : ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontBold};
    &::placeholder {
        color : ${props => props.theme.colors.black};
    }  
`

const Question_Content_Container = styled.div.attrs({})`
    display : flex;
    width : 500px;
    height : 20px;
    border : none;
`

const Question_Content = styled.input.attrs({ placeholder : "질문1에 대한 설명"})`
    display : flex;
    width : 100%;
    height : 100%;
    border : none;
    font-size : ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
`



const Bottom_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    width : 695px;
    height : 30px;
    margin-top : 20px;
    padding : 0px 0px 0px 20px;
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
    
    width : 55px;
    height : 100%;
    font-size : ${props => props.theme.fontSizes.xsmall};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
`
const LinkSelectBox = styled.div.attrs({})`
  display: flex;
  width: 65px;
  height: 100%;
  border: none; 


  cursor: pointer;
`
const LinkSelect_List = styled.select.attrs({})`
  display : flex;

  width: 100%;
  height: 100%;

  border : none;


  font-size: ${props => props.theme.fontSizes.xsmall};
  color: ${props => props.theme.colors.gray};
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

    width : 150px;
    height: 100%;
    padding : 10px;
    margin-left : 231px;
    
  
`

const Essential_Question_Box = styled.div.attrs({})`
    display : flex;
    justify-content : center;
    width : 200px;
    height: 100%;
    border-left : 2px solid ${props => props.theme.colors.lightgray};
    margin-left : 20px;
    margin-right : -60px;
    padding : 10px 10px;
`

const Essential_Question_Title =  styled.label.attrs({})` 
    display : flex;
    align-items : center;
    
    width : 60px;
    height : 100%;
    font-size : ${props => props.theme.fontSizes.xsmall};
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

  }
`;


const CheckBox_Input = styled.input.attrs({type : "checkbox"})`
  display: none;


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
  gap: 10px;
  cursor: pointer;
`;


const ImageWrapper = styled.div`
    display : flex;
    cursor : pointer;
`;




export {Move_Container,ImageWrapper,CheckBox_Input,CheckBox_Switch,CheckBox_Label,Essential_Question_Title,LinkSelectBox,LinkSelect_List,LinkSelect_Option,Link_Question_Title,Essential_Question_Box,Elements_Box,Link_Question_Box,Bottom_Box,Question_Inner_Container,SelectBox_Option,SelectBox,SelectBox_List,Question_Content_Container,Question_Content,Main_Container,Question_Container,Question_Header,Question_Header_Container}