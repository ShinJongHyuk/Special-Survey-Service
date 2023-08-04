import { useState, useEffect } from "react";
import useTimerHook from "../card/useTimerHook";
import writingListGet from "@/api/surveylist/mypage/writingListGet";

const useWritingListHook = () => {
    const [surveys, setSurveys] = useState<any>([]);

    useEffect(() => {
        const fetchList = async () => {

            const data = await writingListGet();
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
export default useWritingListHook;
