import React, { useState,useEffect } from 'react';
import { useSurveyAnswerHook } from '@/Hooks/useSurveyAnswerHook';

function Statistics(props : any) {
    const DummyData  = {
        "success": true,
        "response": {
            "id": 1,
            "title": "질문제목2", 
            "startTime": "2023-08-01T22:56:00", 
            "endTime": "2023-08-02T22:57:00",
            "headCount": 1, 
            "closedHeadCount": 10, 
            "writer": 2, 
            "totalGiveawayCount": 5,
            "requiredTimeInSeconds": 30, 
            "closed": false,
            "winningPercent": 50.0,
            "surveyCategoryType": "INSTANT_WIN",
            "questions": [
                {
                    "id": 1,
                    "questionNumber": 1,
                    "content": "문제1",
                    "imgAddress": null,
                    "type": "MULTIPLE_CHOICE",
                    "multipleChoices": [
                        {
                            "id": 1,
                            "content": "보기1",
                            "linkNumber": null
                        },
                        {
                            "id": 2,
                            "content": "보기2 ",
                            "linkNumber": null
                        }
                    ]
                },
                {
                    "id": 2,
                    "questionNumber": 2,
                    "content": "문제1",
                    "imgAddress": null,
                    "type": "SHORT_FORM",
                    "multipleChoices": []
                }
            ],
            "surveyGiveaways": [
                {
                    "id": 1,
                    "count": 5,
                    "giveawayResponse": {
                        "id": 1,
                        "giveawayType": "COFFEE",
                        "name": "스타벅스 아이스 아메리카노",
                        "price": 4500
                    }
                }
            ],
            "surveyTarget": [
                "MAN",
                "WOMAN",
                "TEENS",
                "TWENTIES",
                "THIRTIES"
            ]
        },
        "apiError": null,
        "accessToken": null
    }
    const [surveyData, setSurveyData] = useState(DummyData);
    const { surveyInformation, getSurveyQuestion } = useSurveyAnswerHook()




    useEffect(() => {
        if (surveyInformation) {
            console.log(surveyInformation);
        }
    }, [surveyInformation]);




    return (
        <div>Statistics</div>
    )
}

export default Statistics;