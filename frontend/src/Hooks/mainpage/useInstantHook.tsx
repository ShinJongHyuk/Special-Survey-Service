import { useState, useEffect } from "react";
import useTimerHook from "@/Hooks/card/useTimerHook";
import instantListGet from "@/api/surveylist/instantListGet";

const useInstantHook = () => {
  const [cards, setCards] = useState<any>([]);


  useEffect(() => {
    const fetchList = async () => {
      const data = await instantListGet();
      setCards(data.slice(0, 5));
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

  return { cards };
};
export default useInstantHook;
