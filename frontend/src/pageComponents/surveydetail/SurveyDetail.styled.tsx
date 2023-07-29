import styled, { css } from 'styled-components'

const SurveyDetailPage = styled.div.attrs<any>((props) => ({}))`
    height: 100vh;
`
const BackButtonContainer = styled.div.attrs<any>((props) => ({}))`
    position: relative;
    height: 120px;
`
const BackButton = styled.div.attrs<any>((props) => ({}))`
    position: absolute;
    bottom: 0px;
    cursor: pointer;
`

const SurveyDetailContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 100%;
    padding: 20px 100px 40px 100px;
    align-items: flex-start;
    gap: 136px;
`

const SurveyContent = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    height: 700px;
    width: 600px;
    padding: 20px 0px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;
`

const SurveyTitle =styled.div.attrs<any>((props) => ({}))`
    width: 100%;
    color: black;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: 56px;
    margin-top: 8px;
`

const SurveyProfile = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: center;
    gap: 8px;
`

const SurveyProfileName = styled.div.attrs<any>((props) => ({}))`
    color: rgba(0, 0, 0, 0.50);
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const SurveyPurpose = styled.div.attrs<any>((props) => ({}))`
    margin-top: 20px;
    color: #000;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 150% */
    width: 600px;
`

const SurveyInformation = styled.div.attrs<any>((props) => ({}))`
    height: 46px;
    padding: 12px 0px;
    display: flex;
    align-items: center;
    gap: 20px;
`

const SurveyInformationTitle = styled.div.attrs<any>((props) => ({}))`
    color: #6D7075;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 60px;
`
const SurveyInformationContent = styled.div.attrs<any>((props) => ({}))`
   color: #45474D;
    text-align: right;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const SurveyInformationContentHighLight = styled.span.attrs<any>((props) => ({}))`
    color: #8E69FF;
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

const SurveyFooter =  styled.div.attrs<any>((props) => ({}))`
    display: flex;
    gap: 20px;
    align-self: stretch;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`

const SurveyCardContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: flex-end;
    gap: 21px;
`

const SurveyCard = styled.div.attrs<any>((props) => ({}))`
    padding: 20px 24px;
    flex-direction: column;
    gap: 16px;
    border: 1px solid black;
    border-radius: 16px;
    width: 186px;
    height: 107px;
`

const ButtonAndShare = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: 600px;
    height: 64px;
`

const SurveyResultContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 1536px;
    padding: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background-color: #F0F2F3;
`

const SurveyResultComent = styled.div.attrs<any>((props) => ({}))`
    width: 418px;
    height: 96px;
    color: #000;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    
`

const SurveyProduct = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 868px;
    height: 305px;
    flex-direction: column;
    align-items: center;
`
const HighLightFont = styled.span.attrs<any>((props) => ({}))`
    color: #8E69FF;
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
`

const PercentageContainer = styled.div.attrs<any>((props) => ({}))`
    width: 480px;
    height: 499px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Percentage = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`
const PercentageCard = styled.div.attrs<any>((props) => ({}))`
    width: 113px;
    height: 133px;
    display: flex;
    padding: 23px 20px 8px 20px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 16px;
    border: 1px solid #E4E7EC;
    background: #FFF;
`
const PercentageElement = styled.div.attrs<any>((props) => ({}))`
    color: #8E69FF;
    text-align: right;
    font-family: ${(props) => props.theme.fonts.EnglishFontBold};
    font-size: 100px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

const Board = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 1336px;
    height: 601px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 1px solid #E4E7EC;
    background: #FFF;
`

const BoardTop = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    padding: 32px 40px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: #242424;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
`






const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: #E2E4EA;
    font-weight: bold;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 1336px;
    height: 64px;
    
`;

const TableBody = styled.tbody`
`;

const TableRow = styled.tr`
    height: 100%;
/* 찍수번째 노란색 (당첨 시 노란색으로 기능 바꾸기) */
  &:nth-child(even) { 
    background-color: #FFF129;
  }

  /* 원하는 tr 스타일을 정의 */
`;



const TableHeaderCell = styled.th`
  width: 334px;
  height: 100%;
`;

const TableDataCell = styled.td`
  /* 원하는 테이블 바디 셀 스타일을 정의 */
`;

const TalbeFont = styled.div`
    color: #000;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 100% */
`



export {SurveyDetailPage, BackButtonContainer, BackButton, SurveyDetailContainer, SurveyContent, SurveyTitle,
     SurveyProfile, SurveyProfileName, SurveyPurpose, SurveyInformation, SurveyInformationTitle, SurveyInformationContent,
     SurveyInformationContentHighLight, SurveyFooter, SurveyCard, SurveyCardContainer, ButtonAndShare, SurveyResultContainer, 
     SurveyResultComent, SurveyProduct, HighLightFont, PercentageContainer, Percentage, PercentageCard, PercentageElement,
     Board, BoardTop, TableContainer, Table, TableHead, TableBody, TableRow, TableHeaderCell, TableDataCell, TalbeFont }
     