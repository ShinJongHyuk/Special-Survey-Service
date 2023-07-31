'use client'
import Image from "next/image"
import {SurveyDetailPage, BackButtonContainer, BackButton, SurveyResultContainer} from "./SurveyDetail.styled"
import Board from './components/board'
import Detail from './components/detail'
import Result from './components/result'
const SurveyDetail = (props:any) => {
  
    return (
        <SurveyDetailPage>
            <BackButtonContainer>
                <BackButton>
                    <Image src="/surveyDetail/BackImg.png" alt="back" width={248} height={48}></Image>
                </BackButton>
            </BackButtonContainer>
            
            <Detail type="즉시당첨"></Detail>
            
            <SurveyResultContainer>
                <Result type="즉시당첨"></Result>
                <Board type="즉시당첨"></Board>
            </SurveyResultContainer>
        </SurveyDetailPage>
    )
}

export default SurveyDetail