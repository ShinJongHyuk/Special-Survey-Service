"use client";
import Button from "@/components/button";
import Banner from "./components/banner";
import Cardlist from "./components/cardlist";
import { StyledSortingMethodList } from "./components/cardlist/Cardlist.styled";
import Plusbutton from "./components/plusbutton";
import useNormalListHook from "@/Hooks/listpage/useNormalListHook";

const SurveylistComponents = (props: any) => {
  const path = props.selectBtn;
  const bgcolor = path === "1" ? "rgba(142, 105, 255, 0.20)" : "rgba(255, 250, 174, 0.20)";

  const { sortedSurveys, setSortType } = useNormalListHook()
  let buttonUse;
  if (path === "1") {
    // ({ sortedSurveys, setSortType } = useNormalListHook());
    buttonUse = "sortingPurple";
  } else {
    // ({ sortedSurveys, setSortType } = useSurveyListHook("instantwin"));
    buttonUse = "sortingYellow";
  }
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <Banner selectBtn={path} />
      <StyledSortingMethodList path={path}>
        <div style={{ width: "130px", height: "36px" }}>
          <Button icon="/card/bolt.svg" use={buttonUse} label="추천순" onClick={() => setSortType("recommend")}></Button>
        </div>
        <div style={{ width: "130px", height: "36px" }}>
          <Button icon="/card/bolt.svg" use={buttonUse} label="확률순" onClick={() => setSortType("percent")}></Button>
        </div>
        <div style={{ width: "130px", height: "36px" }}>
          <Button icon="/card/bolt.svg" use={buttonUse} label="마감순" onClick={() => setSortType("deadLine")}></Button>
        </div>
      </StyledSortingMethodList>
      <Cardlist selectBtn={path} sortedSurveys={sortedSurveys} />
      <Plusbutton selectBtn={path} />
    </div>
  );
};
export default SurveylistComponents;
