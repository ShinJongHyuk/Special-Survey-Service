import React from "react";
import useSurveyListHook from "@/Hooks/listpage/useSurveyListHook";
import { StyledList } from "../../Mypage.styled";
import Mycard from "@/components/mycard";

const CardList = () => {
  const { sortedSurveys, setSortType } = useSurveyListHook("normal");

  return (
    <StyledList>
      {sortedSurveys.map((survey, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "220px" }}>
            <Mycard
              title={survey.title}
              nickname={survey.nickname}
              type={survey.type}
              giveaways={survey.giveaways}
              probability={survey.probability}
              remaintime={survey.remainTime || ""}
              headcount={survey.headCount}
            />
          </div>
        </div>
      ))}
    </StyledList>
  );
};

export default CardList;
