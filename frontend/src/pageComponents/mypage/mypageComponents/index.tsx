"use client";

import CreatedSurveyList from "./CreatedSurveyList";
import ResponsedSurveyList from "./AnsweredSurveyList";
import UserInfoList from "./UserInfoList";
import Winlist from "./Winlist";

const MypageComponents = (props: any) => {
  const path = props.selectBtn;
  console.log(path);

  if (path === "2") {
    return <ResponsedSurveyList selectBtn={path} />;
  } else if (path === "3") {
    return <CreatedSurveyList />;
  } else if (path === "4") {
    return <Winlist />;
  }
  return <UserInfoList />;
};

export default MypageComponents;
