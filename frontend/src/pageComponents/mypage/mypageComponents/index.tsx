"use client";

import WritingSurveyList from "./WritingSurveyList";
import AnsweredSurveyList from "./AnsweredSurveyList";
import UserInfoList from "./UserInfoList";
import Winlist from "./Winlist";

const MypageComponents = (props: any) => {
  const path = props.selectBtn;
  console.log(path);

  if (path === "2") {
    return <AnsweredSurveyList selectBtn={path} />;
  } else if (path === "3") {
    return <WritingSurveyList selectBtn={path} />;
  } else if (path === "4") {
    return <Winlist />;
  }
  return <UserInfoList />;
};

export default MypageComponents;
