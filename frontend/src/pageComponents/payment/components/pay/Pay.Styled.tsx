import styled from 'styled-components'


const Pay_Container = styled.div.attrs({})`
    display: flex;
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

export {Pay_Container}