"use client";
import Image from "next/image";
import Board from "./components/board";
import Detail from "./components/detail";
import Result from "./components/result";
import useSurveyDetailHook from "@/Hooks/useSurveyDetailHook";
import { StyledSurveyResultContainer } from "./SurveyDetail.styled";
import { useRouter } from "next/navigation";
import { DetailType } from "./SurvveyDetailType.type";

const SurveyDetail = (props: any) => {
  console.log("SurveyDetail: " + props.id);

  const { surveyDetail } = useSurveyDetailHook(props.id);
  const router = useRouter();
  if (!surveyDetail.surveyGiveaways) {
    return <div> Loading... </div>;
  }
  console.log("sd : ", surveyDetail);
  console.log(surveyDetail.surveyGiveaways[0].giveawayResponse.giveawayType);

  const detailProps: DetailType = {
    closedheadcount: surveyDetail.closedHeadCount,
    endtime: surveyDetail.endTime,
    headcount: surveyDetail.headCount,
    questioncount: surveyDetail.questionCount,
    requiredtime: surveyDetail.requiredTimeInSeconds,
    starttime: surveyDetail.startTime,
    type: surveyDetail.surveyCategoryType,
    title: surveyDetail.title,
    writername: surveyDetail.writerName,
    giveawaynames: surveyDetail.surveyGiveaways[0].giveawayResponse.name,
  };

  const resultProps: DetailType = {
    headcount: surveyDetail.headCount,
    type: surveyDetail.surveyCategoryType,
    giveaways: surveyDetail.surveyGiveaways[0].giveawayResponse.giveawayType,
    percent: surveyDetail.winningPercent,
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div style={{ paddingTop: "70px", paddingLeft: "30px" }}>
        <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48} style={{ cursor: "pointer" }} onClick={() => router.back()}></Image>
      </div>

      <Detail {...detailProps}></Detail>
      <StyledSurveyResultContainer>
        <Result {...resultProps}></Result>
        <Board type="즉시당첨"></Board>
      </StyledSurveyResultContainer>
    </div>
  );
};

export default SurveyDetail;
