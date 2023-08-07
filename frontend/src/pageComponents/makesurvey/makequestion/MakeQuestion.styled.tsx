import styled, { css }from 'styled-components'
import TextAreaAutoSize from 'react-textarea-autosize'

const Survey_Container = styled.div.attrs({})`
    display: flex;
    width: 100%;
    min-height: 300%;

    justify-content: center;
    background-image: url("/survey/background_survey3.png");
    background-repeat: repeat;
    position: absolute;
    top: 18%;
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
    height : 100%;
    min-height: 100%;
    background-color : white;
    position: relative;
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
    height: 20%;
    min-height : 120px;
    margin-bottom : 20px;
    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 10px 5px 10px 10px;
`;

const Survey_MainImage_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 100%;
    min-width : 600px;
    min-height : 100px;

    box-sizing : border-box;
    box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    background-color : ${props => props.theme.colors.lightpurple};
    border-radius : 30px;
    padding : 0px 0px 0px 57px;
`;

const Title_Inner_Container = styled.div.attrs({})`
    display :flex;
    flex-direction : column;
    width : 100%;
    height : 100%;
    min-height : 100px;
    border : none;
    padding : 0px 40px;
`
const Title_input = styled(TextAreaAutoSize)`
    display: flex;
    width: 100%;
    height : 50px;
    min-height: 50px;
    margin-top : 13px;
    resize : none;
    border: none;
    font-size: ${props => props.theme.fontSizes.mediumlarge};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    &::placeholder {
        color : black;
    }
    &:focus {
        outline : none;
    }
    
`
const Title_Content = styled(TextAreaAutoSize)`
    display: flex;
    width: 100%;
    height: 40px;
    min-height : 40px;
    border: none;
    resize: none;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
    &:focus {
        outline : none;
    }
`

const Image_Inner_Container = styled.div.attrs({})`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 100%;
    height: 100%;
    padding-right : 50px;
    margin-top : 13px;



`

const Inner_Text_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 70%;
    height: 100%; 
    align-items : center;
    justify-content : center;

`

const Inner_Icon_Container = styled.div.attrs({})`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 70px;
    height: 70px; 
    border-radius : 100%;
    background-color : #C6BEE5;
    cursor: pointer;
`

const Image_Text_Header = styled.label.attrs({})`
    display: flex;
    align-items : center;
    width: 100%;
    height: 60%;
    border: none;
    color : white;
    background-color: ${props => props.theme.colors.lightpurple};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    &::placeholder {
      color: white;
    }
`

const Image_Text_Content = styled.label.attrs({})`
    display: flex;
    align-items : top;
    width: 100%;
    height: 40%;
    margin-left : 3px;
    border: none;
    color : white;
    background-color: ${props => props.theme.colors.lightpurple};
    font-size: 12px;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    &::placeholder {
      color: white;
    }
`

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
    border : 3px solid lightgray;
    cursor: pointer;
    opacity: 0; 
    transition: opacity 0.2s ease-in-out; 
`;

const ImagePreiew_Box = styled.div`
    display: flex;
    position : relative;

    width: 100px;
    height: 70px;
    
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



export {Component_Container,Survey_Inner_Container,Image_Delete_Button,ImagePreiew_Box,ImagePreview,UploadImage,Image_Text_Content,Image_Text_Header,Inner_Icon_Container,Inner_Text_Container,Image_Inner_Container,Title_Content,Title_input,Title_Inner_Container,Survey_Container,Background_Container,Survey_Title_Container,Survey_MainImage_Container}