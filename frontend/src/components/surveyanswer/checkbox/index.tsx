'use client'
import { useEffect, useState } from 'react'
import { CheckBoxContainer, CheckBoxFlex, CheckBoxInput, CheckBoxLabel } from './CheckBox.styled'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
const CheckBoxComponent = (props:any) => {
    const multipleChoices = props.multipleChoices
    const questionNumber = props.questionNumber
    const setCheckBoxAnswer = useSurveyAnswerStore((state:any) => state.setCheckBoxAnswer)
    const checkBoxAnswer = useSurveyAnswerStore((state:any) => state.checkBoxAnswer)
    const questionId = props.id
    const [ disabled, setDisabled] = useState(true)
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const setLinkNumber = useSurveyAnswerStore((state:any) => state.setLinkNumber)
    const removeCheckBoxLinkNumver = useSurveyAnswerStore((state:any) => state.removeCheckBoxLinkNumver)
    const removeCheckBoxAnswer = useSurveyAnswerStore((state:any) => state.removeCheckBoxAnswer)
    useEffect(() => {
        console.log("체크박스답변 뭐 있지",checkBoxAnswer)
    },[checkBoxAnswer])

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
            removeCheckBoxAnswer(questionId)
        } else {
            setDisabled(false)
        }
    },[linkNumber])

    useEffect(() => {
        console.log(linkNumber,"링크넘버")
    },[linkNumber])

    const onClick = (multipleChoice:any) => async (e:any) => {
        const newResult = {
            ["questionId"] : String(questionId),
            ["multipleChoiceAnswer"] : e.target.id
        }
        setCheckBoxAnswer(newResult)
        removeCheckBoxLinkNumver(multipleChoice.linkNumber)
    }

    return (
        <CheckBoxContainer>
            {multipleChoices && multipleChoices.map((multipleChoice:any) => {
                return (
                    <CheckBoxFlex key={multipleChoice.id}>
                        <CheckBoxInput type="checkbox" disabled={disabled} name={questionNumber} id={multipleChoice.id} onClick={onClick(multipleChoice)}/>
                        <CheckBoxLabel htmlFor={multipleChoice.id} >{multipleChoice.content}</CheckBoxLabel>
                    </CheckBoxFlex>
                )
            })}

            
        </CheckBoxContainer>
    )
}

export default CheckBoxComponent