import { useState, useEffect } from "react";

const useMovelistHook = (cards: any[]) => {
  const cardWidth = 440; // 카드의 너비
  const [transformValue, setTransformValue] = useState(-cardWidth);

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
    transformValue,
    handlePrevClick,
    handleNextClick,
  };
};

export default useMovelistHook;
