'use client'
// import { StyledTag } from '@/components/card/Card.styled'
import { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container, StyledTag, Surveycontent } from './Question.styled'
import MultipleChoice from "@/components/surveyanswer/multiplechoice"
import CheckBox from "@/components/surveyanswer/checkbox"
import ShortForm from "@/components/surveyanswer/shortfrom"
import DateForm from "@/components/surveyanswer/dateform"
import TimeForm from "@/components/surveyanswer/timeform"
import { useEffect } from 'react'
const QuestionComponent = (props:any) => {
    useEffect(() => {
        // console.log(props)
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
                    {props.title}
                </SurveyQuestion>
                <Surveycontent>
                    {props.content}
                </Surveycontent>
                </SurveyQuestionContainer>
                {props.type === "MULTIPLE_CHOICE" && <MultipleChoice {...props}></MultipleChoice>}
                {props.type === "CHECK_BOX" && <CheckBox {...props}></CheckBox>}
                {props.type === "SHORT_FORM" && <ShortForm {...props}></ShortForm>}
                {props.type === "DATE_FORM" && <DateForm {...props}></DateForm>}
                {props.type === "TIME_FORM" && <TimeForm {...props}></TimeForm>}


            </Survey_Title_Container>
        </Survey_Container>
    )
}

export default QuestionComponent