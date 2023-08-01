import React from 'react'
import { StyledBanner, StyledBannerBox, StyledBannerText } from "./Banner.styled";
import Button from '@/components/button';
import { useRouter } from "next/navigation";

const Banner = () => {
    const router = useRouter();

    const goList = () => {
        router.push("/normalSurveyList");
    };

    return (
        <StyledBanner>
            <img src="/mainpage/main.png" style={{ position: "absolute", width: "100%", height: "550px", zIndex: "-1" }}></img>
            <StyledBannerBox>
                <div className="textbox">
                    <StyledBannerText $isko="false"> Let's Survey! </StyledBannerText>
                    <StyledBannerText $isko="true"> 우리는 설문조사를 하고 리워드를 받는 사이트에요!</StyledBannerText>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ width: "134px", height: "64px" }}>
                        <Button use="blackwhite" label="응답하기" onClick={goList}> </Button>
                    </div>
                    <div style={{ width: "134px", height: "64px" }}>
                        <Button use="whiteblack" label="제작하기"> </Button>
                    </div>
                </div>
            </StyledBannerBox>
        </StyledBanner>
    )
}

export default Banner