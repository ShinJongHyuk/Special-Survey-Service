import { useState, useEffect } from "react";
import answeredListGet from "@/api/surveylist/mypage/answeredListGet";
import useTimerHook from "../card/useTimerHook";

const useAnsweredListHook = () => {
    const [surveys, setSurveys] = useState<any>([]);

    useEffect(() => {
        const fetchList = async () => {

            const data = await answeredListGet();
            setSurveys(data);

        };
        fetchList();
        const timer = setInterval(() => {
            setSurveys((prev: any) => {
                const data = prev.map((prev: any) => {
                    return { ...prev, remainTime: useTimerHook(prev.endTime) };
                });
                return data;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return { surveys };
};
export default useAnsweredListHook;
