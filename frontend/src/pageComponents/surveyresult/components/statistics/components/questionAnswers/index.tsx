'use client'
import { Doughnut } from "react-chartjs-2"; 
import { Chart } from "chart.js"
import { CategoryScale, LinearScale, ArcElement } from "chart.js"
import { SurveyResult, ChartColor, ChartInfo, ChartContainer, ChartInfoContainer, ShortFormStatistics } from "./QuestionAnswer.styled";

Chart.register(CategoryScale, LinearScale, ArcElement);

const questionAnswer = (props:any) => {
    const answers = props.answers
    const type = props.questionCategoryType
    const countMap: { [key: string]: number } = {};

    answers?.forEach((answer: string) => {
        if (countMap[answer]) {
            countMap[answer]++;
        } else {
            countMap[answer] = 1;
        }
    });

    const totalCount = Object.values(countMap).reduce((sum, value) => sum + value, 0);

    const labels = Object.keys(countMap);
    const dataValues = labels.map((label) => countMap[label]);
    
    const lightenColor = (color: string, percent: number) => {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
    };

    const backgroundColors = dataValues.map((_, index) => lightenColor(props.surveyCategoryType ==="NORMAL" ? "#8E69FF" : "#FFAA29", index * 10));
    
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: backgroundColors
            }
        ],
    };

    const options = {
        cutout: 70
    };
    return (
        <>
        {type === "MULTIPLE_CHOICE" ?

        <div style={{display:"flex", gap:"30px", paddingTop:"10px"}}>
            <ChartContainer>
                <Doughnut data={data} options={options}></Doughnut>
            </ChartContainer>

            <ChartInfoContainer>
            {Object.keys(countMap).map((key, index) => {
                return (
                    <ChartInfo>
                    <ChartColor color={backgroundColors[index]} key={index}>■</ChartColor>
                    <SurveyResult>{key} : {countMap[key]}명 / {Math.round(countMap[key]  * 100/totalCount)}%</SurveyResult>
                    </ChartInfo>
                );
                })}
            </ChartInfoContainer>
        </div> 
    :
    type === "CHECK_BOX" ?
    <div style={{display:"flex", gap:"30px", paddingTop:"10px"}}>
            <ChartContainer>
                <Doughnut data={data} options={options}></Doughnut>
            </ChartContainer>

            <ChartInfoContainer>
            {Object.keys(countMap).map((key, index) => {
                return (
                    <ChartInfo>
                    <ChartColor color={backgroundColors[index]} key={index}>■</ChartColor>
                    <SurveyResult>{key} : {countMap[key]}명  / {Math.round(countMap[key] * 100/totalCount)}%</SurveyResult>
                    </ChartInfo>
                );
                })}
            </ChartInfoContainer>
        </div> 
    :
    <div>
        {answers && answers.map((e:any) => {
            return <ShortFormStatistics surveyCategoryType={props.surveyCategoryType}>{e}</ShortFormStatistics>
        })}
    </div> }
    </>
    )
}

export default questionAnswer