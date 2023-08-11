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
import moment from "moment";

const SurveyDetail = (props: any) => {
  const { surveyDetail } = useSurveyDetailHook(props.id);
  const { answerlog } = useAnswerLogHook(props.id);
  const accessToken = localStorage.getItem("accessToken");

  const defaultAnswer = "CANANSWER";
  const closedAnswer = surveyDetail.closed ? "TIMEOVER" : defaultAnswer;
  const cananswer = accessToken ? useAnswerPossibleHook(props.id).cananswer : closedAnswer;


  console.log("sd", surveyDetail);
  console.log("al", answerlog);
  // console.log("ca", cananswer);
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div style={{ paddingTop: "70px", paddingLeft: "30px" }}>
        <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48} style={{ cursor: "pointer" }} onClick={() => router.back()}></Image>
      </div>

      <Detail surveyDetail={surveyDetail} cananswer={cananswer}></Detail>
      <StyledSurveyResultContainer>
        <Result surveyDetail={surveyDetail}></Result>
        <Board answerlog={answerlog} surveyDetail={surveyDetail}></Board>
        {/* {answerlog.length !== 0 ? <Board answerlog={answerlog}></Board> : <></>} */}
      </StyledSurveyResultContainer>
    </div>
  );
};

export default SurveyDetail;
