"use client";
import Mobilemain from "@/mobilePageComponents/mobilemain";
import MainPage from "../mainPage";
import SurveyDetail from "../surveydetail";
import MobileSurveyDetail from "@/mobilePageComponents/surveydetail";
import useIsMobileHook from "@/Hooks/useIsMobileHook";
import Surveylist from "../surveylist";
import Speedyattacklist from "@/mobilePageComponents/speedyattacklist";
import Mobilelogin from "@/mobilePageComponents/login";
import Login from "../login";
import Signup from "../signup";
import MobileSignup from "@/mobilePageComponents/signup";
import SurveyAnswer from "../surveyAnswer";
import MobileSurveyanswer from "@/mobilePageComponents/surveyanswer";
import Mypage from "../mypage";
import MobileMypage from "@/mobilePageComponents/mypage";

const Viewcheck = ({ page, id }: { page: string; id?: string }) => {
  const isMobile = useIsMobileHook();
  const currentView = isMobile ? "mobile" : "desktop";

  return (
    <>
      {page === "main" && (currentView === "desktop" ? <MainPage /> : <Mobilemain />)}
      {page === "login" && (currentView === "desktop" ? <Login /> : <Mobilelogin />)}
      {page === "signup" && (currentView === "desktop" ? <Signup /> : <MobileSignup />)}
      {page === "surveylist" && (currentView === "desktop" ? <Surveylist /> : <Speedyattacklist from="main" />)}
      {page === "surveydetail" && (currentView === "desktop" ? <SurveyDetail id={id} /> : <MobileSurveyDetail id={id} />)}
      {page === "surveyanswer" && (currentView === "desktop" ? <SurveyAnswer id={id} /> : <MobileSurveyanswer id={id} />)}
      {page === "mypage" && (currentView === "desktop" ? <Mypage /> : <MobileMypage />)}
    </>
  );
};

export default Viewcheck;
