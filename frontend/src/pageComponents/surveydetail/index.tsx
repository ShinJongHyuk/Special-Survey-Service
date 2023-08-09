"use client";
import Image from "next/image";
import Board from "./components/board";
import Detail from "./components/detail";
import Result from "./components/result";
import useSurveyDetailHook from "@/Hooks/detailpage/useSurveyDetailHook";
import { StyledSurveyResultContainer } from "./SurveyDetail.styled";
import { useRouter } from "next/navigation";
import useAnswerLogHoook from "@/Hooks/detailpage/useAnswerLogHoook";

const SurveyDetail = (props: any) => {
  const { surveyDetail } = useSurveyDetailHook(props.id);
  const { answerlog } = useAnswerLogHoook(props.id);

  console.log("sd", surveyDetail);
  console.log("al", answerlog);
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div style={{ paddingTop: "70px", paddingLeft: "30px" }}>
        <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48} style={{ cursor: "pointer" }} onClick={() => router.back()}></Image>
      </div>

      <Detail surveyDetail={surveyDetail}></Detail>
      <StyledSurveyResultContainer>
        <Result surveyDetail={surveyDetail}></Result>
        <Board answerlog={answerlog} surveyDetail={surveyDetail}></Board>
        {/* {answerlog.length !== 0 ? <Board answerlog={answerlog}></Board> : <></>} */}
      </StyledSurveyResultContainer>
    </div>
  );
};

export default SurveyDetail;
