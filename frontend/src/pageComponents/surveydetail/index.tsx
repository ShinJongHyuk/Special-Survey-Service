"use client";
import Image from "next/image";
import Board from "./components/board";
import Detail from "./components/detail";
import Result from "./components/result";
import useSurveyDetailHook from "@/Hooks/detailpage/useSurveyDetailHook";
import { StyledSurveyResultContainer } from "./SurveyDetail.styled";
import { useRouter } from "next/navigation";
import useAnswerLogHook from "@/Hooks/detailpage/useAnswerLogHook";
import useAnswerPossibleHook from "@/Hooks/detailpage/useAnswerPossibleHook";

const SurveyDetail = (props: any) => {

  const { surveyDetail } = useSurveyDetailHook(props.id);
  const { answerlog } = useAnswerLogHook(props.id);
  const { cananswer } = useAnswerPossibleHook(props.id);
  const cananswertype = surveyDetail.closed ? "TIMEOVER" : cananswer;
  console.log(surveyDetail)
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div style={{ paddingTop: "70px", paddingLeft: "30px" }}>
        <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48} style={{ cursor: "pointer" }} onClick={() => router.back()}></Image>
      </div>

      <Detail surveyDetail={surveyDetail} cananswer={cananswertype}></Detail>
      <StyledSurveyResultContainer>
        <Result surveyDetail={surveyDetail}></Result>
        <Board answerlog={answerlog} surveyDetail={surveyDetail} ></Board>
        {/* {answerlog.length !== 0 ? <Board answerlog={answerlog}></Board> : <></>} */}
      </StyledSurveyResultContainer>
    </div>
  );
};

export default SurveyDetail;
