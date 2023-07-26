"use client";
import React from "react";
import { StyledBannerBox, StyledBannerText } from "./MainPage.styled";
import Content from "./components/content";
const MainPage = () => {
  return (
    <>
      <div>
        <img src="/main.png" style={{ width: "100%", height: "500px" }}></img>
        <StyledBannerBox>
          <div className="textbox">
            <StyledBannerText isKo={false}> Let's Survey! </StyledBannerText>
            <StyledBannerText isKo={true}> 우리는 설문조사를 하고 리워드를 받는 사이트에요!</StyledBannerText>
          </div>
          <div>
            <button> 응답하기 </button>
            <button> 제작하기 </button>
          </div>
        </StyledBannerBox>
      </div>

      <Content></Content>
    </>
  );
};

export default MainPage;
