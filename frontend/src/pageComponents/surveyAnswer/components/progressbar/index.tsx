'use client'
import { useEffect, useState } from 'react'
import { ProgressContainer, ProgressBar, ProgressBarPercentage } from './ProgressBar.styeld'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
import surveyPost from '@/api/surveyAnswer/surveyPost'
import { useRouter } from 'next/navigation'

interface propsType {
    id: any
    questionsCount: any
    type: any
}

const ProgressBarComponent = (props: propsType) => {
    const router = useRouter()
    const answer = useSurveyAnswerStore((state:any) => state.answer)
    const resetAnswer = useSurveyAnswerStore((state:any) => state.resetAnswer)
    const checkBoxAnswer = useSurveyAnswerStore((state:any) => state.checkBoxAnswer)
    const resetCheckBox = useSurveyAnswerStore((state:any) => state.resetCheckBox)
    const dateAnswer = useSurveyAnswerStore((state:any) => state.dateAnswer)
    const resetDateAnswer = useSurveyAnswerStore((state:any) => state.resetDateAnswer)
    const timeAnswer = useSurveyAnswerStore((state:any) => state.timeAnswer)
    const resetTimeAnswer = useSurveyAnswerStore((state:any) => state.resetTimeAnswer)
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const resetLinkNumber = useSurveyAnswerStore((state:any) => state.resetLinkNumber)
    const [count, setCount] = useState<any>([]) 
    const percentage = answer && ((answer.length + count.length + dateAnswer.length + timeAnswer.length)/(props.questionsCount-linkNumber.length)) * 100
    const viewPercentage = Math.round(percentage)

    useEffect(() => {
        resetAnswer()
        resetCheckBox()
        resetDateAnswer()
        resetTimeAnswer()
        resetLinkNumber()
    },[])

    useEffect(() => {
        console.log(answer.length)
        if (checkBoxAnswer.length === 0) {
            setCount([])
        } else {
            checkBoxAnswer.map((e: any) => {
                if (!count.includes(e.questionId)) {
                    setCount([
                        ...count,
                        e.questionId
                    ])
                }
            })
        }

    }, [checkBoxAnswer])

    const onClick = async () => {
        if (percentage === 100) {
            const answers = [
                ...answer,
                ...checkBoxAnswer,
                ...dateAnswer,
                ...timeAnswer
            ]

            const res = await surveyPost(answers, props.id)
            if (res?.data.success === true) {
                if (props.type === "NORMAL") {
                    alert('설문응답을 완료하였습니다')
                    router.push("/")
                } else {
                    alert('설문응답을 완료하였습니다')
                    router.push("/instantwincheck/" + props.id)
                }
            } else if (res?.data.success === false) {
                alert(res.data.apiError.message)
            }
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