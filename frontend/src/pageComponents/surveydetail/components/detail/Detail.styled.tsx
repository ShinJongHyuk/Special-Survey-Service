import styled from 'styled-components'

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
    display: flex;
    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-end;    
    gap: 16px;
    flex: 1 0 0;
    border: 1px solid black;
    border-radius: 16px;
    width: 186px;
    height: 107px;
`

const SurveyCardTitle = styled.div.attrs<any>((props) => ({}))`
    width: 139px;
    height: 20px;
    color: #6D7075;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const SurveyCardContent = styled.div.attrs<any>((props) => ({}))`
    width: 139px;
    height: 29px;
    color: #000;
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
`

const ButtonAndShare = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: 600px;
    height: 64px;
`

export { SurveyDetailContainer, SurveyContent, SurveyTitle,
    SurveyProfile, SurveyProfileName, SurveyPurpose, SurveyInformation, SurveyInformationTitle, SurveyInformationContent,
    SurveyInformationContentHighLight, SurveyFooter, SurveyCard, SurveyCardTitle, SurveyCardContent, SurveyCardContainer, ButtonAndShare}