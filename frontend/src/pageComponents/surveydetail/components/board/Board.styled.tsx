import styled from 'styled-components'

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

const BoardTopLive = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 637.5px;
    height: 25px;
    align-items: center;
    gap: 12px;
`

const BoardTopLiveFont = styled.div.attrs<any>((props) => ({}))`
    color: #FFF;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const BoardTopLiveCount = styled.div.attrs<any>((props) => ({}))`
    color: #FFF129;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const BoardTopLivetime = styled.div.attrs<any>((props) => ({}))`
    margin-left: auto;
    margin-right: 4px;
    color: #9EA4A3;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 20px;
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
    display: flex;
    height: 64px;
/* 찍수번째 노란색 (당첨 시 노란색으로 기능 바꾸기) */
  &:nth-child(even) { 
    background-color: rgba(255,241,55,0.3);
  }

  /* 원하는 tr 스타일을 정의 */
`;

const TableHeaderCell = styled.th`
    width: 334px;
    height: 64px;
    display: flex;
    padding: 24px 40px;
    align-items: center;
    gap: 8px;
    
`;

const TableDataCell = styled.td`
  width: 334px;
    height: 64px;
    display: flex;
    padding: 24px 40px;
    align-items: center;
    gap: 8px;
`;

const TableFont = styled.span`
    color: #000;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; 
`

const TableNumberFont = styled.span`
    color: #000;
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; 
`

export { Board, BoardTop, BoardTopLive, BoardTopLiveFont, BoardTopLiveCount, BoardTopLivetime, TableContainer,
        Table, TableHead, TableBody, TableRow, TableHeaderCell, TableDataCell, TableFont, TableNumberFont}