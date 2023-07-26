import React, { useState, useEffect } from "react";
import { StyledCardList, StyledCard } from "./CardList.styled";
import useSurveyStore from "@/stores/useSurveyStore";
import useTimerHook from "@/hooks/useTimerHook";
import Card from "@/components/card";

const CardList = () => {
  const { surveys } = useSurveyStore();
  const [cards, setCards] = useState(surveys);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const data = prev.map((prev: any) => {
          return { ...prev, remainTime: useTimerHook(prev.endTime) };
        });
        return data;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledCardList>
      {cards.map((survey, index) => (
        <StyledCard key={index}>
          <Card
            title={survey.title}
            nickname={survey.nickname}
            type={survey.type}
            giveaways={survey.giveaways}
            probability={survey.probability}
            remainTime={survey.remainTime || ""}
            headCount={survey.headCount}
          />
        </StyledCard>
      ))}
    </StyledCardList>
  );
};

export default CardList;
