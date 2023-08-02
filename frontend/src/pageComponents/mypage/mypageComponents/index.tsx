"use client";

import CreatedSurveyList from "./CreatedSurveyList";
import ResponsedSurveyList from "./ResponsedSurveyList";
import Winlist from "./Winlist";

const MypageComponents = (props: any) => {
  const path = props.selectBtn;
  console.log(path);
  // if (path === "1") {

  // }else
  if (path === "2") {
    return <ResponsedSurveyList />;
  } else if (path === "3") {
    return <CreatedSurveyList />
  }
  else if (path === "4") {
    return <Winlist />
  }
  return <div>default</div>;
};

export default MypageComponents;
