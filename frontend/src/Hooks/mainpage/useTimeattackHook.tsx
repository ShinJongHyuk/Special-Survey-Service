import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import normalListGet from "@/api/normalListGet";
import useUserStore from "@/stores/useUserStore";

const useTimeattackHook = () => {
  const cardWidth = 440; // 카드의 너비

  const [cards, setCards] = useState<any>([]);
  const [transformValue, setTransformValue] = useState(-cardWidth);
  const accessToken = useUserStore((state: any) => state.accessToken);

  useEffect(() => {
    // 데이터 패칭
    const fetchList = async () => {
      const data = await normalListGet(accessToken);
      setCards([...data.slice(0, 5), ...data.slice(0, 5), ...data.slice(0, 5)]);
      console.log(data);
    };
    fetchList();

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
