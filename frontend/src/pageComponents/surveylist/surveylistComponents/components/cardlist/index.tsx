import Button from "@/components/button";
import { StyledSortingMethodList, StyledList } from "./Cardlist.styled";
import useSurveyListHook from "@/Hooks/listpage/useSurveyListHook";
import Card from "@/components/card";

const Cardlist = (props: any) => {
  const path = props.selectBtn;
  let { sortedSurveys, setSortType } = useSurveyListHook("");
  let buttonUse;
  if (path === "1") {
    ({ sortedSurveys, setSortType } = useSurveyListHook("normal"));
    buttonUse = "sortingPurple";
  } else {
    ({ sortedSurveys, setSortType } = useSurveyListHook("instantwin"));
    buttonUse = "sortingYellow";
  }
  return (
    <div>
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
      <StyledList>
        {sortedSurveys.map((survey, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "220px" }}>
              <Card
                title={survey.title}
                nickname={survey.nickname}
                type={survey.type}
                giveaways={survey.giveaways}
                probability={survey.probability}
                remaintime={survey.remainTime || ""}
                endtime={survey.endTime}
                headcount={survey.headCount}
              />
            </div>
          </div>
        ))}
      </StyledList>
    </div>
  );
};

export default Cardlist;
