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
    height: auto;
`

export {SurveyResult, ChartColor, ChartInfo, ChartContainer, ChartInfoContainer}