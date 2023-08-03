import React, { useState, useEffect } from "react";
import { StyledContent, StyledContentText, StyledCardList } from "../Timeattack.styled";
import Card2 from "@/components/card2";

const TimeAttackCardList = (props: any) => {
  const cards = props.cards;
  const transformValue = props.transformValue;
  return (
    <StyledCardList
      style={{
        transform: `translateX(${transformValue}px)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {cards.map((survey: any, index: any) => (
        <div key={index}>
          <div style={{ width: "440px" }}>
            <Card2
              title={survey.title}
              nickname={survey.writer}
              giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
              probability={survey.winningPercent + "%"}
              remaintime={survey.remainTime || ""}
            />
          </div>
        </div>
      ))}
    </StyledCardList>
  );
};

export default TimeAttackCardList;
