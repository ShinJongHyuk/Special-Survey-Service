'use client'
import React from 'react'
import Banner from './banner'
import { StyledList, StyledSortingMethodList } from './TimeattackSurveyList';
import Button from '@/components/button';
import Card from '@/components/card';
import useInstantWinSurveyListHook from '@/Hooks/listpage/useSurveyListHook';

const TimeattackSurveyList = () => {

    const { sortedSurveys, setSortType } = useInstantWinSurveyListHook("timeattack");
    return (
        <div style={{ backgroundColor: "rgba(142, 105, 255, 0.20)" }}>
            <Banner></Banner>
            <StyledSortingMethodList>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bluecard/bolt.svg" use="sortingPurple" label="추천순" onClick={() => setSortType("recommend")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bluecard/bolt.svg" use="sortingPurple" label="확률순" onClick={() => setSortType("percent")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }} >
                    <Button icon="/card/bluecard/bolt.svg" use="sortingPurple" label="마감순" onClick={() => setSortType("deadLine")}></Button>
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

export default TimeattackSurveyList