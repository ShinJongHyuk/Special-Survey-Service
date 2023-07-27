"use client";
import React from "react";
import SSSPick from "./components/ssspick";
import Banner from "./components/banner"
import Timeattack from "./components/timeattack";
import Instantwin from "./components/instantwin";

const MainPage = () => {
  return (
    <>
      <Banner></Banner>
      <SSSPick></SSSPick>
      <Timeattack />
      <Instantwin />
    </>
  );
};

export default MainPage;
