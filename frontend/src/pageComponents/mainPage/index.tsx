"use client";
import React, { useState, useEffect } from "react";
import Speedyattack from "./components/speedyattack";
import Banner from "./components/banner";
import Timeattack from "./components/timeattack";
import Instantwin from "./components/instantwin";
import useIsMobileHook from "@/Hooks/useIsMobileHook";
import Mobilemain from "@/mobilePageComponents/mobilemain";

const MainPage = () => {
  const isMobile = useIsMobileHook();
  return (<>
    {
      isMobile ?
        (<Mobilemain />) : (<>
          <Banner></Banner>
          <Timeattack />
          <Speedyattack />
          <Instantwin />
        </>)
    }
  </>

  );
};

export default MainPage;
