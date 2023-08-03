import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import normalListGet from "@/api/surveylist/normalListGet";
import useUserStore from "@/stores/useUserStore";
import useSortSurveyListHook from "./useSortSurveyListHook";
import { useSortTypeStore } from "@/stores/surveylist/useSortTypeStore";

const useNormalListHook = () => {
  const [surveys, setSurveys] = useState<any>([]);

  useEffect(() => {
    // 데이터 패칭
    const fetchList = async () => {
      const data = await normalListGet();
      setSurveys(data);
    };
    fetchList();
  }, []);

  const { sortType } = useSortTypeStore();
  const sortedSurveys = useSortSurveyListHook(surveys, sortType, useTimerHook);

  return { sortedSurveys };
};
export default useNormalListHook;
