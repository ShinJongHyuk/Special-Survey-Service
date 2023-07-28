import React, { useState, useEffect } from "react";
import useSSSPickStore from "@/stores/surveys/useSSSPickStore";
import useInstantWinStore from "@/stores/surveys/useInstantWinStore";
import useTimerHook from "@/hooks/useTimerHook";
import { SurveyType } from "@/stores/surveys/surveyStore.type";

const useCardlistHook = (contentType: any) => {
  let store = useSSSPickStore(); // default

  switch (contentType) {
    case "ssspick":
      store = useSSSPickStore();
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

  return cards;
};

export default useCardlistHook;
