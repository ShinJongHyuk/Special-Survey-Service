"use client";
import React from "react";
import Image from "next/image";
import { MycardType } from "./Mycard.type";
import { StyledCard, StyledTag, StyledCardHeader, StyledBottomText, StyledImg } from "./Mycard.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const CardComponent = (props: MycardType) => {
  const images: { [key: string]: string } = {
    chicken: "/card/chicken.png",
    coffee: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  const typeName = props.type === "INSTANT_WIN" ? "즉시당첨" : "일  반";
  const selectBtn = useMypageStore((state) => state.selectBtn);
  const settingByBtn: any = {
    2: {
      imagePath: "/card/percent.png",
      text: "확률",
      value: props.probability
    },
    3: {
      imagePath: "/card/smile.svg",
      text: "응답자수",
      value: props.headcount
    }
  };
  const { imagePath, text, value } = settingByBtn[selectBtn] || {};

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


      <StyledBottomText {...newProps}>
        <div className="time-text">
          <Image src="/card/yellowblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
          <div className="text">남은 시간</div>
        </div>
        {props.remaintime || "00:00:00"}
      </StyledBottomText>

      <StyledBottomText {...newProps}>
        <div className="time-text">
          <Image src={imagePath} priority={true} width={22} height={22} alt="remaintime" />
          <div className="text">{text}</div>
        </div>
        {value}
      </StyledBottomText>

    </StyledCard >
  );
};

export default CardComponent;
