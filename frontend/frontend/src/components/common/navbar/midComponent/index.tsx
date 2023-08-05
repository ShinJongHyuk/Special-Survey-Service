"use client";
import React from "react";
import DefaultComponent from "./DefaultComponent";
import SurveylistComponent from "./SurveylistComponent";
import MypageComponent from "./MypageComponent";
import SurveyDetailComponent from "./SurveyDetailComponent";
import MakesruveyComponent from "./MakesurveyComponent";

const MidComponent = (props: any) => {
  const pathname = props.pathname;

  if (pathname === "/surveylist") {
    return <SurveylistComponent pathname={pathname} />;
  } else if (pathname === "/surveydetail") {
    return <SurveyDetailComponent pathname={pathname} />
  } else if (pathname === "/mypage") {
    return <MypageComponent pathname={pathname} />;
  } else if (pathname === "/makesurvey") {
    return <MakesruveyComponent pathname={pathname} />
  }
  return <DefaultComponent pathname={pathname} />;
};

export default MidComponent;
