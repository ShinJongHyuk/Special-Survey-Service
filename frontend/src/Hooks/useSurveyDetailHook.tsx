'use client'
import { useEffect } from "react"
import axios from 'axios'
import useUserStore from "@/stores/useUserStore"

export const useSurveyDetailHook = () => {
    const accessToken = useUserStore((state:any) => state.accessToken)
    const survey_id = "1"
    const getSurveyDetail = async () => {
        try{
            const res = await axios({
                method : 'get',
                url : `http://221.164.64.185:8080/api/survey/detail/${survey_id}`,
                // headers: {
                //     Authorization: `Bearer ${accessToken}`
                // }
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return { getSurveyDetail }
}