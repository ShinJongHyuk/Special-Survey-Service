"use client";
import { convertToResultProps } from "../../SurveyDetailType.type";
import { SurveyResultComent, StyledImg, StyledMsg, Percentage, PercentageCard } from "./Result.styled";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ResultComponent = (props: any) => {
  const { surveyDetail } = props;

  console.log(surveyDetail);
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };

  const resultProps = convertToResultProps(surveyDetail);

  const imgsrc = images[resultProps.giveawaytype];

  const transformToDesiredArray = (value: any) => {
    const numericValue = (typeof value === 'number') ? value : parseFloat(value);

    let adjustedValue = Math.ceil(numericValue * 10) / 10;
    let strValue = adjustedValue.toFixed(1);

    const dotIndex = strValue.indexOf(".");

    if (dotIndex !== -1 && strValue[dotIndex + 1] === "0") {
      strValue = strValue.slice(0, dotIndex);
    }

    return strValue.split("");
  };

  const [percentArray, setPercentArray] = useState(["0"]);
  useEffect(() => {
    setPercentArray(transformToDesiredArray(resultProps.percent));
  }, [resultProps.percent]);


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
        {resultProps.type === "NORMAL" ? <StyledMsg src="/surveyDetail/purple/message.svg" /> : <StyledMsg src="/surveyDetail/yellow/message.svg" />}
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
