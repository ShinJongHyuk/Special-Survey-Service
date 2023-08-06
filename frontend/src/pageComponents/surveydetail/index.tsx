"use client";
import Image from "next/image";
import Board from "./components/board";
import Detail from "./components/detail";
import Result from "./components/result";
import useSurveyDetailHook from "@/Hooks/useSurveyDetailHook";
import { StyledSurveyResultContainer } from "./SurveyDetail.styled";
import { DetailProps } from "./components/detail/Detail.type";

const SurveyDetail = (props: any) => {
  console.log("SurveyDetail: " + props.id);

  const { surveyDetail } = useSurveyDetailHook(props.id);
  console.log(surveyDetail);

  const detailProps: DetailProps = {
    closedheadcount: surveyDetail.closedHeadCount,
    endtime: surveyDetail.endTime,
    headcount: surveyDetail.headCount,
    questioncount: surveyDetail.questionCount,
    requiredtime: surveyDetail.requiredTimeInSeconds,
    starttime: surveyDetail.startTime,
    type: surveyDetail.surveyCategoryType,
    title: surveyDetail.title,
    writername: surveyDetail.writerName,
    giveawaynames: surveyDetail.giveawayNames,
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div style={{ paddingTop: "70px", paddingLeft: "30px" }}>
        <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48} style={{ cursor: "pointer" }}></Image>
      </div>

      <Detail {...detailProps}></Detail>
      <StyledSurveyResultContainer>
        <Result type="즉시당첨"></Result>
        <Board type="즉시당첨"></Board>
      </StyledSurveyResultContainer>
    </div>
  );
};

export default SurveyDetail;
