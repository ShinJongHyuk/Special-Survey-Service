'use client'
import React from 'react'
import Banner from './banner'
import { StyledList, StyledSortingMethodList } from './InstantWinSurveyList';
import Button from '@/components/button';
import Card from '@/components/card';
import useInstantWinSurveyListHook from '@/Hooks/listpage/useSurveyListHook';

const InstantWinSurveyList = () => {

    const { sortedSurveys, setSortType } = useInstantWinSurveyListHook("instantwin");
    return (
        <div style={{ backgroundColor: "rgba(255, 250, 174, 0.20)" }}>
            <Banner></Banner>
            <StyledSortingMethodList>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bolt.svg" use="sortingYellow" label="추천순" onClick={() => setSortType("recommend")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }}>
                    <Button icon="/card/bolt.svg" use="sortingYellow" label="확률순" onClick={() => setSortType("percent")}></Button>
                </div>
                <div style={{ width: "130px", height: "36px" }} >
                    <Button icon="/card/bolt.svg" use="sortingYellow" label="마감순" onClick={() => setSortType("deadLine")}></Button>
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
                                endtime={survey.endTime}
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