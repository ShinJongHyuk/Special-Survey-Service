import styled, {css} from 'styled-components'


const Top_Option_Container = styled.div.attrs({})`
    display :flex;
    justify-content : center;
    width : 100%;
    height : 100px;
    position : absolute;
    top : 10%;
`


const Toggle_Component = styled.button.attrs<any>((props) =>({
    isSelected : props.isSelected
}))`
    cursor: pointer;
    display: flex;
    width: 70px;
    height: 60px;
    border: none;

    background-color: white;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.HangeulFontRegular};

    ${props =>
    props.isSelected &&
    css`
      border-bottom: 2px solid ${props => props.theme.colors.purple};
      color: ${props => props.theme.colors.purple};
    `}
    
`;

export {Top_Option_Container,Toggle_Component}