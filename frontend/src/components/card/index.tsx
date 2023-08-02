"use client";
import React from "react";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledTag, StyledCardHeader, StyledRemainTime, StyledImg, StyledProbability } from "./Card.styled";
import moment from "moment";

const CardComponent = (props: CardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  let typeName = "일반";

  if (props.type === "INSTANT_WIN") {
    typeName = "즉시당첨";
  } else if (props.type === "NORMAL") {
    const now = moment();
    const endTime = moment(props.endtime, "YYYY-MM-DD-HH-mm");
    const diffHours = endTime.diff(now, "hours");

    if (diffHours < 24) {
      typeName = "타임어택";
    }
  }

  const newProps = { ...props, typename: typeName };
  return (
    <StyledCard {...newProps}>
      <StyledTag {...newProps}>
        {props.type === "NORMAL" ? (
          <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
        ) : (
          <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
        )}
        <div className="type-text">{typeName}</div>
      </StyledTag>

      <StyledCardHeader {...newProps}>
        <div className="title">{props.title}</div>
        <div className="writer" style={{ margin: "0px 10px" }} {...props}>
          {props.nickname}
        </div>
      </StyledCardHeader>

      <StyledImg {...newProps}>
        <Image src={imgsrc} style={{ borderRadius: "100px" }} priority={true} width={80} height={80} alt="gift" />
      </StyledImg>

      {props.contentype === "ssspick" ? (
        <StyledProbability {...newProps}>{props.responsedtime}</StyledProbability>
      ) : (
        <StyledProbability {...newProps}>{props.probability}</StyledProbability>
      )}
      <StyledRemainTime {...newProps}>
        <div className="time-text">
          {props.type === "NORMAL" ? (
            typeName === "일반" ? (
              <Image src="/card/purpleblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
            ) : (
              <Image src="/card/purpleclock.svg" priority={true} width={22} height={22} alt="remaintime" />
            )
          ) : parseInt(props.probability, 10) <= 40 ? (
            <Image src="/card/yellowblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
          ) : (
            <Image src="/card/yellowclock.svg" priority={true} width={22} height={22} alt="remaintime" />
          )}

          <div className="text">남은 시간</div>
        </div>
        {props.remaintime || "00:00:00"}
      </StyledRemainTime>
    </StyledCard>
  );
};

export default CardComponent;
