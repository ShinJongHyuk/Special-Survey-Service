import styled, { css } from 'styled-components'

const Board = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 1136px;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.colors.lightgray};

`

const BoardTop = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: ${(props) => props.theme.colors.black};
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
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.medium}
`
const BoardTopLiveCount = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.yellow};;
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.medium}
`

const BoardTopLivetime = styled.div.attrs<any>((props) => ({}))`
    margin-left: auto;
    margin-right: 4px;
    color: ${(props) => props.theme.colors.lightgray};
    /* color: #9EA4A3; */
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.small};
    height: 20px;
`

const TableContainer = styled.div`
    height: 400px;
    overflow-x: auto;
    max-width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: ${(props) => props.theme.colors.lightgray};
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
            border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
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
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: 16px;
`

const TableNumberFont = styled.span`
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.small};
`

export { Board, BoardTop, BoardTopLive, BoardTopLiveFont, BoardTopLiveCount, BoardTopLivetime, TableContainer,
        Table, TableHead, TableBody, TableRow, TableHeaderCell, TableDataCell, TableFont, TableNumberFont}