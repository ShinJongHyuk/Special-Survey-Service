import styled, { css } from "styled-components";

const Board = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const BoardTop = styled.div`
  display: flex;
  height: 78px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: ${(props) => props.theme.colors.black};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

const BoardTopLiveFont = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const BoardCount = styled.div`
  font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.yellow};
`;


const TableContainer = styled.div`
  max-height: 400px;
  /* width: 1000px; */
  overflow-x: auto;
`;

const TableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.lightgray};
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TableRow = styled.tr.attrs<any>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;
    return css`
      display: flex;
      height: 60px;
      border-bottom: 1px solid lightgray;
      background-color: ${() => {
        if (props.iswin === "true") {
          if (props.type === "NORMAL") {
            return "rgba(168, 140, 255, 0.30)";
          } else {
            return "rgba(255,241,41,0.3)";
          }
        }
        return white;
      }};
    `;
  }}
`;

const TableHeaderCell = styled.th`
  display: flex;
  padding: 0px 40px;
  align-items: center;

  .text {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: 16px;
  }
`;

const TableDataCell = styled.td`
  display: flex;
  padding: 0px 0px 0px 40px;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.small};

  .number {
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
  }
  .korean {
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  }
`;

export {
  Board,
  BoardTop,
  BoardCount,
  BoardTopLiveFont,
  TableContainer,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableDataCell,
};
