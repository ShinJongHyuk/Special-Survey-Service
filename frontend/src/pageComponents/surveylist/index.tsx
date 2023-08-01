"use client";

import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";
import SurveylistComponents from "./components";
import Banner from "./components/banner";

const Surveylist = () => {
    const selectBtn = useSurveylistStore((state) => state.selectBtn);


    return (
        <div>
            <Banner></Banner>
            <SurveylistComponents selectBtn={selectBtn} />
        </div>
    );
};

export default Surveylist;
