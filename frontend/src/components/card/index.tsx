"use client";
import React from "react";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledTag, StyledCardHeader, StyledRemainTime, StyledImg, StyledProbability } from "./Card.styled";

const CardComponent = (props: CardType) => {
  const images: { [key: string]: string } = {
    chicken: "/card/chicken.png",
    coffee: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  return (
    <StyledCard {...props}>
      <StyledTag {...props}>
        {props.type === "타임어택" ? (
          <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
        ) : (
          <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
        )}
        <div className="type-text">{props.type}</div>
      </StyledTag>

      <StyledCardHeader {...props}>
        <div className="title">{props.title}</div>
        <div className="writer" style={{ margin: "0px 10px" }} {...props}>
          {props.nickname}
        </div>
      </StyledCardHeader>

      <StyledImg {...props}>
        <Image src={imgsrc} style={{ borderRadius: "100px" }} priority={true} width={80} height={80} alt="gift" />
      </StyledImg>

      <StyledProbability {...props}>{props.probability}</StyledProbability>
      <StyledRemainTime {...props}>
        <div className="time-text">
          {
            props.type === "타임어택" ? (
              parseInt(props.probability, 10) <= 40 ? (
                <Image src="/card/card/purpleblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
              ) : (
                <Image src="/card/purpleclock.svg" priority={true} width={22} height={22} alt="remaintime" />
              )
            ) : (
              parseInt(props.probability, 10) <= 40 ? (
                <Image src="/card/yellowblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
              ) : (
                <Image src="/card/yellowclock.svg" priority={true} width={22} height={22} alt="remaintime" />
              )
            )
          }

          <div className="text">남은 시간</div>
        </div>
        {props.remaintime || "00:00:00"}
      </StyledRemainTime>
    </StyledCard>
  );
};

export default CardComponent;
