"use client";
import useAnswerPossibleHook from "@/Hooks/detailpage/useAnswerPossibleHook";
import useSurveyDetailHook from "@/Hooks/detailpage/useSurveyDetailHook";
import Detail from "./detail";

const SurveyDetail = (props: any) => {
  const { surveyDetail } = useSurveyDetailHook(props.id);
  const { cananswer } = useAnswerPossibleHook(props.id);

  return <Detail surveyDetail={surveyDetail} cananswer={cananswer}></Detail>;
};

export default SurveyDetail;
