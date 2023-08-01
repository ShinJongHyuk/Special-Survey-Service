import React, { useState, useEffect } from "react";
import { StyledCardList } from "./CardList.styled";
import Card from "@/components/card";
import useCardlistHook from "@/Hooks/mainpage/useCardlistHook";

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
              endtime={survey.endTime}
              headcount={survey.headCount}
              responsedtime={survey.responsedTime}
              contentype={contentType}
            />
          </div>
        </div>
      ))}
    </StyledCardList>
  );
};

export default CardList;
