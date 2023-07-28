import { StyledTag } from '@/components/card/Card.styled'
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
    gap: 20px;
`

const SurveyCard = styled.div.attrs<any>((props) => ({}))`
    padding: 20px 24px;
    flex-direction: column;
    gap: 16px;
    border: 1px solid black;
    border-radius: 16px;
    width: 189px;
    height: 107px;
`
export {SurveyDetailPage, BackButtonContainer, BackButton, SurveyDetailContainer, SurveyContent, SurveyTitle,
     SurveyProfile, SurveyProfileName, SurveyPurpose, SurveyInformation, SurveyInformationTitle, SurveyInformationContent,
     SurveyFooter, SurveyCard, SurveyCardContainer }