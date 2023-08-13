"use client";
import ProgressBar from "./components/progressbar";
import Question from "./components/question";
import { useSurveyAnswerHook } from "@/Hooks/useSurveyAnswerHook";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface questionType {
  title: string;
  content: string;
  id: string;
  multipleChoices: any;
  questionNumber: string;
  type: string;
  essential: boolean;
  imgAddress: any;
}

const MobileSurveyanswer = (props: any) => {
  const router = useRouter();
  const { surveyInformation, getSurveyQuestion } = useSurveyAnswerHook();

  useEffect(() => {
    getSurveyQuestion(props.id);
  }, []);

  const questions = surveyInformation?.questions;

  return (
    <div>
      <div style={{ position: "fixed", width: "100%", zIndex: "1" }}>
        <ProgressBar
          id={surveyInformation?.id}
          questionsCount={surveyInformation?.questions.length}
          type={surveyInformation?.surveyCategoryType}
        ></ProgressBar>
      </div>
      <div style={{ paddingTop: "80px" }}>
        {questions &&
          questions.map((question: questionType) => {
            return (
              <Question
                id={question.id}
                key={question.id}
                title={question.title}
                content={question.content}
                type={question.type}
                multipleChoices={question.multipleChoices}
                questionNumber={question.questionNumber}
                surveyCategoryType={surveyInformation?.surveyCategoryType}
                imgAddress={question.imgAddress}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MobileSurveyanswer;
