import React from "react";
import { StyledContent, StyledContentText, StyledCardList } from "./Timeattack.styled";
import Image from "next/image";
import useTimeattackHook from "@/Hooks/mainpage/useTimeattackHook";
import useMovelistHook from "@/Hooks/mainpage/useMovelistHook";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import CardList from "./timeAttackCardList";
import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";

const Timeattack = () => {
  const { cards } = useTimeattackHook();
  const { transformValue, handlePrevClick, handleNextClick } = useMovelistHook(cards);

  const router = useRouter();
  const setselectbtn = useSurveylistStore((state) => state.setselectbtn);
  const goList = () => {
    setselectbtn("1");
    router.push("/surveylist");
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "680px", minWidth: "1000px" }}>
      <img src="/mainpage/Content2.png" style={{ width: "100%", position: "absolute", height: "680px", zIndex: "-1" }}></img>
      <StyledContent>
        <div className="header">
          <button className="buttonbg" onClick={handlePrevClick}>
            <div className="buttontext">&lt;</div>
          </button>
          <div className="title">
            <Image src="/mainpage/good.svg" priority={true} width={50} height={51} alt="casino"></Image>
            <StyledContentText> Time Attack </StyledContentText>
            <StyledContentText $issub="true"> 종료 임박 타임어택 설문이에요! </StyledContentText>
          </div>
          <button className="buttonbg" onClick={handleNextClick}>
            <div className="buttontext">&gt;</div>
          </button>
        </div>

        <CardList cards={cards} transformValue={transformValue} />

        <div style={{ width: "120px", height: "50px" }}>
          <Button use="gray" label="더보기" onClick={goList}></Button>
        </div>
      </StyledContent>
    </div>
  );
};

export default Timeattack;
