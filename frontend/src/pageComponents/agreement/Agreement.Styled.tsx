import styled from 'styled-components'

const AgreementPage = styled.div.attrs({})`
    padding-top: 120px;
`

const Main_Container = styled.div.attrs({})`
    display : flex;
    position : absolute;
    width : 100%;
    height : 80%;

    justify-content : center;
    background-image: url("/survey/background_survey7.svg");
    background-repeat: repeat;
    background-color: white;
`
const Information_Container = styled.div.attrs({})`
    display: flex;
    flex-direction : row;
    width: 40%;
    min-width : 100px;
    height: 90%;
    align-items : center;
    justify-content : center;
    flex-wrap: wrap;

    /* background-image: url("/survey/background_survey5.png");
    background-repeat: repeat; */
    background-color : ${props => props.theme.colors.white};
    box-shadow : 2px 2px 0px 0px ${props => props.theme.colors.gray} ;
    border : 1px solid ${props => props.theme.colors.lightgray};
    border-radius : 30px;
    padding : 30px 30px 30px 30px;
    cursor: pointer; 

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
  border-collapse: collapse;
  width: 90%;
  height: 0%;
  overflow: auto;
  margin: auto;
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  color: ${props => props.theme.colors.black};

`;

const StyledTr = styled.tr.attrs({})`
`;

const StyledTd = styled.td`
    font-size: ${props => props.theme.fontSizes.small};
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    border: 1px solid #dddddd;

    padding: 8px;
`;

const StyledTh = styled.th`
    background-color: ${props => props.theme.colors.yellow};
    font-size: ${props => props.theme.fontSizes.medium};
    text-align: center;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const StyledThead = styled.thead``;
const StyledTbody = styled.tbody``;
const StyledTfoot = styled.tfoot``;

const ButtonBox = styled.div.attrs({})`
    display : flex;
    flex-direction : row;
    width : 90%;
    height : 15%;
    gap : '10px';
    margin-top : 7%;


`


export {ButtonBox,StyledTbody,StyledTfoot,StyledThead,StyledTr,StyledTd,StyledTable,StyledTh,Title_Text,AgreementPage,Main_Container,Information_Container};