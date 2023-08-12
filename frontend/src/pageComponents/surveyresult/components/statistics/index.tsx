'use client'
import { StatisticsPage } from "./Statistics.Styled";
import Question from "./components/questions";



const Statistics = (props : any) => {
    const questionAnswers = props.questionAnswers
    const questions = props.questions

    return (
        <StatisticsPage>
            {questions && questions.map((question:any) => {
                return (
                <Question
                    id={question.id}
                    key={question.id}
                    questionNumber={question.questionNumber}
                    surveyCategoryType={props.surveyCategoryType}
                    questionAnswers={questionAnswers}
                    type={question.type}
                    title={question.title}
                    content={question.content}
                 />)
            })}
            
        </StatisticsPage>
    )
}

export default Statistics;