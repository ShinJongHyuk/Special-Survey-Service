import styled from 'styled-components'


const ToolbarBox = styled.div.attrs({})`
    display: flex;
    flex-direction: column;
    width: 56px;
    height: 200px;
    margin-left: 20px;
    margin-top : 100px;
    border: 1px solid black;
    border-radius: 100px;
    background-color: black;
`;

const Toolbar_InnerBox = styled.div.attrs({})`
    display : flex;
    width : 56px;
    height: 56px;
    border : none;
    padding : 30px 18px;

`

export {ToolbarBox,Toolbar_InnerBox}