"use client";
import useSSEHook from "@/Hooks/sse/useSSEHook";
import { convertToResultProps } from "../../SurveyDetailType.type";
import { SurveyResultComent, StyledImg, StyledMsg, Percentage, PercentageCard } from "./Result.styled";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ResultComponent = (props: any) => {
  const { surveyDetail } = props;

  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };

  const resultProps = convertToResultProps(surveyDetail);

  const imgsrc = images[resultProps.giveawaytype];

  // const percentSSE = (resultProps.type === "NORMAL") ? useSSEHook(resultProps.id, "확률변동") : null;
  const percentSSE = useSSEHook(resultProps.id, "확률변동");
  const transformToDesiredArray = (value: any) => {
    let strValue = value.toString();
    const dotIndex = strValue.indexOf(".");
    if (dotIndex !== -1) {
      strValue = strValue.slice(0, dotIndex + 2);
    }
    return strValue.split("");
  };

  const [percentArray, setPercentArray] = useState(["0"]);
  useEffect(() => {
    setPercentArray(transformToDesiredArray(resultProps.percent));
  }, [resultProps.percent]);

  useEffect(() => {
    if (percentSSE) {
      setPercentArray(transformToDesiredArray(percentSSE));
    }
  }, [percentSSE]);


  return (
    <>
      <SurveyResultComent>
        {resultProps.type === "NORMAL" ? (
          <div>
            총 <span className="purple">{resultProps.headcount}</span>명이 응답했어요!
          </div>
        ) : (
          <div>
            총 <span className="orange">{resultProps.winheadcount}</span>명이 리워드에 당첨됐어요!
          </div>
        )}
      </SurveyResultComent>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <StyledImg src={imgsrc} {...resultProps} />
        {resultProps.type === "NORMAL" ? <StyledMsg src="/surveydetail/purple/message.svg" /> : <StyledMsg src="/surveydetail/yellow/message.svg" />}
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
        {percentArray.map((num: any, index: any) => (
          <PercentageCard key={index} {...resultProps}>
            {num}
          </PercentageCard>
        ))}
        <Percentage {...resultProps}>%</Percentage>
      </div>

      {resultProps.type === "NORMAL" ? (
        <Image src="/surveyDetail/purple/woman.png" alt="woman" width={350} height={307}></Image>
      ) : (
        <Image src="/surveyDetail/yellow/woman.png" alt="woman" width={350} height={307}></Image>
      )}
    </>
  );
};

export default ResultComponent;
