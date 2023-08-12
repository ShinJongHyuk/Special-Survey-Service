"use client";
import { useState, useEffect } from "react";
// import useIsMobileHook from "@/Hooks/useIsMobileHook";
import Mobilemain from "@/mobilePageComponents/mobilemain";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import MainPage from "../mainPage";

// const Viewcheck = () => {
//   // const isMobile = useIsMobileHook();
//   return (
//     <>
//       <BrowserView>
//         <MainPage />
//       </BrowserView>
//       <MobileView>
//         <Mobilemain />
//       </MobileView>
//     </>
//   );
// };

const Viewcheck = () => {
  const [currentView, setCurrentView] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    if (isBrowser) {
      setCurrentView("desktop");
    } else if (isMobile) {
      setCurrentView("mobile");
    }
  }, []);

  if (!currentView) return null;

  return currentView === "desktop" ? <MainPage /> : <Mobilemain />;
};

export default Viewcheck;
