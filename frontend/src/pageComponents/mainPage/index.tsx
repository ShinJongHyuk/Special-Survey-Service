"use client";
import React, { useState, useEffect } from "react";
import Speedyattack from "./components/speedyattack";
import Banner from "./components/banner";
import Timeattack from "./components/timeattack";
import Instantwin from "./components/instantwin";

const MainPage = () => {
  return (
    <>
      <Banner></Banner>
      <Timeattack />
      <Speedyattack />
      <Instantwin />
    </>
  );
};

export default MainPage;
