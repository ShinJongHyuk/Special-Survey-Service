'use client'
import { Survey_Container, Survey_Title_Container, SurveyQuestionContainer, SurveyQuestion, Surveycontent
    ,StyledTag} from '@/pageComponents/surveyAnswer/components/question/Question.styled'
import { useEffect, useState } from 'react'
import QuestionAnswer from '../questionAnswers'
const Questions = (props:any) => {
    const [questionAnswers, setQuestionAnswers] = useState<any>()
    // console.log(props)
    useEffect(() => {
        const answer = props.questionAnswers.find((e: any) => {
            return props.id === e.questionId;
        });
        if (answer) {
            setQuestionAnswers(answer);
        }
    },[props.questionAnswers, props.id])

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
                            <QuestionAnswer {...questionAnswers} surveyCategoryType={props.surveyCategoryType}></QuestionAnswer>
                    </SurveyQuestionContainer>
                </Survey_Title_Container>
            </Survey_Container>
    )
}

export default Questions