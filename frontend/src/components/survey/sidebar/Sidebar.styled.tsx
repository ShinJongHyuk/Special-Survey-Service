import styled from 'styled-components'

const Sidebar_Container = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    width: 320px;
    height: 748px;
    border : 1px solid black;
    padding : 20px;
`;

const Title_Container = styled.div.attrs({})`
    display : flex;
    width : 276px;
    height : 71px;
    border : 1px solid black;
`;

const Align_Container = styled.div.attrs({})`
    display : flex;
    width : 276px;
    height : 71px;
    border : 1px solid black;  
`;

const List_Container = styled.div.attrs({})`
    display : flex;
    width : 276px;
    height : 71px;
    border : 1px solid black;    
`;

const Font_Container = styled.div.attrs({})`
    display : flex;
    width : 276px;
    height : 127px;
    border : 1px solid black;  
`;

const Color_Container = styled.div.attrs({})`
    display : flex;
    width : 276px;
    height : 183px;
    border : 1px solid black;
`;


export {Sidebar_Container,Title_Container,Align_Container,List_Container,Font_Container,Color_Container}