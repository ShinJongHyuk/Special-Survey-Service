import React from "react";
import { StyledContent, StyledContentText } from "./Instantwin.styled";
import CardList from "../cardlist";
import Image from "next/image";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const Instantwin = () => {
  const router = useRouter();

  const goList = () => {
    router.push("/instantWinSurveyList");
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "780px" }}>
      <img src="/mainpage/Content3.png" style={{ width: "100%", position: "absolute", height: "780px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="title">
          <Image src="/mainpage/bulb.svg" priority={true} width={50} height={51} alt="bulb"></Image>
          <StyledContentText> 즉시 당첨 </StyledContentText>
          <StyledContentText $issub="true"> 설문하고 바로 당첨자가 되어보세요! </StyledContentText>
        </div>
        <CardList contentType="instantwin"></CardList>
        <div style={{ width: "120px", height: "50px" }}>
          <Button use="gray" label="더보기" onClick={goList}></Button>
        </div>
      </StyledContent>
    </div>
  );
};

export default Instantwin;
