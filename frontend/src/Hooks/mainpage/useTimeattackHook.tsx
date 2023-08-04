import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import normalListGet from "@/api/surveylist/normalListGet";
import userNormalListGet from "@/api/surveylist/userNormalListGet";

const useTimeattackHook = () => {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    const fetchList = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken === null) {
        const data = await normalListGet();
        setCards([...data.slice(0, 5), ...data.slice(0, 5), ...data.slice(0, 5)]);
      } else {
        const data = await userNormalListGet(accessToken);
        setCards([...data.slice(0, 5), ...data.slice(0, 5), ...data.slice(0, 5)]);
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

export default useTimeattackHook;
