import styled from 'styled-components'


const Main_Box = styled.div.attrs({})`
    width : 220px;
    height : 150px;
    border : 3px solid yellow;
    margin-top : 20px;
    border-radius : 4px;

`

const Top_Box = styled.div.attrs({})`
    width : 100%;
    height : 65%;
    border : 1px solid yellow;
`

const Bottom_Box = styled.div.attrs({})`
    display :flex;
    flex-direction : column;
    width : 100%;
    height : 35%;
    border : 2px solid lightyellow;
    align-items : center;
    justify-content : center;
    text-align : center;
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    color: ${(props) => props.theme.colors.black};
`

const Bottom_Inner = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    width : 100%;
    height : 50%;
    justify-content : center;
    gap : 10px;
`


const Item_Img = styled.img`
    width : 100%;
    height : 100%;
`



export {Item_Img,Main_Box,Top_Box,Bottom_Box,Bottom_Inner}