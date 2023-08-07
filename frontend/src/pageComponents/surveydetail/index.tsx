"use client";
import Image from "next/image";
import Board from "./components/board";
import Detail from "./components/detail";
import Result from "./components/result";
import useSurveyDetailHook from "@/Hooks/useSurveyDetailHook";
import { StyledSurveyResultContainer } from "./SurveyDetail.styled";
import { useRouter } from "next/navigation";

const SurveyDetail = (props: any) => {
  const { surveyDetail } = useSurveyDetailHook(props.id);
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div style={{ paddingTop: "70px", paddingLeft: "30px" }}>
        <Image src="/surveyDetail/BackImg.png" alt="back" width={48} height={48} style={{ cursor: "pointer" }} onClick={() => router.back()}></Image>
      </div>

      <Detail surveyDetail={surveyDetail}></Detail>
      <StyledSurveyResultContainer>
        <Result surveyDetail={surveyDetail}></Result>
        {/* <Board type="즉시당첨"></Board> */}
      </StyledSurveyResultContainer>
    </div >
  );
};

export default SurveyDetail;
