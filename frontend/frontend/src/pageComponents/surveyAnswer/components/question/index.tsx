'use client'
// import { StyledTag } from '@/components/card/Card.styled'
import { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container, StyledTag } from './Question.styled'
import MultipleChoice from "@/components/surveyanswer/multiplechoice"
import CheckBox from "@/components/surveyanswer/checkbox"
import ShortForm from "@/components/surveyanswer/shortfrom"
import LongForm from "@/components/surveyanswer/longform"
import { useEffect } from 'react'
const QuestionComponent = (props:any) => {
    useEffect(() => {
        // console.log(typeof props.questionNumber)
    })
    return (
        <Survey_Container>
            <Survey_Title_Container>
                <SurveyQuestionContainer>
                <StyledTag type={props.surveyCategoryType}>
                    <div className="type-text">Q{props.questionNumber}</div>
                </StyledTag>
                <SurveyQuestion>
                    {props.content}
                </SurveyQuestion>
                </SurveyQuestionContainer>
                {props.type === "MULTIPLE_CHOICE" && <MultipleChoice {...props}></MultipleChoice>}
                {props.type === "checkbox" && <CheckBox></CheckBox>}
                {props.type === "SHORT_FORM" && <ShortForm {...props}></ShortForm>}
                {props.type === "longform" && <LongForm></LongForm>}
                
            </Survey_Title_Container>
        </Survey_Container>
    )
}

export default QuestionComponent