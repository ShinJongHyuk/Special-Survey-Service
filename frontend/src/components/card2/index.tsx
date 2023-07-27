"use client";
import React from "react";
import Image from "next/image";
import { CardType } from "./Card2.type";
import { StyledCard, StyledCardLeft, StyledCardHeader, StyledRemainTime, StyledImg, StyledProbability } from "./Card2.styled";

const Card2Component = (props: CardType) => {
  const images: { [key: string]: string } = {
    chicken: "/chicken.png",
    coffee: "/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  return (
    <StyledCard {...props}>

      <StyledCardLeft>

        <StyledCardHeader {...props}>
          <div className="title">{props.title}</div>
          <div className="writer"{...props}>
            {props.nickname}
          </div>
        </StyledCardHeader>

        <StyledRemainTime {...props}>
          <Image src="/yellowblackclock.svg" priority={true} width={30} height={30} alt="remaintime" />
          <div className="time-text">{props.remaintime || "00:00:00"}</div>
          <div className="text">남음</div>
        </StyledRemainTime>

        <StyledProbability {...props}>
          <Image src="/percent.svg" priority={true} width={30} height={30} alt="remaintime" />
          <div className="text" {...props}>{props.probability}</div>
        </StyledProbability>
      </StyledCardLeft>

      <StyledImg {...props}>
        <Image src={imgsrc} style={{ borderRadius: "100px" }} priority={true} width={125} height={125} alt="gift" />
      </StyledImg>

    </StyledCard>
  );
};

export default Card2Component;
