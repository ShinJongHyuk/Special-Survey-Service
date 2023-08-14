"use client";

import useSurveyAnswerStore from "@/stores/useSurveyAnswer";
import { Dateinput } from "./Date.styled";
import { useEffect, useState } from "react";

const Date = (props: any) => {
  const dateAnswer = useSurveyAnswerStore((state: any) => state.dateAnswer);
  const setDateAnswer = useSurveyAnswerStore((state: any) => state.setDateAnswer);
  const questionNumber = props.questionNumber;
  const linkNumber = useSurveyAnswerStore((state: any) => state.linkNumber);
  const removeLinkDateAnswer = useSurveyAnswerStore((state: any) => state.removeLinkDateAnswer);
  const questionId = props.id;

  useEffect(() => {
    if (linkNumber.includes(questionNumber)) {
      removeLinkDateAnswer(questionId);
    }
  }, [linkNumber]);


  const onChange = (e: any) => {
    const date = {
      questionId: String(questionId),
      shortFormAnswer: e.target.value,
    };
    setDateAnswer(date);
  };
  return <Dateinput type="date" surveyCategoryType={props.surveyCategoryType} disabled={props.disabled} onChange={onChange}></Dateinput>;
};

export default Date;
