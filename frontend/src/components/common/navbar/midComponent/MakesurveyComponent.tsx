"use client";
import React from "react";
import { StyledText, StyledMidComp, StyledTitleInput } from "../Navbar.styled";
import Image from "next/image";
import Button from "@/components/button";

const MakesruveyComponent = (props: any) => {
    const pathname = props.pathname;
    return (
        <StyledMidComp pathname={pathname}>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }} >
                <StyledTitleInput></StyledTitleInput>
                <StyledText>
                    <Image src='/survey/check.png' width={12} height={12} style={{ marginRight: "10px" }} alt="체크" />
                    모든 변경사항이 자동저장됐어요.
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