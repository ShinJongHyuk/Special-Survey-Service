"use client";
import React from "react";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledSurveyType, StyledTypeText, StyledCardHeader, StyledCompany, StyledRemainTime, StyledTitle, StyledImg, StyledProbability } from "./Card.styled";

const CardComponent = (props: CardType) => {

    return (
        <StyledCard {...props}>
            <StyledSurveyType {...props}>
                {props.surveyType === "타임어택" ?
                    <Image src="/whatshot.svg" priority={true} width={16} height={16} alt="whatshot" /> :
                    <Image src="/bolt.svg" priority={true} width={16} height={16} alt="abc" />
                }
                <StyledTypeText>{props.surveyType}</StyledTypeText>
            </StyledSurveyType>
            <StyledCardHeader>
                <StyledTitle {...props}>{props.title}</StyledTitle>
                <StyledCompany style={{ margin: "0px 10px" }} {...props}>{props.company}</StyledCompany>
            </StyledCardHeader>
            <StyledImg {...props}>
                <Image src="/chicken.jpg" style={{ borderRadius: "100px" }} priority={true} width={120} height={120} alt="gift" />
            </StyledImg>
            <StyledProbability {...props}>{props.probability}</StyledProbability>
            <StyledRemainTime {...props}>
                <div style={{ display: "flex" }}>
                    <Image src="/remaintime.svg" priority={true} width={22} height={22} alt="remaintime" />
                    남은 시간
                </div>
                {props.remainTime || "마감"}
            </StyledRemainTime>
        </StyledCard>
    );
};

export default CardComponent;
