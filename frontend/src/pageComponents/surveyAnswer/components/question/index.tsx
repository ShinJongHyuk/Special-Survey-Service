'use client'
// import { StyledTag } from '@/components/card/Card.styled'
import { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container, StyledTag, Surveycontent } from './Question.styled'
import MultipleChoice from "@/components/surveyanswer/multiplechoice"
import CheckBox from "@/components/surveyanswer/checkbox"
import ShortForm from "@/components/surveyanswer/shortfrom"
import DateForm from "@/components/surveyanswer/dateform"
import TimeForm from "@/components/surveyanswer/timeform"
import { useEffect, useState } from 'react'
import useSurveyAnswerStore from '@/stores/useSurveyAnswer'
const QuestionComponent = (props:any) => {
    const questionNumber = props.questionNumber
    const [ disabled, setDisabled] = useState(true)
    const questionId = props.id
    const linkNumber = useSurveyAnswerStore((state:any) => state.linkNumber)
    const removeLinkTimeAnswer = useSurveyAnswerStore((state:any) => state.removeLinkTimeAnswer)
    const multipleChoices = props.multipleChoices
    const setLinkNumber = useSurveyAnswerStore((state:any) => state.setLinkNumber)
    useEffect(() => {
        if (linkNumber.includes(questionNumber)) {
            setDisabled(true)
            removeLinkTimeAnswer(questionId)
        } else {
            setDisabled(false)
        }
    },[linkNumber])
    useEffect(() => {
        multipleChoices.map((multipleChoice: any) => {
            if (multipleChoice.linkNumber) {
                setLinkNumber(multipleChoice.linkNumber)
            }
        });
    }, [multipleChoices]);
    useEffect(() => {
        // console.log(typeof props.questionNumber)
    })
    return (
        <>
        {!disabled &&  <Survey_Container>
            <Survey_Title_Container>
                <SurveyQuestionContainer>
                <StyledTag type={props.surveyCategoryType} disabled={disabled}>
                    <div className="type-text">Q{props.questionNumber}</div>
                </StyledTag>
                <SurveyQuestion disabled={disabled}>
                    {props.title}
                </SurveyQuestion>
                <Surveycontent disabled={disabled}>
                    {props.content}
                </Surveycontent>
                </SurveyQuestionContainer>
                {props.type === "MULTIPLE_CHOICE" && <MultipleChoice {...props} disabled={disabled}></MultipleChoice>}
                {props.type === "CHECK_BOX" && <CheckBox {...props} disabled={disabled}></CheckBox>}
                {props.type === "SHORT_FORM" && <ShortForm {...props} disabled={disabled}></ShortForm>}
                {props.type === "DATE_FORM" && <DateForm {...props} disabled={disabled}></DateForm>}
                {props.type === "TIME_FORM" && <TimeForm {...props} disabled={disabled}></TimeForm>}
            </Survey_Title_Container>
        </Survey_Container>}
       </>
    )
}

export default QuestionComponent