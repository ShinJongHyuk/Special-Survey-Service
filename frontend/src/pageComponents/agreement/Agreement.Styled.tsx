import styled from 'styled-components'

const AgreementPage = styled.div.attrs({})`
    padding-top: 120px;
`

const Main_Container = styled.div.attrs({})`
    display : flex;
    /* position : absolute;
    width : 100%;
    height : 80%; */

    justify-content : center;
    background-color: white;
`
const Information_Container = styled.div.attrs({})`
    display: flex;
    flex-direction: column;
    width: 480px;
    min-width : 400px;
    height: 82%;
    align-items : center;
    justify-content : center;

    gap:20px;
    background-color : ${props => props.theme.colors.white};
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 40px 20px;

`;

const Title_Text = styled.label.attrs({})`
    display : flex;
    align-items : center;
    width : 59%;
    height : 100%;
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    color : ${props => props.theme.colors.black};
    
    @media (max-width: 800px) {
        font-size: ${props => props.theme.fontSizes.medium}; 
    }
`
const StyledTable = styled.table.attrs({})`
  width: 90%;

  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  color: ${props => props.theme.colors.black};

  margin-bottom: 30px;
`;



const StyledTd = styled.td`
    font-size: ${props => props.theme.fontSizes.small};
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    border: 1px solid #dddddd;
    vertical-align: middle;
    padding: 8px;
`;

const StyledTitleTh = styled.th`
    background-color: ${props => props.theme.colors.yellow};
    font-size: ${props => props.theme.fontSizes.small};
    text-align: center;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;
const StyledTh = styled.th`
    background-color: ${props => props.theme.colors.yellow};
    font-size: ${props => props.theme.fontSizes.small};
    text-align: center;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;


const ButtonBox = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    width : 90%;
    height : 11%;
`


export { StyledTitleTh, ButtonBox, StyledTd, StyledTable, StyledTh, Title_Text, AgreementPage, Main_Container, Information_Container };