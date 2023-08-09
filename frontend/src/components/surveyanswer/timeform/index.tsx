'use client'
import { useEffect, useState } from "react"
import { TimeInput } from "./TimeForm.styled"
import useSurveyAnswerStore from "@/stores/useSurveyAnswer"

const TimeForm = (props:any) => {
    const questionNumber = props.questionNumber
    const [ disabled, setDisabled] = useState(true)
    const questionId = props.id
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const setTimeAnswer = useSurveyAnswerStore((state:any) => state.setTimeAnswer)
    const removeLinkTimeAnswer = useSurveyAnswerStore((state:any) => state.removeLinkTimeAnswer)
    console.log(props, "타임")

    useEffect(() => {
        if (linkNumber.includes(questionNumber)) {
            setDisabled(true)
            removeLinkTimeAnswer(questionId)
        } else {
            setDisabled(false)
        }
    },[linkNumber])

    const onChange = (e:any) => {
        const time = {
            questionId : String(questionId),
            shortFormAnswer : e.target.value
        }
        setTimeAnswer(time)
    }

    return (
        <TimeInput type="time" disabled={disabled} onChange={onChange}></TimeInput>
    )
}
export default TimeForm