import React from "react";
import { StyledContent, StyledContentText } from "./Timeattack.styled";
import CardList from "../cardlist";
import Image from "next/image";

const Timeattack = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "700px" }}>
            <img src="/Content2.png" style={{ width: "100%", position: "absolute", height: "700px", zIndex: "-1" }}></img>
            <StyledContent>
                <div className="title">
                    <Image src="/good.svg" priority={true} width={50} height={51} alt="casino"></Image>
                    <StyledContentText> 타임 어택 </StyledContentText>
                    <StyledContentText $issub="true"> 종료 임박 타임어택 설문이에요! </StyledContentText>
                </div>
                <CardList contentType="timeattack"></CardList>
            </StyledContent>
        </div>
    );
};

export default Timeattack;
