'use client'
import React, { useState, useEffect } from 'react'
import Banner from './banner'
import { StyledList, StyledSortingMethodList } from './InstantWinSurveyList';
import Button from '@/components/button';
import useInstantWinStore from '@/stores/surveys/useInstantWinStore';
import moment from 'moment';
import useTimerHook from '@/Hooks/useTimerHook';
import Card from '@/components/card';

const InstantWinSurveyList = () => {
    const { surveys } = useInstantWinStore();

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
        } else {
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


    return (
        <div style={{ backgroundColor: "rgba(255, 250, 174, 0.20)" }}>
            <Banner></Banner>
            <StyledSortingMethodList>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/bolt.svg" use="sortingYellow" label="추천순" onClick={() => setSortType("recommend")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/bolt.svg" use="sortingYellow" label="확률순"></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }} >
                    <Button icon="/bolt.svg" use="sortingYellow" label="마감순" onClick={() => setSortType("deadLine")}></Button>
                </div>
            </StyledSortingMethodList>
            <StyledList>
                {sortedSurveys.map((survey, index) =>
                    <div key={index}>
                        <div style={{ width: "220px" }}>

                            <Card
                                title={survey.title}
                                nickname={survey.nickname}
                                type={survey.type}
                                giveaways={survey.giveaways}
                                probability={survey.probability}
                                remaintime={survey.remainTime || ""}
                                headcount={survey.headCount}
                            />
                        </div>
                    </div>
                )}
            </StyledList>
        </div>
    )
}

export default InstantWinSurveyList