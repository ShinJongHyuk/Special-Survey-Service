"use client";

import ResponsedSurveyList from "./ResponsedSurveyList";

const MypageComponents = (props: any) => {
  const path = props.selectBtn;
  // if (path === "1") {

  // }else
  if (path === "2") {
    return <ResponsedSurveyList />;
  }
  return <div>default</div>;
};

export default MypageComponents;
