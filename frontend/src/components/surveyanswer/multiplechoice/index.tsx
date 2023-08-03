'use client'
import { useEffect, useState } from 'react'
import { RadioContainer, RadioInput, RadioLabel, RadioFlex} from './MultipleChoice.styled'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'

interface resultType {
    questionId : string
    multipleChoiceAnswer : string
}

const MultipleChoiceComponent = (props:any) => {
    const questionNumber = props.questionNumber
    const multipleChoices = props.multipleChoices
    const [result, setResult] = useState<resultType>({
        questionId : "",
        multipleChoiceAnswer : ""
    })

    const setAnswer = useSurveyAnswerStore((state:any) => state.setAnswer)
    const answer = useSurveyAnswerStore((state:any) => state.answer)

    const onClick = (e:any) => {
        const updateResult = {
            ...result,
            ["questionId"] : String(questionNumber),
            ["multipleChoiceAnswer"] : e.target.id
        }
        setResult(updateResult)
        setAnswer(updateResult)
        
    }
    useEffect(() => {
        console.log("111", result);
        console.log(typeof result.questionId)
        console.log(answer)
    }, [result, answer]);
    return (
        <RadioContainer>
            {multipleChoices && multipleChoices.map((multipleChoice:any) => {
                console.log(multipleChoice)
                return (
                    <RadioFlex key={multipleChoice.id} >
                        <RadioInput id={multipleChoice.id} name={questionNumber} onClick={onClick}/>
                        <RadioLabel htmlFor={multipleChoice.id}>{multipleChoice.content}</RadioLabel>
                    </RadioFlex>
                )
            })}
        </RadioContainer>
    )
}

export default MultipleChoiceComponent