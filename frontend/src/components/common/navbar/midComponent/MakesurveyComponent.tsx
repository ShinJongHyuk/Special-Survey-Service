"use client";
import React from "react";
import { StyledText, StyledMidComp, StyledTitleInput } from "../Navbar.styled";
import Image from "next/image";
import Button from "@/components/button";
import useMakeSurveyApiStore from "@/stores/makesurvey/useMakeSurveyApiStore";
const MakesruveyComponent = (props: any) => {
    const pathname = props.pathname;
    const {titleText,setTitleText} = useMakeSurveyApiStore();
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleText(event.target.value);
      };

    return (
        <StyledMidComp pathname={pathname}>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }} >
                <StyledTitleInput onChange={handleTitleChange} value={titleText}></StyledTitleInput>
                <StyledText>
                    <Image src='/survey/check.png' width={12} height={12} style={{ marginRight: "10px" }} alt="체크" />
                    모든 변경사항이 반영되었습니다.
                </StyledText>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="gray" label="임시저장" />
                </div>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="longYellow" label="생성하기" />
                </div>
            </div>
        </StyledMidComp>
    );
};

export default MakesruveyComponent;