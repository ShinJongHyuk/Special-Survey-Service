'use client'
import { useState, useEffect } from 'react'
import { ShortInput } from './ShortForm.styled'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'

interface resultType {
    questionId : string
    shortFormAnswer : string
}

const ShortFormComponent = (props:any) => {
    const questionId = props.id
    const questionNumber = props.questionNumber
    const [result, setResult] = useState<resultType>({
        questionId : "",
        shortFormAnswer : ""
    })

    const setAnswer = useSurveyAnswerStore((state:any) => state.setAnswer)
    const removeAnswer = useSurveyAnswerStore((state:any) => state.removeAnswer)
    const answer = useSurveyAnswerStore((state:any) => state.answer)
    const removeLinkAnswer = useSurveyAnswerStore((state:any) => state.removeLinkAnswer)

    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const [ disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (result.shortFormAnswer.length === 0) {
            removeAnswer(result)
        }
    },[result])

    useEffect(() => {
        if (linkNumber.includes(questionNumber)) {
            setDisabled(true)
            removeLinkAnswer(questionId)
        } else {
            setDisabled(false)
        }
    },[linkNumber])

    const onChange = (e:any) => {
        const updateResult = {
            ...result,
            ["questionId"] : String(questionId),
            ["shortFormAnswer"] : e.target.value
        }
        setResult(updateResult)
        setAnswer(updateResult)
    }

    
    
    return (
        <ShortInput disabled={disabled} placeholder="단답형 텍스트" onChange={onChange}/>
    )
}

export default ShortFormComponent