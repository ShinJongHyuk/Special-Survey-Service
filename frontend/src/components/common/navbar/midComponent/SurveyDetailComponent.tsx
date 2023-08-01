"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { StyledNavBtn } from "../Navbar.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const SurveyDetailComponent = (props: any) => {
  const pathname = props.pathname;
  return (
    <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
      
    </div>
  );
};

export default SurveyDetailComponent;