import styled from 'styled-components'

const Survey_Container = styled.div.attrs({})`
    display: flex;
    width: 100%;
    min-height: 300%;
    justify-content: center;

    background-image: url("/survey/background_survey2.png");
    background-repeat: repeat;

    position: absolute;
    top: 27%;
    flex-wrap: wrap;
  
`;

const Component_Container = styled.div.attrs({})`
    display : flex; 
    flex-direction : column;
    width : 100%;
    min-height : 100%;


`

const Survey_Inner_Container = styled.div.attrs({})`
    display: flex;
    flex-direction : column;
    width: 70%;
    max-width : 900px;
    min-width : 400px;
    min-height: 100%;
    background-color : white;
    position: absolute;
    z-index : 1;
    padding : 40px 70px 40px 70px;
`;

const Background_Container = styled.div.attrs({})`
    display :flex;
    position : absolute;
    width : 40%;
    margin-left : 10%;
    height : 100%;
    top : 8%;
    left : 66%;
`;


const Survey_Title_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    width : 100%;
    min-width : 600px;
    height : 120px;
    margin-bottom : 20px;

    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 10px 5px 10px 55px;
`;

const Survey_Detail_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    justify-content : center;
    width : 100%;
    min-width : 600px;
    min-height : 120px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 20px 30px 20px 30px;
`;

const Element_Detail_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    justify-content : center;
    width : 90%;
    min-width : 400px;
    min-height : 120px;
    margin-top : 20px;
    margin-left : 40px;
  
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 25px 25px 25px 25px;
`

const Element_Detail_Inner_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    justify-content : center;
    width : 100%;
    min-width : 350px;
    min-height : 120px;
    hr {
        width : 100%;
        margin : 30px 0px 30px 0px;
        color : ${props => props.theme.colors.lightgray};
    }


    padding : 25px 25px 25px 25px;
`;

const Element_Top_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    justify-content : center;
    width : 100%;
    height : 30%;
    min-width : 350px;
    min-height : 36px;
    margin-bottom : 20px;
    padding : 10px 10px 10px 10px;
`

const Element_Bottom_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    justify-content : center;
    width : 100%;
    height : 70%;
    min-width : 350px;
    min-height : 84px;
    padding : 10px 10px 10px 10px;
`

const Element_Bottom_Row_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : row;

    justify-content : center;
    width : 100%;
    height : 70%;
    min-width : 350px;
    min-height : 84px;
    padding : 10px 10px 10px 10px;
`

const Element_Input = styled.input.attrs({})`
    display : flex;
    width : 100%;
    height : 40%;
    min-width :350px;
    min-height : 40px;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 30px;
    padding : 0px 20px 0px 20px;
    cursor : pointer;


`

const Gender_Button = styled.button.attrs<any>((props => {
    genderselected : props.genderselected
}))`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 40px;
    align-items: center;
    justify-content: center;
    box-sizing : border-box;
    margin : 10px 10px;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 10px;
    background-color: ${(props) =>
    props.selected === "MAN" ? props.theme.colors.purple : props.selected === "WOMAN" ? props.theme.colors.lightgray : "white"};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;
`;

const Age_Button = styled.button.attrs<any>((props => {
    ageselected : props.ageselected
}))`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin : 10px 10px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 10px;
    background-color: ${(props) =>
    props.selected === "MAN" ? props.theme.colors.purple : props.selected === "WOMAN" ? props.theme.colors.lightgray : "white"};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    color: ${(props) => props.theme.colors.black};

    cursor: pointer;
`;


const Element_Title = styled.div.attrs({})`
    display: flex;
    align-items : center;
 
    width: 100%;
    height: 100%;
    
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.lightpurple};

    
`

const Element_Detail_Title = styled.div.attrs({})`
    display: flex;
    align-items : center;
    justify-content : center;
    width: 10%;
    height: 100%;
    margin-top : 10px;
    background-color : ${props => props.theme.colors.lightpurple};
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray};
    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 30px;
    margin-bottom : 20px;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.white};
    
`

const Title_Inner_Container = styled.div.attrs({})`
    display :flex;
    flex-direction : column;
    width : 100%;
    height : 100%;
    border : none;
`
const Title_input = styled.input.attrs({ placeholder : "설문지 제목"})`
    display: flex;
    width: 100%;
    height: 60%;
    border: none;
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    &::placeholder {
        color : ${props => props.theme.colors.lightpurple};
    }
`
const Title_Content = styled.input.attrs({ placeholder : "제목에 대한 설명을 적어주세요 (선택사항)"})`
    display: flex;
    width: 100%;
    height: 40%;
    border: none;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
`
const Condition_Inner_Container = styled.div.attrs({})`
    display :flex;
    flex-direction : row;
    width : 100%;
    min-height : 100%;
    border : none;
`
const Condition_Title = styled.div.attrs({})`
    display: flex;
    justify-content : space-between;
    width: 93%;
    height: 50%;
    border: none;
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.lightpurple};
    
`
const Condition_Detail_Title = styled.div.attrs({})`
    display: flex;
    align-items : center;
    justify-content : center;
    width: 100%;
    height: 100%;
    border: none;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    
`

const Condition_Select_Container = styled.div.attrs({})`
    display: flex;
    flex-direction : row;
    flex-wrap : wrap;
    align-items : center;
    
    width: 100%;
    min-height: 60px;
    border: none;
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    
`


const Condition_Content = styled.div.attrs({})`
    display: flex;
    width: 80%;
    height: 60px;
    border: none;
    margin-top : 60px;

    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 10px 5px 10px 55px;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};

`
const Bottom_Type1_Container = styled.div.attrs<any>((props => {
    selected : props.selected
}))`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 10px;
    background-color: ${(props) => (props.selected === "NORMAL" ? props.theme.colors.purple : props.theme.colors.lightgray)};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;
`;

const Bottom_Type2_Container = styled.div.attrs<any>((props => {
    selected : props.selected
}))`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 10px;
    background-color: ${(props) => (props.selected === "INSTANT_WIN" ? props.theme.colors.yellow : props.theme.colors.lightgray)};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;
`;




const Condition_Detail_Content = styled.div.attrs({})`
    display: flex;
    justify-content : center;
    align-items : center;
    width: 20%;
    min-width : 140px;
    height: 40px;
    border: none;
    margin-top : 60px;
    margin-left : 40px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};

`;

const MarkText = styled.mark.attrs({})`
    background-color : #CCE5FF;
    border-radius : 5px;
    
`;

export {MarkText,Age_Button,Gender_Button,Condition_Select_Container,Bottom_Type2_Container,Bottom_Type1_Container,Element_Bottom_Row_Container,Element_Detail_Title,Element_Input,Element_Title,Element_Top_Container,Element_Bottom_Container,Element_Detail_Inner_Container,Element_Detail_Container,Condition_Detail_Content,Condition_Detail_Title,Survey_Title_Container,Condition_Content,Condition_Inner_Container,Condition_Title,Survey_Container,Component_Container,Survey_Inner_Container,Background_Container,Survey_Detail_Container,Title_Inner_Container,Title_Content,Title_input}