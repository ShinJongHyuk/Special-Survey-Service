import React from "react";
import { StyledContent, StyledContentText } from "./Content.styled";
import CardList from "../cardlist";
import Image from "next/image";

const Content = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "700px" }}>
      <img src="/Content1.png" style={{ width: "100%", position: "absolute", height: "700px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="title">
          <Image src="/casino.svg" priority={true} width={50} height={51} alt="casino"></Image>
          <StyledContentText> SSS pick </StyledContentText>
          <StyledContentText $issub="true"> SSS 가 추천하는 Survey </StyledContentText>
        </div>
        <CardList></CardList>
        <button> 더보기 </button>
      </StyledContent>
    </div>
  );
};

export default Content;
