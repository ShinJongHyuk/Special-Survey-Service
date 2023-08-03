import React from "react";
import { StyledList } from "../../Mypage.styled";
import Mycard from "@/components/mycard";

const CardList = () => {
  // const { sortedSurveys, setSortType } =("normal");

  return (
    <StyledList>
      {/* {sortedSurveys.map((survey, index) => (
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
      ))} */}
    </StyledList>
  );
};

export default CardList;
