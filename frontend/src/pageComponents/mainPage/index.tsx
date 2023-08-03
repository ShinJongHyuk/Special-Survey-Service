"use client";
import React, { useState, useEffect } from "react";
import SSSPick from "./components/ssspick";
import Banner from "./components/banner";
import Timeattack from "./components/timeattack";
import Instantwin from "./components/instantwin";

const MainPage = () => {
  return (
    <>
      <Banner></Banner>
      <Timeattack />
      {/* <SSSPick></SSSPick> */}
      <Instantwin />
    </>
  );
};

export default MainPage;
