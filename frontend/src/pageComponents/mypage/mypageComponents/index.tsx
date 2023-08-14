"use client";

import WritingSurveyList from "./WritingSurveyList";
import AnsweredSurveyList from "./AnsweredSurveyList";
import UserInfoList from "./components/userinfo";
import Winlist from "./Winlist";

const MypageComponents = (props: any) => {
  const path = props.selectbtn;

  if (path === "2") {
    return <AnsweredSurveyList selectbtn={path} />;
  } else if (path === "3") {
    return <WritingSurveyList selectbtn={path} />;
  } else if (path === "4") {
    return <Winlist />;
  }
  return <UserInfoList />;
};

export default MypageComponents;
