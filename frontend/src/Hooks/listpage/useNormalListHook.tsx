import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import normalListGet from "@/api/surveylist/normalListGet";
import useSortSurveyListHook from "./useSortSurveyListHook";
import { useSortTypeStore } from "@/stores/surveylist/useSortTypeStore";
import userNormalListGet from "@/api/surveylist/userNormalListGet";

const useNormalListHook = () => {
  const [surveys, setSurveys] = useState<any>([]);

  useEffect(() => {
    const fetchList = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken === null) {
        const data = await normalListGet();
        setSurveys(data);
      } else {
        const data = await userNormalListGet(accessToken);
        setSurveys(data);
      }

    };
    fetchList();
  }, []);

  const { sortType } = useSortTypeStore();
  const sortedSurveys = useSortSurveyListHook(surveys, sortType, useTimerHook);

  return { sortedSurveys };
};
export default useNormalListHook;
