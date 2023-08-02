"use client";
import React from "react";
import { StyledMidComp, StyledNavBtn } from "../Navbar.styled";
import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";

const SurveylistComponent = (props: any) => {
  const pathname = props.pathname;
  const setSelectBtn = useSurveylistStore((state) => state.setSelectBtn);
  const selectBtn = useSurveylistStore((state) => state.selectBtn);

  return (
    <StyledMidComp pathname={pathname} >
      <StyledNavBtn selectBtn={selectBtn} onClick={() => setSelectBtn("1")}> 일  반 </StyledNavBtn>
      <StyledNavBtn selectBtn={selectBtn} onClick={() => setSelectBtn("2")}> 즉시당첨 </StyledNavBtn>

    </StyledMidComp>
  );
};

export default SurveylistComponent;
