"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { StyledNavBtn } from "../Navbar.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const MypageComponent = (props: any) => {
  const pathname = props.pathname;
  const setSelectBtn = useMypageStore((state) => state.setSelectBtn);

  return (
    <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
      <StyledNavBtn onClick={() => setSelectBtn("1")}> 회원 정보 수정 </StyledNavBtn>
      <StyledNavBtn onClick={() => setSelectBtn("2")}> 응답한 설문 </StyledNavBtn>
      <StyledNavBtn onClick={() => setSelectBtn("3")}> 만든 설문 </StyledNavBtn>
      <StyledNavBtn onClick={() => setSelectBtn("4")}> 당첨된 상품 </StyledNavBtn>
    </div>
  );
};

export default MypageComponent;
