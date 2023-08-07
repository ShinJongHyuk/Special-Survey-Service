'use client'
import { useEffect, useState } from 'react'
import { ProgressContainer, ProgressBar, ProgressBarPercentage } from './ProgressBar.styeld'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
import surveyPost from '@/api/surveyAnswer/surveyPost'

interface propsType {
    id : any
    questionsCount : any
    type : any
}

const ProgressBarComponent = (props:propsType) => {
    const answer = useSurveyAnswerStore((state:any) => state.answer)
    const checkBoxAnswer = useSurveyAnswerStore((state:any) => state.checkBoxAnswer)
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const [count, setCount] = useState<any>([]) 
    const percentage = answer && ((answer.length + count.length)/(props.questionsCount-linkNumber.length)) * 100
    const viewPercentage = Math.round(percentage)

    useEffect(() => {
        console.log(answer.length)
        if (checkBoxAnswer.length === 0) {
            setCount([])
        } else {
            checkBoxAnswer.map((e:any) => {
                if (!count.includes(e.questionId)) {
                    setCount([
                        ...count,
                        e.questionId
                    ])
                }
            })
        }
        
    },[checkBoxAnswer])

    const onClick = async () => {
        if (percentage === 100) {
            const answers = [
                ...answer,
                ...checkBoxAnswer
            ]

            await surveyPost(answers, props.id)
            console.log(answers)
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