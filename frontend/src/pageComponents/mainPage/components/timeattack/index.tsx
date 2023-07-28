import React from "react";
import { StyledContent, StyledContentText, StyledCardList } from "./Timeattack.styled";
import Image from "next/image";
import Card2 from "@/components/card2";
import useTimeattackHook from "@/Hooks/useTimeattackHook";
import Button from "@/components/button";

const Timeattack = () => {
  const { cards, transformValue, handlePrevClick, handleNextClick } = useTimeattackHook();

  return (
    <div style={{ position: "relative", width: "100%", height: "680px" }}>
      <img src="/Content2.png" style={{ width: "100%", position: "absolute", height: "680px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="header">
          <button className="buttonbg" onClick={handlePrevClick}>
            <div className="buttontext">&lt;</div>
          </button>
          <div className="title">
            <Image src="/good.svg" priority={true} width={50} height={51} alt="casino"></Image>
            <StyledContentText> 타임 어택 </StyledContentText>
            <StyledContentText $issub="true"> 종료 임박 타임어택 설문이에요! </StyledContentText>
          </div>
          <button className="buttonbg" onClick={handleNextClick}>
            <div className="buttontext">&gt;</div>
          </button>
        </div>
        <StyledCardList
          style={{
            transform: `translateX(${transformValue}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {cards.map((survey, index) => (
            <div key={index}>
              <div style={{ width: "440px" }}>
                <Card2
                  title={survey.title}
                  nickname={survey.nickname}
                  giveaways={survey.giveaways}
                  probability={survey.probability}
                  remaintime={survey.remainTime || ""}
                />
              </div>
            </div>
          ))}
        </StyledCardList>
        <div style={{ width: "120px", height: "50px" }}>
          <Button use="gray" label="더보기"></Button>
        </div>
      </StyledContent>
    </div>
  );
};

export default Timeattack;
