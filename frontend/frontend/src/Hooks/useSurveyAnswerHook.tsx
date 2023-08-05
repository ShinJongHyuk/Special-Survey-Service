'use client'
import api from "@/api/api"
import { useState } from "react"
import {SurveyInformationType} from './types/useSurveyAnswerHook.type'
import GetSurvey from "@/api/surveyAnswer/GetSurvey"
export const useSurveyAnswerHook = () => {
    const [surveyInformation, setSurveyInformation] = useState<SurveyInformationType | null>(null)
    const survey_id = 1

    const getSurveyQuestion = async () => {
        const data = await GetSurvey(survey_id)
        setSurveyInformation(data)
    }
    // const getSurveyQuestion = async (accessToken:any) => {
    //     try {
    //         const res = await api.get(`/survey/${survey_id}`,{
    //             headers : {
    //                 Authorization : `Bearer ${accessToken}`
    //             }
    //         })
    //         await setSurveyInformation(res.data.response)
    //     } catch(err) {
    //         console.log(err)
    //     } 
    // }
    return { surveyInformation, getSurveyQuestion }
} 
