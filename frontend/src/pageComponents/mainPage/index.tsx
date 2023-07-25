"use client";
import React from "react";
import Image from "next/image";
import { StyledTextbox } from "./MainPage.styled";
const MainPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%", height: "450px", position: "relative" }}>
        <Image src="/main.png" priority={true} fill alt="main"></Image>
      </div>
      <StyledTextbox>
        <div>
          <div> Let's Survey! </div>
          <div> 우리는 설문조사를 하고 리워드를 받는 사이트에요!</div>
        </div>
        <div>
          <button> 응답하기 </button>
          <button> 제작하기 </button>
        </div>
      </StyledTextbox>
    </div>
  );
};

export default MainPage;
