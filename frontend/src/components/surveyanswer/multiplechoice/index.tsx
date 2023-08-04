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

    const setLinkNumber = useSurveyAnswerStore((state:any) => state.setLinkNumber)

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
        console.log("프롭", props)
        console.log("스토어로 넘어갈 데이트", result);
        console.log(typeof result.questionId)
        console.log("스토어에 저장된 상태",answer)
    }, [result, answer]);
    return (
        <RadioContainer>
            {multipleChoices && multipleChoices.map((multipleChoice:any) => {
                setLinkNumber(multipleChoice.linkNumber)
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