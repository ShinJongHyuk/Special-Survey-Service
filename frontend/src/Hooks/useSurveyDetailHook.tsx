'use client'
import { useEffect } from "react"
import axios from 'axios'

export const useSurveyDetailHook = () => {
    const survey_id = "1"
    const getSurveyDetail = async () => {
        try{
            const res = await axios({
                method : 'get',
                url : `http://221.164.64.185:8080/api/survey/detail/${survey_id}`
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return { getSurveyDetail }
}