import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import instantListGet from "@/api/surveylist/instantListGet";
import useSortSurveyListHook from "./useSortSurveyListHook";
import { useSortTypeStore } from "@/stores/surveylist/useSortTypeStore";
import userInstantListGet from "@/api/surveylist/userInstantListGet";

const useInstantListHook = () => {
  const [surveys, setSurveys] = useState<any>([]);


  useEffect(() => {
    // 데이터 패칭
    const fetchList = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken === "") {
        const data = await instantListGet();
        setSurveys(data);
      } else {
        const data = await userInstantListGet(accessToken);
        setSurveys(data);
      }
    };
    fetchList();
  }, []);

  const { sortType } = useSortTypeStore();
  const sortedSurveys = useSortSurveyListHook(surveys, sortType, useTimerHook);

  return { sortedSurveys };
};
export default useInstantListHook;
