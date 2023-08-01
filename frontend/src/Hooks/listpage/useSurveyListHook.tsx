import { useState, useEffect } from 'react'
import useInstantWinStore from '@/stores/surveys/useInstantWinStore';
import moment from 'moment';
import useTimerHook from '@/Hooks/card/useTimerHook';
import useTimeAttackStore from '@/stores/surveys/useNormalStore';


const useSurveyListHook = (surveyType: any) => {
    let store;
    if (surveyType === "instantwin") {
        store = useInstantWinStore();
    } else {
        store = useTimeAttackStore();
    }
    const { surveys } = store;

    const [sortType, setSortType] = useState("recommend");
    const [sortedSurveys, setSortedSurveys] = useState(surveys);

    const sortSurveys = (type: any) => {
        if (type === "deadLine") {
            const sorted = [...surveys].sort((a, b) => {
                const aDeadLine = moment(a.endTime, "YYYY-MM-DD-HH-mm");
                const bDeadLine = moment(b.endTime, "YYYY-MM-DD-HH-mm");

                const aRemainTime = aDeadLine.diff(moment(), "seconds");
                const bRemainTime = bDeadLine.diff(moment(), "seconds");

                if (aRemainTime < 0 && bRemainTime >= 0) {
                    return 1;
                } else if (bRemainTime < 0 && aRemainTime >= 0) {
                    return -1;
                } else {
                    return aDeadLine.isAfter(bDeadLine) ? 1 : -1;
                }
            });

            setSortedSurveys((prev) => {
                const data = sorted.map((prev: any) => {
                    return { ...prev, remainTime: useTimerHook(prev.endTime) };
                });
                return data;
            });
        } else if (type === "percent") {
            const sorted = [...surveys].sort((a, b) => {
                const aPercent = parseInt(a.probability, 10);
                const bPercent = parseInt(b.probability, 10);

                if (aPercent < bPercent) {
                    return 1;
                } else {
                    return -1;
                }
            });

            setSortedSurveys((prev) => {
                const data = sorted.map((prev: any) => {
                    return { ...prev, remainTime: useTimerHook(prev.endTime) };
                });
                return data;
            });
        }
        else {
            setSortedSurveys((prev) => {
                const data = surveys.map((prev: any) => {
                    return { ...prev, remainTime: useTimerHook(prev.endTime) };
                });
                return data;
            });
        }
    };

    useEffect(() => {
        sortSurveys(sortType);
    }, [sortType, surveys]);

    useEffect(() => {
        const timer = setInterval(() => {
            setSortedSurveys((prev) => {
                const data = prev.map((prev: any) => {
                    return { ...prev, remainTime: useTimerHook(prev.endTime) };
                });
                return data;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return { sortedSurveys, setSortType };
}
export default useSurveyListHook;