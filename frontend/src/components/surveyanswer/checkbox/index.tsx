'use client'
import { useEffect, useState } from 'react'
import { CheckBoxContainer, CheckBoxFlex, CheckBoxInput, CheckBoxLabel } from './CheckBox.styled'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
const CheckBoxComponent = (props:any) => {
    const multipleChoices = props.multipleChoices
    const questionNumber = props.questionNumber
    const setCheckBoxAnswer = useSurveyAnswerStore((state:any) => state.setCheckBoxAnswer)
    const checkBoxAnswer = useSurveyAnswerStore((state:any) => state.checkBoxAnswer)

    useEffect(() => {
        console.log(checkBoxAnswer)
    },[checkBoxAnswer])

    const onClick = (e:any) => {
        const newResult = {
            ["questionId"] : String(questionNumber),
            ["multipleChoiceAnswer"] : e.target.id
        }
        setCheckBoxAnswer(newResult)
    }

    return (
        <CheckBoxContainer>
            {multipleChoices && multipleChoices.map((multipleChoice:any) => {
                return (
                    <CheckBoxFlex key={multipleChoice.id}>
                        <CheckBoxInput name={questionNumber} id={multipleChoice.id} onClick={onClick}/>
                        <CheckBoxLabel htmlFor={multipleChoice.id} >{multipleChoice.content}</CheckBoxLabel>
                    </CheckBoxFlex>
                )
            })}

            
        </CheckBoxContainer>
    )
}

export default CheckBoxComponent