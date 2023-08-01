"use client";

import NormalSurveylist from "./NormalSurveylist";
import InstantwinSurveylist from "./InstantwinSurveylist";

const SurveylistComponents = (props: any) => {
    const path = props.selectBtn;

    let bgcolor;
    if (path === "1") {
        bgcolor = "rgba(142, 105, 255, 0.20)";
    } else {
        bgcolor = "rgba(255, 250, 174, 0.20)";
    }

    if (path === "1") {

        return (
            <div style={{ backgroundColor: `${bgcolor}` }}>
                <NormalSurveylist />
            </div>
        )
    } else {
        return (
            <div style={{ backgroundColor: `${bgcolor}` }}>
                <InstantwinSurveylist />
            </div>
        )
    }
};

export default SurveylistComponents;
