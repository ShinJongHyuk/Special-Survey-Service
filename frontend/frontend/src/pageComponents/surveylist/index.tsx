"use client";

import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";
import SurveylistComponents from "./surveylistComponents";

const Surveylist = () => {
  const selectBtn = useSurveylistStore((state) => state.selectBtn);
  return <SurveylistComponents selectBtn={selectBtn} />;
};

export default Surveylist;
