'use client'
import Image from "next/image"
import {SurveyDetailPage, BackButtonContainer, BackButton, SurveyResultContainer} from "./SurveyDetail.styled"
import Board from './components/board'
import Detail from './components/detail'
import Result from './components/result'
import { useSurveyDetailHook } from "@/Hooks/useSurveyDetailHook"
import { useEffect } from "react"
const SurveyDetail = (props:any) => {
    const  { getSurveyDetail } = useSurveyDetailHook()
    useEffect(() => {
        getSurveyDetail()
    })
    return (
        <SurveyDetailPage>
            <BackButtonContainer>
                <BackButton>
                    <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48}></Image>
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