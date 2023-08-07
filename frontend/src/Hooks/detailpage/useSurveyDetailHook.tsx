'use client'
import surveyDetailGet from "@/api/surveydetail/surveyDetailGet";
import { useEffect, useState } from "react"

const useSurveyDetailHook = (id: any) => {
    const [surveyDetail, setSurveyDetail] = useState<any>({});

    useEffect(() => {
        const fetchList = async () => {
            const data = await surveyDetailGet(id);
            if (data.success) {
                setSurveyDetail(data.response);

            } else {
                console.log(data.apiError)
            }
        };
        fetchList();
    }, []);


    return { surveyDetail };
}

export default useSurveyDetailHook;

