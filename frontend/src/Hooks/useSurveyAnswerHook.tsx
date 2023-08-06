'use client'
import api from "@/api/api"
import { useState } from "react"
import {SurveyInformationType} from './types/useSurveyAnswerHook.type'
import GetSurvey from "@/api/surveyAnswer/surveyGet"
export const useSurveyAnswerHook = () => {
    const [surveyInformation, setSurveyInformation] = useState<SurveyInformationType | null>(null)


    const getSurveyQuestion = async (surveyId:any) => {
        const data = await GetSurvey(surveyId)
        setSurveyInformation(data)
    }
    return { surveyInformation, getSurveyQuestion }
} 
