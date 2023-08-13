import styled from 'styled-components'

const PaymentInfoPage = styled.div.attrs({})`
    padding-top: 152px;
`

const Main_Container = styled.div.attrs({})`
    display : flex;
    position : absolute;
    width : 100%;
    height : 100%;
    
    background-image: url("/survey/background_survey7.svg");
    background-repeat: repeat;
    background-color: white;
    padding : 0px 20px 20px 20px;


`

const Main_Inner_Container = styled.div.attrs({}) `
    display : flex;
    flex-direction : column;
    width : 100%;
    height: 100%;
    align-items : center;
    justify-content : center;
 


`

const Top_Container = styled.div.attrs({}) `
    display : flex;
    width : 100%;
    height: 15%;
    justify-content : center;
    align-items : center;

 
`
const Bottom_Container = styled.div.attrs({}) `
    display : flex;
    width : 100%;
    min-width : 100px;
    height: 85%;
    align-items : flex-start;
    justify-content : center;
`

const Title_Text = styled.label.attrs({})`
    display : flex;
    align-items : center;
    width : 59%;

    height : 100%;
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    
    @media (max-width: 800px) {
        font-size: ${props => props.theme.fontSizes.medium}; 
    }
`

const Information_Container = styled.div.attrs({})`
    display: flex;
    flex-direction : column;
    width: 60%;
    min-width : 420px;
    height: 85%;

    flex-wrap: wrap;

    /* background-image: url("/survey/background_survey5.png");
    background-repeat: repeat; */
    background-color : ${props => props.theme.colors.white};
    box-shadow : 2px 2px 0px 0px ${props => props.theme.colors.gray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 30px 30px 0px 30px;
    cursor: pointer; 
    transform-style: preserve-3d; 


    &:hover {
        transform: rotateY(180deg);
        transition: transform 0.8s ease-in-out; 
    }
`;

const Info_Inner_Box = styled.div.attrs({})`
    display :flex;
    flex-direction : column;
    width : 100%;
    align-items :center;
    height : 20%;
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
    width : 35%;
    flex : 1;
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
    width : 70%;
    height : 40%;
    align-items : center;
    margin-right : 10%;
    background-color: white;
    border : 3.5px solid ${props => props.theme.colors.purple};
    border-radius : 16px;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    padding : 0px 20px 0px 20px;
`

export {Image_Wrapper,Info_Inner_Box,Info_Bottom_Box,Info_Top_Box,Info_LR_Box,PaymentInfoPage,Main_Container,Main_Inner_Container,Top_Container,Bottom_Container,Title_Text,Information_Container}
