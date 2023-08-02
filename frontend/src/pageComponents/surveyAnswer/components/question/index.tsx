'use client'
import { StyledTag } from '@/components/card/Card.styled'
import { Survey_Container, SurveyQuestionContainer, SurveyQuestion, Survey_Title_Container } from './Question.styled'
import MultipleChoice from "@/components/surveyanswer/multiplechoice"
import CheckBox from "@/components/surveyanswer/checkbox"
import ShortForm from "@/components/surveyanswer/shortfrom"
import LongForm from "@/components/surveyanswer/longform"
const QuestionComponent = (props:any) => {
    return (
        <Survey_Container>
            <Survey_Title_Container>
                <SurveyQuestionContainer>
                <StyledTag {...props}>
                    <div className="type-text">Q1</div>
                </StyledTag>
                <SurveyQuestion>
                    현재 프로그래밍을 하고 계신가요?
                </SurveyQuestion>
                </SurveyQuestionContainer>
                {props.type === "multiplechoice" && <MultipleChoice></MultipleChoice>}
                {props.type === "checkbox" && <CheckBox></CheckBox>}
                {props.type === "shortform" && <ShortForm></ShortForm>}
                {props.type === "longform" && <LongForm></LongForm>}
                
            </Survey_Title_Container>
        </Survey_Container>
    )
}

export default QuestionComponent