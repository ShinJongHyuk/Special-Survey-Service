"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledInstantNavLink, StyledTimeattackNavLink } from "../Navbar.styled";
import { usePathname } from "next/navigation";
import DefaultComponent from "./DefaultComponent";
import SurveylistComponent from "./SurveylistComponent";
import MypageComponent from "./MypageComponent";

const MidComponent = (props: any) => {
  const pathname = props.pathname;

  if (pathname === "/instantWinSurveyList" || pathname === "/normalSurveyList") {
    return <SurveylistComponent pathname={pathname} />;
  } else if (pathname === "/surveydetail") {
    return <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}> </div>;
  } else if (pathname === "/mypage") {
    return <MypageComponent pathname={pathname} />;
  }
  return <DefaultComponent pathname={pathname} />;
};

export default MidComponent;
