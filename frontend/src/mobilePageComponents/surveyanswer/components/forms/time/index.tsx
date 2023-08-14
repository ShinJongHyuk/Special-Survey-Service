"use client";
import { useEffect, useState } from "react";
import { TimeInput } from "./TimeForm.styled";
import useSurveyAnswerStore from "@/stores/useSurveyAnswer";

const Time = (props: any) => {
  const questionNumber = props.questionNumber;
  const questionId = props.id;
  const linkNumber = useSurveyAnswerStore((state: any) => state.linkNumber);
  const setTimeAnswer = useSurveyAnswerStore((state: any) => state.setTimeAnswer);
  const removeLinkTimeAnswer = useSurveyAnswerStore((state: any) => state.removeLinkTimeAnswer);
  useEffect(() => {
    if (linkNumber.includes(questionNumber)) {
      removeLinkTimeAnswer(questionId);
    }
  }, [linkNumber]);

  const onChange = (e: any) => {
    const time = {
      questionId: String(questionId),
      shortFormAnswer: e.target.value,
    };
    setTimeAnswer(time);
  };

  return <TimeInput type="time" surveyCategoryType={props.surveyCategoryType} disabled={props.disabled} onChange={onChange}></TimeInput>;
};
export default Time;
