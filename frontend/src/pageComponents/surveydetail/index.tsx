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
                    <Image src="/BackImg.png" alt="back" width={248} height={48}></Image>
                </BackButton>
            </BackButtonContainer>
            
            <Detail type="타임어택"></Detail>
            
            <SurveyResultContainer>
                <Result></Result>
                <Board type="타임어택"></Board>
            </SurveyResultContainer>
        </SurveyDetailPage>
    )
}

export default SurveyDetail