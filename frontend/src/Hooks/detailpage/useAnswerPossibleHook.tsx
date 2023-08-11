"use client";
import AnswerPossibleGet from "@/api/surveydetail/answerPossibleGet";
import { useEffect, useState } from "react";

const useAnswerPossibleHook = (id: any) => {
    const [cananswer, setCananswer] = useState("");

    useEffect(() => {
        const fetchList = async () => {
            const data = await AnswerPossibleGet(id);
            if (data.success) {
                setCananswer(data.response);
            } else {
                console.log(data);
            }
        };
        fetchList();
    }, []);

    return { cananswer };
};

export default useAnswerPossibleHook;
