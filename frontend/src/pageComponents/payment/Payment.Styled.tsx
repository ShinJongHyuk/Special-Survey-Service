import styled from 'styled-components'

const Main_Container = styled.div.attrs({})`
    display : flex;
    position : absolute;
    top : 8%;
    width : 100%;
    height : 93%;
    background-image: url("/survey/background_survey7.svg");
    background-repeat: repeat;
    background-color: white;
    padding : 20px 20px 20px 20px;


`

const Main_Inner_Container = styled.div.attrs({}) `
    display : flex;
    flex-direction : column;
    width : 100%;
    height: 100%;

    justify-content : center;
    align-items : center;
    margin-right : 5%;

`

const Top_Container = styled.div.attrs({}) `
    display : flex;
    width : 100%;
    height: 15%;
    align-items : center;
    margin-left : 400px;
    padding : 0px 40px;
`

const Bottom_Container = styled.div.attrs({}) `
    display : flex;
    width : 100%;
    min-width : 100px;
    height: 85%;
    align-items : flex-start;
    margin-left : 350px;
    padding : 0px 0px 0px 40px;
`

const Pay_Container = styled.div.attrs<any>({})`
    display: flex;
    flex-direction : column;
    width: 23%;
    min-width : 220px;
    height: 95%;
    align-items :center;
    flex-wrap: wrap;
    margin-left : 100px;
    /* background-image: url("/survey/background_survey5.png");
    background-repeat: repeat; */
    background-color : ${props => props.theme.colors.white};
    box-shadow : 2px 2px 0px 0px ${props => props.theme.colors.gray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    
    padding : 40px 15px 15px 15px;


`;

const Info_Inner_Box = styled.div.attrs({})`
    display :flex;
    flex-direction : column;
    width : 100%;
    align-items :center;
    height : 28%;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    padding : 0px 20px 0px 20px;
`

const Info_LR_Box = styled.div.attrs({})`
    display :flex;
    flex-direction : column;
    width : 70%;
    align-items :center;
    height : 100%;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};

`

const Image_Wrapper =styled.label.attrs({})`
    display :flex;
    flex-direction : column;
    width : 30%;
    height : 100%;
    align-items : center;
    justify-content : flex-end;
`
const Info_Top_Box = styled.div.attrs({})`
    display :flex;
    width : 100%;
    height : 40%;
    align-items : center;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    padding : 0px 20px 0px 20px;
`

const Info_Bottom_Box = styled.div.attrs({})`
    display :flex;
    width : 100%;
    height : 40%;
    align-items : center;
    margin-left : 23%;
    background-color: white;
    border : 3.5px solid ${props => props.theme.colors.purple};
    border-radius : 16px;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    padding : 0px 20px 0px 20px;
`


const Information_Container = styled.div.attrs({})`
    display: flex;
    flex-direction : column;
    width: 50%;
    min-width : 420px;
    height: 95%;

    flex-wrap: wrap;

    /* background-image: url("/survey/background_survey5.png");
    background-repeat: repeat; */
    background-color : ${props => props.theme.colors.white};
    box-shadow : 2px 2px 0px 0px ${props => props.theme.colors.gray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 30px 30px 30px 30px;

`;

const Title_Text = styled.label.attrs({})`
    display : flex;
    align-items : center;
    width : 13%;
    min-width : 150px;
    margin-top : 30px;
    height : 100%;
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
`

const SelectBox = styled.div.attrs({})`
    display: flex;
    width: 90%;
    min-width : 100px;
    height: 9%;
    border-radius: 30px;
    border : 0px solid ${props => props.theme.colors.purple};
    padding : 10px, 10px;
    cursor: pointer;
    `
const SelectBox_List = styled.select.attrs({})`
    display : flex;

    width: 100%;
    height: 100%;
    text-align : center;

    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 30px;
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

const Selected_Box = styled.div.attrs({})`
    display : flex;
    flex-direction :column;
    align-items : center;
    width : 90%;
    height : 60%;
    border : 1px solid ${props => props.theme.colors.black};
    box-shadow : 1px 1px 0px 0px ${props => props.theme.colors.lightgray} ;
    border-radius : 30px;
    padding : 10px;
    margin-top : 20px;
    overflow : auto;
`

export {Selected_Box,SelectBox,SelectBox_List,SelectBox_Option,Info_LR_Box,Image_Wrapper,Info_Top_Box,Info_Bottom_Box,Info_Inner_Box,Bottom_Container,Top_Container,Main_Inner_Container,Title_Text,Main_Container,Information_Container,Pay_Container}