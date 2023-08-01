import styled from 'styled-components'
import Link from 'next/link';


interface SurveyNavbarType {
  pathname?: string;
}

const Navbar_Container = styled.div`
    width: 100%;
    height: 160px;
    background-color: white;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;

    position: fixed;
    z-index: 1;

`
const Top_Container = styled.div`
    display : flex;
    flex-direction : row;
    align-items :center;
    width : 100%;
    height : 65%;
    padding : 10px 10px;

`
const Bottom_Container = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    width : 100%;
    height: 35%;
    border-top : 1px solid ${props => props.theme.colors.lightgray};
`

const Title_Container = styled.div`
    width : 30%;
    height : 100%;
    margin-top : 25px;
`

const Title_Content = styled.input.attrs({placeholder : "설문지 제목"})`
    width : 100%;
    height : 60%;
    border : none;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-weight : 800;
    
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.black};
    &::placeholder {
      color: ${props => props.theme.colors.gray};
      font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
      font-size: ${props => props.theme.fontSizes.medium};
      font-weight : bold;
    }
`
const Title_Label = styled.label.attrs({})`
    width : 100%;
    height : 40%;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};

    font-size: ${props => props.theme.fontSizes.xsmall};
    color: ${props => props.theme.colors.black};
    margin-left : 4px;

`
const Button_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    align-items : center;
    width : 28%;
    height : 60%;
    margin-left : 90px;
`

const Right_Button_Box = styled.div.attrs({})`
    display : flex;
    justify-content : space-evenly;
    width : 45%;
    
    height : 100%;
    align-items : center;
`

const Buttons = styled.button.attrs<any>((props) => ({
    backgroundcolor: props.backgroundcolor || 'white'
  }))`
    width: 100px;
    height: 100%;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.colors.black};
    background-color: ${(props) => props.backgroundcolor}; 
    border: 1px solid ${props => props.theme.colors.lightgray};
    border-radius: 100px;
    cursor: pointer;
  `;

const OptionBox = styled.button.attrs<any>((props) => ({
  style: {
    color: props.isSelected ? props.theme.colors.purple : props.theme.colors.black,
    borderBottom: props.isSelected ? '1px solid black' : 'none'
  },
}))`
  display: flex;
  width: 60px;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: none;

  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.regular};
  background-color: white;
  cursor: pointer;
`;

const StyledPropfileLink = styled(Link)`
  display: flex;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyledProfileName = styled.div`
  margin-left: 5px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`


const StyleLogout = styled.div`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`

export {Right_Button_Box,StyleLogout,StyledProfileName,StyledPropfileLink,OptionBox,Buttons,Button_Box,Title_Label,Title_Content,Title_Container,Top_Container,Bottom_Container,Navbar_Container}