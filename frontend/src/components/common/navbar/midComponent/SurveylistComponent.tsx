"use client";
import React from "react";
import { StyledMidComp, StyledSurveyListNavBtn } from "../Navbar.styled";
import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";

const SurveylistComponent = (props: any) => {
  const pathname = props.pathname;
  const setSelectBtn = useSurveylistStore((state) => state.setSelectBtn);
  const selectBtn = useSurveylistStore((state) => state.selectBtn);

  return (
    <StyledMidComp pathname={pathname}>
      <StyledSurveyListNavBtn isactive={selectBtn === "1"} btntype="1" onClick={() => setSelectBtn("1")}>
        일 반
      </StyledSurveyListNavBtn>
      <StyledSurveyListNavBtn isactive={selectBtn === "2"} btntype="2" onClick={() => setSelectBtn("2")}>
        즉시당첨
      </StyledSurveyListNavBtn>
    </StyledMidComp>
  );
};

export default SurveylistComponent;
