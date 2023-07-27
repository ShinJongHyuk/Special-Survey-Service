import React from "react";
import { StyledContent, StyledContentText } from "./SSSpick.styled";
import CardList from "../cardlist";
import Image from "next/image";
import Button from "@/components/button";

const SSSPick = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "700px" }}>
      <img src="/Content1.png" style={{ width: "100%", position: "absolute", height: "700px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="title">
          <Image src="/casino.svg" priority={true} width={50} height={51} alt="casino"></Image>
          <StyledContentText> SSS pick </StyledContentText>
          <StyledContentText $issub="true"> SSS 가 추천하는 Survey </StyledContentText>
        </div>
        <CardList contentType="ssspick"></CardList>
        <div style={{ width: "120px", height: "50px" }}>
          <Button use="gray" label="더보기"> </Button>
        </div>
      </StyledContent>
    </div>
  );
};

export default SSSPick;
