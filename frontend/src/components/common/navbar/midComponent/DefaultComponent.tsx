"use client";
import React from "react";
import { StyledNavbar, StyledNavLink } from "../Navbar.styled";
import { usePathname } from "next/navigation";

const DefaultComponent = (props: any) => {
  const pathname = props.pathname;

  return (
    <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "20px" }}>
      <StyledNavLink href="/">설문만들기</StyledNavLink>
      <StyledNavLink href="/normalSurveyList">설문하기</StyledNavLink>
    </div>
  );
};

export default DefaultComponent;
