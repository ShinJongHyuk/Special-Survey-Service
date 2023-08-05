import styled,{ThemeProvider} from 'styled-components'

const Dates_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 720px;
    min-height : 10px;

    gap : 30px;
    padding: 40px 25px;
`

const Dates_content_Box = styled.div.attrs({})`
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
    flex-direction : row;

    width : 100%;
    min-height : 10%;
    
`

const MultipleCheck = styled.input.attrs({ type: 'date' })`
    display : flex;
    width : 40%;
    height: 40px;
    border-radius : 50px;
    margin-right : 50px; 

    border : 2px solid ${props => props.theme.colors.purple};
    letter-spacing : 7px;
    text-indent : 10px;
    text-align : center;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.purple};

`;

const AddButton = styled.button.attrs({})`
    display : flex;
    width : 74px;
    text-align : center;
    
    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 20px;
    margin-left : 71px;
    background-color : white;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.purple};
    

`
const DeleteButton = styled.button.attrs({})`
  display: flex;

  margin-left : 100px;
  border : none;
  background-color: white;
  font-size: ${props => props.theme.fontSizes.medium};
  color: red;
  
`;

export {DeleteButton,AddButton,Dates_content_Box,MultipleCheck,Dates_Box}