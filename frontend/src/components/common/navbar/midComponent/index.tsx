"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledInstantNavLink, StyledTimeattackNavLink } from "../Navbar.styled";
import { usePathname } from "next/navigation";
import DefaultComponent from "./DefaultComponent";
import SurveylistComponent from "./SurveylistComponent";
import MypageComponent from "./MypageComponent";
import SurveyDetailComponent from "./SurveyDetailComponent";

const MidComponent = (props: any) => {
  const pathname = props.pathname;

  if (pathname === "/instantWinSurveyList" || pathname === "/normalSurveyList") {
    return <SurveylistComponent pathname={pathname} />;
  } else if (pathname === "/surveydetail") {
    return <SurveyDetailComponent pathname={pathname}/>
  } else if (pathname === "/mypage") {
    return <MypageComponent pathname={pathname} />;
  }
  return <DefaultComponent pathname={pathname} />;
};

export default MidComponent;
