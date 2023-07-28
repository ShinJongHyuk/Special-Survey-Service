import React, { useState, useEffect } from "react";
import { StyledCardList } from "./CardList.styled";
import Card from "@/components/card";
import useCardlistHook from "@/Hooks/useCardlistHook";

const CardList = ({ contentType }: any) => {
  const cards = useCardlistHook(contentType);

  return (
    <StyledCardList>
      {cards.map((survey, index) => (
        <div key={index}>
          <div style={{ width: "220px" }}>
            <Card
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
    </StyledCardList>
  );
};

export default CardList;
