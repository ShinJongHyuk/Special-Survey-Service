'use client'
import { useEffect, useState } from 'react'
import { CheckBoxContainer, CheckBoxFlex, CheckBoxInput, CheckBoxLabel } from './CheckBox.styled'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
import { LinkSign } from '../multiplechoice/MultipleChoice.styled'
const CheckBoxComponent = (props:any) => {
    const multipleChoices = props.multipleChoices
    const questionNumber = props.questionNumber
    const setCheckBoxAnswer = useSurveyAnswerStore((state:any) => state.setCheckBoxAnswer)
    const questionId = props.id
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const removeCheckBoxLinkNumver = useSurveyAnswerStore((state:any) => state.removeCheckBoxLinkNumver)
    const removeCheckBoxAnswer = useSurveyAnswerStore((state:any) => state.removeCheckBoxAnswer)

    useEffect(() => {
        if (linkNumber.includes(questionNumber)) {
            removeCheckBoxAnswer(questionId)
        }
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
                        <CheckBoxInput type="checkbox" disabled={props.disabled} surveyCategoryType={props.surveyCategoryType} name={questionNumber} id={multipleChoice.id} onClick={onClick(multipleChoice)}/>
                        <CheckBoxLabel htmlFor={multipleChoice.id} >{multipleChoice.content}</CheckBoxLabel>
                        {/* <LinkSign>{multipleChoice.linkNumber ? `(${multipleChoice.linkNumber}번 문항으로 이동)` : null}</LinkSign> */}
                    </CheckBoxFlex>
                )
            })}

            
        </CheckBoxContainer>
    )
}

export default CheckBoxComponent