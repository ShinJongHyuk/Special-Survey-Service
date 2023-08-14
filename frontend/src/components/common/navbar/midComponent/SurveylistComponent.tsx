"use client";
import React from "react";
import { StyledMidComp, StyledSurveyListNavBtn } from "../Navbar.styled";
import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";

const SurveylistComponent = (props: any) => {
  const pathname = props.pathname;
  const setselectbtn = useSurveylistStore((state) => state.setselectbtn);
  const selectbtn = useSurveylistStore((state) => state.selectbtn);

  return (
    <StyledMidComp pathname={pathname}>
      <StyledSurveyListNavBtn isactive={selectbtn === "1"} btntype="1" onClick={() => setselectbtn("1")}>
        일 반
      </StyledSurveyListNavBtn>
      <StyledSurveyListNavBtn isactive={selectbtn === "2"} btntype="2" onClick={() => setselectbtn("2")}>
        즉시당첨
      </StyledSurveyListNavBtn>
    </StyledMidComp>
  );
};

export default SurveylistComponent;
