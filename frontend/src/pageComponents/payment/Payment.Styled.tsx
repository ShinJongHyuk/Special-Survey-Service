import styled from 'styled-components'

const Main_Container = styled.div.attrs({})`
    display : flex;

    position : absolute;
    top : 8%;
    width : 100%;
    height : 92%;
    background-color: white;
    padding : 20px 20px 20px 20px;

`
const Pay_Container = styled.div.attrs<any>({})`
    display: flex;
    position : absolute;
    top : 15%;
    left : 75%;
    width: 17%;
    min-width : 100px;
    height: 80%;
    justify-content: center;
    flex-wrap: wrap;
    /* background-image: url("/survey/background_survey5.png");
    background-repeat: repeat; */
    background-color : ${props => props.theme.colors.lightgray};
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 2px solid ${props => props.theme.colors.gray};
    border-radius : 30px;
    padding : 30px 30px 30px 30px;

`;

const Information_Container = styled.div.attrs({})`
    display: flex;
    position : absolute;
    top : 15%;
    left : 10%;
    width: 55%;
    min-width : 100px;
    height: 80%;
    justify-content: center;
    flex-wrap: wrap;
    /* background-image: url("/survey/background_survey5.png");
    background-repeat: repeat; */
    background-color : ${props => props.theme.colors.lightgray};
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 2px solid ${props => props.theme.colors.gray};
    border-radius : 30px;
    padding : 30px 30px 30px 30px;

`;

const Title_Text = styled.label.attrs({})`
    display : flex;
    position : absolute;
    top : 6%;
    left : 11%;
    width : 10%;
    height : 10%;
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
`

export {Title_Text,Main_Container,Information_Container,Pay_Container}