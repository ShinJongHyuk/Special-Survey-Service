'use client'
import { useEffect, useState } from 'react'
import { RadioContainer, RadioInput, RadioLabel, RadioFlex, LinkSign} from './MultipleChoice.styled'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'

interface resultType {
    questionId : string
    multipleChoiceAnswer : string
}

const MultipleChoiceComponent = (props:any) => {
    const questionId = props.id
    const questionNumber = props.questionNumber
    const multipleChoices = props.multipleChoices
    const [result, setResult] = useState<resultType>({
        questionId : "",
        multipleChoiceAnswer : ""
    })

    const setAnswer = useSurveyAnswerStore((state:any) => state.setAnswer)
    const answer = useSurveyAnswerStore((state:any) => state.answer)

    const setLinkNumber = useSurveyAnswerStore((state:any) => state.setLinkNumber)
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const removeLinkNumber = useSurveyAnswerStore((state:any) => state.removeLinkNumber)
    const removeLinkAnswer = useSurveyAnswerStore((state:any) => state.removeLinkAnswer)
    const [ disabled, setDisabled] = useState(true)
    useEffect(() => {
        multipleChoices.map((multipleChoice: any) => {
            if (multipleChoice.linkNumber) {
                setLinkNumber(multipleChoice.linkNumber)
            }
        });
    }, [multipleChoices]);

    useEffect(() => {
        if (linkNumber.includes(questionNumber)) {
            setDisabled(true)
            removeLinkAnswer(questionId)
        } else {
            setDisabled(false)
        }
    },[linkNumber])

    const onClick = (multipleChoice:any) => async (e:any) =>{
        await multipleChoices.map((multipleChoice: any) => {
            if (multipleChoice.linkNumber) {
                setLinkNumber(multipleChoice.linkNumber)
            }
        });
        const updateResult = {
            ...result,
            ["questionId"] : String(questionId),
            ["multipleChoiceAnswer"] : e.target.id
        }
        setResult(updateResult)
        setAnswer(updateResult)
        removeLinkNumber(multipleChoice.linkNumber)
    }
    useEffect(() => {
        // console.log("프롭", props)
        // console.log("스토어로 넘어갈 데이트", result);
        // console.log(typeof result.questionId)
        // console.log("스토어에 저장된 상태",answer)
        // console.log("스토어에 저장된 linkNumber",linkNumber)
    }, [result, answer]);
    return (
        <RadioContainer disabled={disabled}>
            {multipleChoices && multipleChoices.map((multipleChoice:any) => {
                // console.log(multipleChoice)
                return (
                    <RadioFlex key={multipleChoice.id}>
                        <RadioInput id={multipleChoice.id} name={questionNumber} onClick={onClick(multipleChoice)} goQuestion={multipleChoice.linkNumber}/>
                        <RadioLabel htmlFor={multipleChoice.id}>{multipleChoice.content}</RadioLabel>
                        <LinkSign>{multipleChoice.linkNumber ? `(${multipleChoice.linkNumber}번 문항으로 이동)` : null}</LinkSign>
                    </RadioFlex>
                )
            })}
        </RadioContainer>
    )
}

export default MultipleChoiceComponent