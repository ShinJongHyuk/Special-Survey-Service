'use client'

import useSurveyAnswerStore from "@/stores/useSurveyAnswer"
import { Dateinput } from "./DateForm.styled"
import { useEffect, useState } from "react"

const DateForm = (props:any) => {
    const dateAnswer = useSurveyAnswerStore((state:any) => state.dateAnswer)
    const setDateAnswer = useSurveyAnswerStore((state:any) => state.setDateAnswer)
    const questionNumber = props.questionNumber
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const removeLinkDateAnswer = useSurveyAnswerStore((state:any) => state.removeLinkDateAnswer)
    const [ disabled, setDisabled] = useState(true)
    const questionId = props.id


    useEffect(() => {
        if (linkNumber.includes(questionNumber)) {
            setDisabled(true)
            removeLinkDateAnswer(questionId)
        } else {
            setDisabled(false)
        }
    },[linkNumber])

    useEffect(() => {
        console.log(dateAnswer, "날짜")
    },[dateAnswer])

    const onChange = (e:any) => {
        const date = {
            questionId : String(questionId),
            shortFormAnswer : e.target.value
        }
        setDateAnswer(date)
    }
    return (
        <Dateinput type="date" disabled={disabled} onChange={onChange}></Dateinput>
    )
}

export default DateForm