"use client";
import React from "react";
import { StyledMidComp, StyledMypageNavBtn } from "../Navbar.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const MypageComponent = (props: any) => {
  const pathname = props.pathname;
  const setSelectBtn = useMypageStore((state) => state.setSelectBtn);
  const selectBtn = useMypageStore((state) => state.selectBtn);

  return (
    <StyledMidComp pathname={pathname}>
      <StyledMypageNavBtn selectBtn={selectBtn} colorCode="1" onClick={() => setSelectBtn("1")}>
        회원 정보 수정
      </StyledMypageNavBtn>
      <StyledMypageNavBtn selectBtn={selectBtn} colorCode="2" onClick={() => setSelectBtn("2")}>
        응답한 설문
      </StyledMypageNavBtn>
      <StyledMypageNavBtn selectBtn={selectBtn} colorCode="3" onClick={() => setSelectBtn("3")}>
        만든 설문
      </StyledMypageNavBtn>
      <StyledMypageNavBtn selectBtn={selectBtn} colorCode="4" onClick={() => setSelectBtn("4")}>
        당첨된 상품
      </StyledMypageNavBtn>
    </StyledMidComp>
  );
};

export default MypageComponent;
