import Card from '@/components/card'
import React from 'react'
import { StyledCardList } from './CardList.styled';
import useInstantHook from '@/Hooks/mainpage/useInstantHook';

const InstantCardlist = ({ contentType }: any) => {
    const { surveys } = useInstantHook();
    return (
        <StyledCardList>
            {surveys.map((survey: any, index: any) => (
                <div key={index} >
                    <div style={{ width: "220px" }}>
                        <Card
                            title={survey.title}
                            nickname={survey.writer}
                            type={survey.type}
                            giveaways={survey.giveaways}
                            probability={survey.probability}
                            remaintime={survey.remainTime || ""}
                            endtime={survey.endTime}
                            headcount={survey.headCount}
                            responsedtime={survey.responsedTime}
                            contentype={contentType} />
                    </div>
                </div>
            ))}
        </StyledCardList>
    )
}

export default InstantCardlist