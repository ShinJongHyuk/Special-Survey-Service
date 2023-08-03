import React from "react";
import { StyledContent, StyledContentText } from "./SSSpick.styled";
import CardList from "../cardlist";
import Image from "next/image";

const SSSPick = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "750px" }}>
      <img src="/mainpage/Content1.png" style={{ width: "100%", position: "absolute", height: "750px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="title">
          <Image src="/mainpage/time.png" priority={true} width={50} height={51} alt="time"></Image>
          <StyledContentText> Speedy Attack </StyledContentText>
          <StyledContentText $issub="true"> 응답 시간이 짧은 설문이에요! </StyledContentText>
        </div>
        <CardList contentType="instantwin"></CardList>
      </StyledContent>
    </div>
  );
};

export default SSSPick;
