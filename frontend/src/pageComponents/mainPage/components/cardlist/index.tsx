import React, { useState, useEffect } from "react";
import { StyledCardList } from "./CardList.styled";
import useSSSPickStore from "@/stores/surveys/useSSSPickStore";
import useTimeAttackStore from "@/stores/surveys/useTimeAttackStore";
import useInstantWinStore from "@/stores/surveys/useInstantWinStore"
import useTimerHook from "@/hooks/useTimerHook";
import Card from "@/components/card";
import Card2 from "@/components/card2";

const CardList = ({ contentType }: any) => {
  // const { surveys } = useSurveyStore();
  // const [cards, setCards] = useState(surveys);

  let store = useSSSPickStore(); // default

  switch (contentType) {
    case "ssspick":
      store = useSSSPickStore();
      break;
    case "timeattack":
      store = useTimeAttackStore();
      break;
    case "instantwin":
      store = useInstantWinStore();
      break;
  }

  const { surveys } = store;
  const [cards, setCards] = useState(surveys);

  useEffect(() => {
    setCards(surveys);
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
        <div key={index}>
          {contentType === "timeattack" ?
            <div style={{ width: "440px" }}>
              <Card2
                title={survey.title}
                nickname={survey.nickname}
                giveaways={survey.giveaways}
                probability={survey.probability}
                remaintime={survey.remainTime || ""}
              />
            </div>
            :
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
          }
        </div >
      ))}
    </StyledCardList >
  );
};

export default CardList;
