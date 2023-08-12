"use client";
import Mobilemain from "@/mobilePageComponents/mobilemain";
import MainPage from "../mainPage";
import SurveyDetail from "../surveydetail";
import MobileSurveyDetail from "@/mobilePageComponents/surveydetail";
import useIsMobileHook from "@/Hooks/useIsMobileHook";
import Surveylist from "../surveylist";
import Speedyattacklist from "@/mobilePageComponents/speedyattacklist";

const Viewcheck = ({ page, id }: { page: string; id?: string }) => {
  const isMobile = useIsMobileHook();
  const currentView = isMobile ? "mobile" : "desktop";

  return (
    <>
      {page === "main" && (currentView === "desktop" ? <MainPage /> : <Mobilemain />)}
      {page === "surveylist" && (currentView === "desktop" ? <Surveylist /> : <Speedyattacklist from="main" />)}
      {page === "surveydetail" && (currentView === "desktop" ? <SurveyDetail id={id} /> : <MobileSurveyDetail id={id} />)}
    </>
  );
};

export default Viewcheck;
