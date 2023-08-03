'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import useUserStore from "@/stores/useUserStore"

export const useSurveyDetailHook = () => {
    const accessToken = useUserStore((state:any) => state.accessToken)
    const [surveyDetail, setSurveyDetail] = useState()
    const survey_id = "1"
    useEffect(() => {})
    const getSurveyDetail = async () => {
        try{
            const res = await axios({
                method : 'get',
                url : `http://221.164.64.185:8080/api/survey/detail/${survey_id}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            setSurveyDetail(res.data.response)
        } catch (err) {
            console.log(err)
        }
    }

    return { surveyDetail, getSurveyDetail }
}