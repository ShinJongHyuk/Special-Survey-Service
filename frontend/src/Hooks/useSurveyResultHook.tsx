'use client'
import surveyResultGet from "@/api/surveyresult/surveyResultGet"
import { useState } from "react"

interface surveyResultType {
  headCount: any,
  surveyCategoryType: any,
  questionAnswers: any,
  questions: any,
  title: any,
  content: any
}

export const useSurveyResultHook = () => {
  const [surveyResult, setSurveyResult] = useState<surveyResultType | null>()

  const getSurveyResult = async (surveyId: any) => {
    const res = await surveyResultGet(surveyId)
    //console.log(res)
    if (res.data.success === true) {
      setSurveyResult(res.data.response)
    } else if (res.data.success === false) {
      alert(res.data.apiError.message)
    }
  }

  return { surveyResult, getSurveyResult }
}