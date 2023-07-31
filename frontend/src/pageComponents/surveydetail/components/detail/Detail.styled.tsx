import styled from 'styled-components'

const SurveyDetailContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 100%;
    padding: 20px 250px 40px 250px;
    gap: 136px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.white};
`

const SurveyContent = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    height: 600px;
    width: 450px;
    padding: 20px 0px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;
`

const SurveyTitle =styled.div.attrs<any>((props) => ({}))`
    width: 100%;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    margin-top: 8px;

`

const SurveyProfile = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: center;
    gap: 8px;
`

const SurveyProfileName = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.gray};
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`
const SurveyPurpose = styled.div.attrs<any>((props) => ({}))`
    margin-top: 20px;
    color: ${(props) => props.theme.colors.black};
    font-family:  ${(props) => props.theme.fonts.HangeulFontMedium};
    width: 450px;
`

const SurveyInformation = styled.div.attrs<any>((props) => ({}))`
    height: 46px;
    padding: 12px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const SurveyInformationTitle = styled.div.attrs<any>((props) => ({}))`
    color: #6D7075;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: ${(props) => props.theme.fontSizes.small};
    width: 60px;
`
const SurveyInformationContent = styled.div.attrs<any>((props) => ({}))`
   color: #45474D;
    text-align: right;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: ${(props) => props.theme.fontSizes.small};
`
const SurveyInformationContentHighLight = styled.span.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.purple};;
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.small};
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
    gap: 15px;
`

const SurveyCard = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    padding: 10px 24px;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    border: 1px solid black;
    border-radius: 16px;
    width: 140px;
    height: 90px;
`

const SurveyCardTitle = styled.div.attrs<any>((props) => ({}))`
    width: 90px;
    height: 20px;
    color: #6D7075;
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: ${(props) => props.theme.fontSizes.small};
    `
    

const SurveyCardContent = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: flex-end;
`

const SurveyCardTime = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.EnglishFontLight};
    font-size: ${(props) => props.theme.fontSizes.medium};
    color : ${(props) => props.theme.colors.purple};
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: flex-end;
`

const SurveyCardContentHangeul = styled.div.attrs<any>((props) => ({}))`
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: flex-end;
`

const ButtonAndShare = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: 450px;
    height: 48px;
`

export { SurveyDetailContainer, SurveyContent, SurveyTitle,SurveyProfile, SurveyProfileName, SurveyPurpose, SurveyInformation, 
    SurveyInformationTitle, SurveyInformationContent, SurveyInformationContentHighLight, SurveyFooter, SurveyCard, SurveyCardTitle, 
    SurveyCardContent, SurveyCardTime, SurveyCardContentHangeul, SurveyCardContainer, ButtonAndShare}