"use client";
import React from "react";
import { StyledMidComp, StyledNavBtn } from "../Navbar.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const MypageComponent = (props: any) => {
  const pathname = props.pathname;
  const setSelectBtn = useMypageStore((state) => state.setSelectBtn);

  return (
    <StyledMidComp pathname={pathname} >
      <StyledNavBtn onClick={() => setSelectBtn("1")}> 회원 정보 수정 </StyledNavBtn>
      <StyledNavBtn onClick={() => setSelectBtn("2")}> 응답한 설문 </StyledNavBtn>
      <StyledNavBtn onClick={() => setSelectBtn("3")}> 만든 설문 </StyledNavBtn>
      <StyledNavBtn onClick={() => setSelectBtn("4")}> 당첨된 상품 </StyledNavBtn>
    </StyledMidComp>
  );
};

export default MypageComponent;
