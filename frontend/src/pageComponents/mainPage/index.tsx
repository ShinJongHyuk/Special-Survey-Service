"use client";
import React from "react";
import SSSPick from "./components/ssspick";
import Banner from "./components/banner"
import Timeattack from "./components/timeattack";
const MainPage = () => {
  return (
    <>
      <Banner></Banner>
      <SSSPick></SSSPick>
      <Timeattack />
    </>
  );
};

export default MainPage;
