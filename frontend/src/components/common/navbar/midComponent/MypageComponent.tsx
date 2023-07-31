"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { StyledNavBtn } from "../Navbar.styled";
const MypageComponent = (props: any) => {
  const pathname = props.pathname;

  return (
    <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
      <StyledNavBtn> 회원 정보 수정 </StyledNavBtn>
      <StyledNavBtn> 응답한 설문 </StyledNavBtn>
      <StyledNavBtn> 만든 설문 </StyledNavBtn>
      <StyledNavBtn> 당첨된 상품 </StyledNavBtn>
    </div>
  );
};

export default MypageComponent;
