import styled from 'styled-components'


const Survey_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    width : 80%;
    min-height: 200px;
    margin-top : 14.5px;
    position : absolute;

    top : 6.0%;
    left : 3%;
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

    width : 800px;
    height : 150px;
    margin : 30px 30px 0px 30px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 20px 30px 25px 55px;
`;

const Survey_MainImage_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;

    width : 800px;
    height : 130px;
    margin : 12px 30px;
    margin-bottom : 40px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    background-color : ${props => props.theme.colors.lightpurple};
    border-radius : 30px;
    padding : 30px 30px 30px 55px;
`;

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
      color: ${props => props.theme.colors.black};
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

const Image_Inner_Container = styled.div.attrs({})`
    display : flex;
    justify-content : space-between;
    width : 100%;
    height: 100%;

`

const Inner_Text_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 70%;
    height: 100%; 

`

const Inner_Icon_Container = styled.div.attrs({})`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 10%;
    height: 100%; 
    border : 1px solid black;
    border-radius : 100%;
    background-color : ${props => props.theme.colors.orange};

`

const Image_Text_Header = styled.input.attrs({ placeholder : "설문 대표 이미지 1장"})`
    display: flex;
    width: 100%;
    height: 50%;
    border: none;
    color : white;
    background-color: ${props => props.theme.colors.lightpurple};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    &::placeholder {
      color: white;
    }
`

const Image_Text_Content = styled.input.attrs({ placeholder : "jpg 혹은 png 이미지 (선택사항)"})`
    display: flex;
    width: 100%;
    height: 50%;
    border: none;
    color : white;
    background-color: ${props => props.theme.colors.lightpurple};
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    &::placeholder {
      color: white;
    }
`
export {Image_Text_Content,Image_Text_Header,Inner_Icon_Container,Inner_Text_Container,Image_Inner_Container,Title_Content,Title_input,Title_Inner_Container,Survey_Container,Background_Container,Survey_Title_Container,Survey_MainImage_Container}