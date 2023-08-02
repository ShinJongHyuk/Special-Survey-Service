'use client'
import { StyledTag } from "@/components/card/Card.styled"
import { BackButton, BackButtonContainer } from "../surveydetail/SurveyDetail.styled"
import Image from "next/image"
import { SurveyAnswerPage } from "./SurveyAnswer.styled"
import MultipleChoice from "@/components/surveyanswer/multiplechoice"
import CheckBox from "@/components/surveyanswer/checkbox"
import Title from './components/title'
import ProgressBar from './components/progressbar'
import Question from './components/question'
const SurveyAnswer = (props:any) => {
    return (
        <SurveyAnswerPage>
            <BackButtonContainer bgcolor="white">
                <BackButton>
                <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48}></Image>
                </BackButton>
            </BackButtonContainer>

            <Title></Title>
            <ProgressBar></ProgressBar>
            <Question type="multiplechoice"></Question>
            <Question type="checkbox"></Question>
            <Question type="shortform"></Question>
            <Question type="longform"></Question>
        </SurveyAnswerPage>
    )
}

export default SurveyAnswer