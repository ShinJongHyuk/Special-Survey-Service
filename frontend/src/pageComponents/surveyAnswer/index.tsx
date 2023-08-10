'use client'
import Image from "next/image"
import { SurveyAnswerPage, BackButton, BackButtonContainer } from "./SurveyAnswer.styled"
import Title from './components/title'
import ProgressBar from './components/progressbar'
import Question from './components/question'
import { useSurveyAnswerHook } from "@/Hooks/useSurveyAnswerHook"
import { useEffect } from "react"
import SurveyAnswerComponent from "@/components/common/navbar/midComponent/SurveyAnswerCompnent"
import { useRouter } from "next/navigation"


interface questionType {
    title : string
    content : string
    id : string
    multipleChoices : any
    questionNumber : string
    type : string
    essential : boolean
}

const SurveyAnswer = (props:any) => {
    const router = useRouter()
    const { surveyInformation, getSurveyQuestion } = useSurveyAnswerHook()
    useEffect(() => {
        getSurveyQuestion(props.id)
    },[])
    useEffect(() => {
        if (surveyInformation) {
            console.log(surveyInformation);
        }
    }, [surveyInformation]);

    const questions = surveyInformation?.questions
    
    return (
        <SurveyAnswerPage>

            <div style={{position:"fixed", height:"250px", width:"100%"}}>
            <div style={{display:"flex", backgroundColor:"white"}}>
            <BackButtonContainer bgcolor="white">
                <BackButton>
                <Image src="/surveyDetail/BackImg.png" alt="back" width={36} height={36} onClick={() => router.back()}></Image>
                </BackButton>
            </BackButtonContainer>

            <Title 
            title={surveyInformation?.title} 
            content={surveyInformation?.content} 
            type={surveyInformation?.surveyCategoryType}
            endTime={surveyInformation?.endTime}></Title>
            </div>
            <ProgressBar
            id={surveyInformation?.id}
            questionsCount={surveyInformation?.questions.length}
            type={surveyInformation?.surveyCategoryType}
            ></ProgressBar>
            </div>
            <div style={{paddingTop:"190px", paddingBottom: "10px"}}>
            {questions && questions.map((question:questionType) => {
                return (
                <Question
                    id={question.id}
                    key={question.id}
                    title={question.title}
                    content={question.content}
                    type={question.type}
                    multipleChoices={question.multipleChoices}
                    questionNumber={question.questionNumber}
                    surveyCategoryType={surveyInformation?.surveyCategoryType}
                />
                   
                )
            })}
            </div>
        </SurveyAnswerPage>
    )
}

export default SurveyAnswer