'use client'
import surveyDetailGet from "@/api/surveydetail/surveyDetailGet";
import { useEffect, useState } from "react"

const useSurveyDetailHook = (id: any) => {
    const [surveyDetail, setSurveyDetail] = useState<any>({});

    console.log("hook")
    useEffect(() => {
        console.log("useeffect  ");
        const fetchList = async () => {
            const data = await surveyDetailGet(id);
            if (data.success) {
                setSurveyDetail(data.response);
                console.log("success : ", data.response);

            } else {
                console.log(data.apiError)
            }
        };
        fetchList();
    }, []);


    return { surveyDetail };
}

export default useSurveyDetailHook;

