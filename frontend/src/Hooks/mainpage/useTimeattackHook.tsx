import { useState, useEffect } from "react";
import useTimeAttackStore from "@/stores/surveys/useTimeAttackStore";
import useTimerHook from "@/Hooks/card/useTimerHook";
import { SurveyType } from "@/stores/surveys/surveyStore.type";

const useTimeattackHook = () => {
  const cardWidth = 440; // 카드의 너비

  const { surveys } = useTimeAttackStore();
  const [cards, setCards] = useState<SurveyType["surveys"]>([]);
  const [transformValue, setTransformValue] = useState(-cardWidth);

  useEffect(() => {
    const initialCards = [...surveys.slice(0, 5), ...surveys.slice(0, 5), ...surveys.slice(0, 5)]; // double the surveys
    setCards(initialCards);

    const timer = setInterval(() => {
      setCards((prev: any) => {
        const data = prev.map((prev: any) => {
          return { ...prev, remainTime: useTimerHook(prev.endTime) };
        });
        return data;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (transformValue < -cardWidth * (cards.length / 2)) {
      setTransformValue(0);
    }
    if (transformValue > 0) {
      setTransformValue(-cardWidth * (cards.length / 2));
    }
  }, [transformValue]);

  function handlePrevClick() {
    setTransformValue((prevValue) => {
      if (prevValue + cardWidth >= 0) {
        return 0;
      } else {
        return prevValue + cardWidth;
      }
    });
  }

  function handleNextClick() {
    setTransformValue((prevValue) => {
      if (prevValue - cardWidth <= -4 * cardWidth) {
        return -4 * cardWidth;
      } else {
        return prevValue - cardWidth;
      }
    });
  }
  return {
    cards,
    transformValue,
    handlePrevClick,
    handleNextClick,
  };
};

export default useTimeattackHook;
