import React from "react";
import { StyledContent, StyledContentText } from "./Instantwin.styled";
import CardList from "../cardlist";
import Image from "next/image";

const Instantwin = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "700px" }}>
      <img src="/Content3.png" style={{ width: "100%", position: "absolute", height: "700px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="title">
          <Image src="/bulb.svg" priority={true} width={50} height={51} alt="bulb"></Image>
          <StyledContentText> 즉시 당첨 </StyledContentText>
          <StyledContentText $issub="true"> 설문하고 바로 당첨자가 되어보세요! </StyledContentText>
        </div>
        <CardList contentType="instantwin"></CardList>
        <button> 더보기 </button>
      </StyledContent>
    </div>
  );
};

export default Instantwin;
