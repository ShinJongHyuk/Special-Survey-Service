'use client'
import { useEffect, useState } from 'react'
import { ProgressContainer, ProgressBar, ProgressBarPercentage } from './ProgressBar.styeld'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
import surveyPost from '@/api/surveyAnswer/surveyPost'
const ProgressBarComponent = (props:any) => {
    const answer = useSurveyAnswerStore((state:any) => state.answer)
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const percentage = answer && (answer.length/(props.questionsCount-linkNumber.length)) * 100
    const viewPercentage = Math.round(percentage)
    useEffect(() => {
        // console.log({...props})
    })

    const onClick = async () => {
        if (percentage === 100) {
            await surveyPost(answer)
            console.log(answer)
            // 제출 api만들기
        }
    }
    return (
        <ProgressContainer>
                <ProgressBar type={props.type} width={percentage} onClick={onClick}></ProgressBar>
                <ProgressBarPercentage width={percentage}>{percentage === 100 ? "제출" : `${viewPercentage}%`}</ProgressBarPercentage>
        </ProgressContainer>
    )
}

export default ProgressBarComponent