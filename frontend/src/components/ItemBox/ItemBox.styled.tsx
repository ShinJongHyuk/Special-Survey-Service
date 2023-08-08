import styled from 'styled-components'


const Main_Box = styled.div.attrs({})`
    width : 220px;
    height : 150px;
    border : 1px solid black;
    margin-top : 20px;
    margin-bottom : 20px;
`

const Top_Box = styled.div.attrs({})`
    width : 100%;
    height : 70%;
    border : 1px solid black;
`

const Bottom_Box = styled.div.attrs({})`
    width : 100%;
    height : 30%;
    border : 1px solid black;
`

const Item_Img = styled.img`
    width : 100%;
    height : 100%;
`



export {Item_Img,Main_Box,Top_Box,Bottom_Box}