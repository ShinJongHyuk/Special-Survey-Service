"use client";
import { SurveyResultComent, StyledImg, StyledMsg, Percentage, PercentageCard } from "./Result.styled";
import Image from "next/image";

const ResultComponent = (props: any) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];
  const percentArray = props.percent.toString().split("");
  console.log(percentArray);

  return (
    <>
      <SurveyResultComent>
        {props.type === "NORMAL" ? (
          <div>
            총 <span className="purple">{props.headcount}</span>명이 응답했어요!
          </div>
        ) : (
          <div>
            총 <span className="orange">{props.headcount}</span>명이 리워드에 당첨됐어요!
          </div>
        )}
      </SurveyResultComent>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <StyledImg src={imgsrc} {...props} />
        {props.type === "NORMAL" ? <StyledMsg src="/surveydetail/purple/message.svg" /> : <StyledMsg src="/surveydetail/yellow/message.svg" />}
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
        {percentArray.map((num: any, index: any) => (
          <PercentageCard key={index} {...props}>
            {num}
          </PercentageCard>
        ))}
        <Percentage {...props}>%</Percentage>
      </div>

      {props.type === "NORMAL" ? (
        <Image src="/surveyDetail/purple/woman.png" alt="woman" width={350} height={307}></Image>
      ) : (
        <Image src="/surveyDetail/yellow/woman.png" alt="woman" width={350} height={307}></Image>
      )}
    </>
  );
};

export default ResultComponent;
