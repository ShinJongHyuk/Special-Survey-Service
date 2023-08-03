import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import instantListGet from "@/api/surveylist/instantListGet";
import useUserStore from "@/stores/useUserStore";
import useSortSurveyListHook from "./useSortSurveyListHook";

const useInstantListHook = () => {
  const [surveys, setSurveys] = useState<any>([]);
  const accessToken = useUserStore((state: any) => state.accessToken);

  useEffect(() => {
    // 데이터 패칭
    const fetchList = async () => {
      const data = await instantListGet(accessToken);
      setSurveys(data);
      console.log(data);
    };
    fetchList();
  }, []);


  const [sortType, setSortType] = useState("recommend");
  const sortedSurveys = useSortSurveyListHook(surveys, sortType, useTimerHook);

  return { sortedSurveys, setSortType };
};
export default useInstantListHook;
