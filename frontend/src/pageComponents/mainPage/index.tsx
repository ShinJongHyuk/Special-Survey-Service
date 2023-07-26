"use client";
import React from "react";
import { StyledTextbox, StyledBannerBox, StyledBanner, StyledBannerText } from "./MainPage.styled";
const MainPage = () => {
  return (
    <StyledBanner>
      <img src="/main.png"></img>

      <StyledBannerBox>
        <StyledTextbox>
          <StyledBannerText isKo={false}> Let's Survey! </StyledBannerText>
          <StyledBannerText isKo={true}> 우리는 설문조사를 하고 리워드를 받는 사이트에요!</StyledBannerText>
        </StyledTextbox>
        <div>
          <button> 응답하기 </button>
          <button> 제작하기 </button>
        </div>
      </StyledBannerBox>
    </StyledBanner>
  );
};

export default MainPage;
