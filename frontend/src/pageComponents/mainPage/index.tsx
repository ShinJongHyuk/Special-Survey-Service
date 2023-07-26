"use client";
import React from "react";
import { StyledTextbox, StyledBannerBox, StyledBanner, StyledBannerText, StyledContentTitle, StyledContent, StyledContentText } from "./MainPage.styled";
import Image from "next/image"
const MainPage = () => {
  return (
    <>
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

      <StyledContent>
        <StyledContentTitle>
          <Image src="/casino.svg" priority={true} width={50} height={51} alt="casino"></Image>
          <StyledContentText> SSS pick </StyledContentText>
          <StyledContentText isSub={true}> SSS 가 추천하는 Survey </StyledContentText>
        </StyledContentTitle>
        <div> Card Lists </div>
        <button> 더보기 </button>
      </StyledContent>

    </>
  );
};

export default MainPage;
