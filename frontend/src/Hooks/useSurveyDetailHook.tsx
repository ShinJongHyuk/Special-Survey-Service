'use client'
import surveyDetailGet from "@/api/surveydetail/surveyDetailGet";
import { useEffect, useState } from "react"

const useSurveyDetailHook = (id: any) => {
    const [surveyDetail, setSurveyDetail] = useState<any>([]);

    console.log("detail hook : ", id);
    useEffect(() => {
        const fetchList = async () => {
            const data = await surveyDetailGet(id);

            setSurveyDetail(data);
        };
        fetchList();
    }, []);


    return { surveyDetail };
}

export default useSurveyDetailHook;

