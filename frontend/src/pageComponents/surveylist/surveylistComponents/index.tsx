"use client";
import Banner from "./components/banner";
import Cardlist from "./components/cardlist";
import Plusbutton from "./components/plusbutton";
import useNormalListHook from "@/Hooks/listpage/useNormalListHook";
import useInstantListHook from "@/Hooks/listpage/useInstantListHook";
import SortingMethod from "./components/sortingMethod";

const SurveylistComponents = (props: any) => {
  const path = props.selectBtn;
  const bgcolor = path === "1" ? "rgba(142, 105, 255, 0.20)" : "rgba(255, 250, 174, 0.20)";

  const { sortedSurveys: sortedSurveysNormal, setSortType: setSortTypeNormal } = useNormalListHook();
  const { sortedSurveys: sortedSurveysInstant, setSortType: setSortTypeInstant } = useInstantListHook();

  let sortedSurveys;
  let setSortType;
  if (path === "1") {
    sortedSurveys = sortedSurveysNormal;
    setSortType = setSortTypeNormal;
  } else {
    sortedSurveys = sortedSurveysInstant;
    setSortType = setSortTypeInstant;
  }



  return (
    <div style={{ backgroundColor: bgcolor }}>
      <Banner selectBtn={path} />
      <SortingMethod selectBtn={path} setSortType={setSortType} />

      <Cardlist selectBtn={path} sortedSurveys={sortedSurveys} />

      <Plusbutton selectBtn={path} />
    </div>
  );
};
export default SurveylistComponents;
