'use client'
import { BackButton, BackButtonContainer } from "../surveydetail/SurveyDetail.styled"
import Image from "next/image"
import { SurveyAnswerPage } from "./SurveyAnswer.styled"
import Title from './components/title'
import ProgressBar from './components/progressbar'
import Question from './components/question'
import { useSurveyAnswerHook } from "@/Hooks/useSurveyAnswerHook"
import { useEffect } from "react"


interface questionType {
    content : string
    id : string
    multipleChoices : any
    questionNumber : string
    type : string
}

const SurveyAnswer = (props:any) => {
    const { surveyInformation, getSurveyQuestion } = useSurveyAnswerHook()
    useEffect(() => {
        getSurveyQuestion()
    },[])
    useEffect(() => {
        if (surveyInformation) {
            console.log(surveyInformation);
        }
    }, [surveyInformation]);

    const questions = surveyInformation?.questions
    
    return (
        <SurveyAnswerPage>
            <BackButtonContainer bgcolor="white">
                <BackButton>
                <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48}></Image>
                </BackButton>
            </BackButtonContainer>

            <Title title={surveyInformation?.title} type={surveyInformation?.surveyCategoryType}></Title>
            <ProgressBar
            id={surveyInformation?.id}
            questionsCount={surveyInformation?.questions.length}
            type={surveyInformation?.surveyCategoryType} 
            closedHeadCount={surveyInformation?.closedHeadCount}
            headCount={surveyInformation?.headCount}
            ></ProgressBar>
            {questions && questions.map((question:questionType) => {
                return (
                <Question
                    key={question.id}
                    content={question.content}
                    type={question.type}
                    multipleChoices={question.multipleChoices}
                    questionNumber={question.questionNumber}
                    surveyCategoryType={surveyInformation?.surveyCategoryType}
                />
                   
                )
            })}
        </SurveyAnswerPage>
    )
}

export default SurveyAnswer