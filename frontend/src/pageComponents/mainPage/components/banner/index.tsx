import React from 'react'
import { StyledBanner, StyledBannerBox, StyledBannerText } from "./Banner.styled";

const Banner = () => {
    return (
        <StyledBanner>
            <img src="/main.png" style={{ position: "absolute", width: "100%", height: "500px", zIndex: "-1" }}></img>
            <StyledBannerBox>
                <div className="textbox">
                    <StyledBannerText $isko="false"> Let's Survey! </StyledBannerText>
                    <StyledBannerText $isko="true"> 우리는 설문조사를 하고 리워드를 받는 사이트에요!</StyledBannerText>
                </div>
                <div>
                    <button> 응답하기 </button>
                    <button> 제작하기 </button>
                </div>
            </StyledBannerBox>
        </StyledBanner>
    )
}

export default Banner