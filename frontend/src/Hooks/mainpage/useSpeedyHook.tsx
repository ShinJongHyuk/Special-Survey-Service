import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import timeListGet from "@/api/surveylist/timeListGet";
import userTimeListGet from "@/api/surveylist/userTimeListGet";

const useSpeedyHook = () => {
  const [cards, setCards] = useState<any>([]);


  useEffect(() => {
    const fetchList = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken === "") {
        const data = await timeListGet();
        setCards(data.slice(0, 5));
      } else {
        const data = await userTimeListGet(accessToken);
        setCards(data.slice(0, 5));
      }
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

  return { cards };
};
export default useSpeedyHook;
