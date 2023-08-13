import styled from 'styled-components'

const SurveyResult = styled.div.attrs<any>((props) => ({}))`
    margin-left: 5px;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    padding-top: 3px;
`
const ChartColor = styled.div.attrs<any>((props) => ({}))`
    color : ${(props) => props.color};
    font-size: ${(props) => props.theme.fontSizes.small};
`
const ChartInfo = styled.div.attrs<any>((props) => ({}))`
    display: flex;
`

const ChartContainer = styled.div.attrs<any>((props) => ({}))`
    width: 200px;
    height: 200px;
`
const ChartInfoContainer = styled.div.attrs<any>((props) => ({}))`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ShortFormStatistics = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 500px;
    margin: 20px 0px 20px 0px; 
    padding: 10px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    background: ${(props) => props.surveyCategoryType ==="NORMAL" ?  "#F0E9FF": "#FFFFCC"};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
`

export {SurveyResult, ChartColor, ChartInfo, ChartContainer, ChartInfoContainer, ShortFormStatistics}