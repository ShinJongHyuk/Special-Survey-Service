"use client";
import React, { useState, useEffect } from "react";
import Speedyattack from "./components/speedyattack";
import Banner from "./components/banner";
import Timeattack from "./components/timeattack";
import Instantwin from "./components/instantwin";
// import useIsMobileHook from "@/Hooks/useIsMobileHook";
import Mobilemain from "@/mobilePageComponents/mobilemain";
import { BrowserView, MobileView } from "react-device-detect";

const MainPage = () => {
  // const isMobile = useIsMobileHook();
  return (
    <>
      {/* <BrowserView> */}
      <Banner></Banner>
      <Timeattack />
      <Speedyattack />
      <Instantwin />
      {/* </BrowserView>
      <MobileView>
        <Mobilemain />
      </MobileView> */}
      {/* {
      isMobile ?
        (<Mobilemain />) : (<>
          <Banner></Banner>
          <Timeattack />
          <Speedyattack />
          <Instantwin />
        </>)
    } */}
    </>
  );
};

export default MainPage;
