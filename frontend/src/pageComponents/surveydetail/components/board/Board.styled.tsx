import styled, { css } from 'styled-components'

const Board = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 1136px;
    height: 500px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 1px solid #E4E7EC;
    background: #FFF;
`

const BoardTop = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    padding: 20px 40px;
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
    width: 1136px;
    height: 48px;
    
`;

const TableBody = styled.tbody`
`;

const TableRow = styled.tr.attrs<any>((props) => ({}))`
    ${(props) => {  
        const use = props.use
        const result = props.result || null
        const useStyles:any = {
            타임어택 : `
            
            `,

            즉시당첨 : `
                background-color : ${result === '당첨' ? "rgba(255,241,55,0.3)" : "white"}
            `
        } 
        return css`
            display: flex;
            height: 48px;
            border-bottom: 1px solid #E5E5E5;
            ${useStyles[use]}
        `
    }}
    `


const TableHeaderCell = styled.th`
    width: 284px;
    height: 48px;
    display: flex;
    padding: 16px 40px;
    align-items: center;
    gap: 8px;
    
`;

const TableDataCell = styled.td`
    width: 284px;
    height: 48px;
    display: flex;
    padding: 16px 40px;
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