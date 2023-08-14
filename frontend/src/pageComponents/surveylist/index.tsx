"use client";

import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";
import SurveylistComponents from "./surveylistComponents";

const Surveylist = () => {
  const selectbtn = useSurveylistStore((state) => state.selectbtn);
  return <SurveylistComponents selectbtn={selectbtn} />;
};

export default Surveylist;
