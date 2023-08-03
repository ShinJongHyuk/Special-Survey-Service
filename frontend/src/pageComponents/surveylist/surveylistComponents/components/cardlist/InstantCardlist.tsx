import Card from '@/components/card'
import React from 'react'
import { StyledList } from './Cardlist.styled'
import useInstantListHook from '@/Hooks/listpage/useInstantListHook';

const InstantCardlist = () => {
    const { sortedSurveys } = useInstantListHook();
    return (
        <StyledList>
            {sortedSurveys.map((survey: any, index: any) => (
                <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "220px" }}>
                        <Card
                            title={survey.title}
                            nickname={survey.writer}
                            type={survey.surveyCategoryType}
                            giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
                            probability={survey.winningPercent + "%"}
                            remaintime={survey.remainTime || ""}
                            endtime={survey.endTime} />
                    </div>
                </div>
            ))}
        </StyledList>
    )
}

export default InstantCardlist