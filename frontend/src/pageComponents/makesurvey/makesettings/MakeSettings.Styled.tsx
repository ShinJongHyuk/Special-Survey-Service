import styled from 'styled-components'

const Survey_Container = styled.div.attrs({})`
    display: flex;
    width: 100%;
    min-height: 100%;
    justify-content: center;


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
    width: 55%;
    min-height: 100%;

    position: absolute;
  
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
    padding : 25px 5px 25px 55px;
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
`;

const Element_Detail_Inner_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    justify-content : center;
    width : 100%;
    min-width : 350px;
    min-height : 120px;


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


`

const Element_Title = styled.div.attrs({})`
    display: flex;
    align-items : center;
 
    width: 100%;
    height: 100%;
    border: none;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.lightpurple};
    padding : 0px 0px 0px 0px;
    
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

`

export {Element_Input,Element_Title,Element_Top_Container,Element_Bottom_Container,Element_Detail_Inner_Container,Element_Detail_Container,Condition_Detail_Content,Condition_Detail_Title,Survey_Title_Container,Condition_Content,Condition_Inner_Container,Condition_Title,Survey_Container,Component_Container,Survey_Inner_Container,Background_Container,Survey_Detail_Container,Title_Inner_Container,Title_Content,Title_input}