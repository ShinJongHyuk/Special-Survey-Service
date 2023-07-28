import React from 'react'
import { StyledBanner, StyledBannerText } from "./Banner.styled";

const Banner = () => {
    return (
        <StyledBanner>
            <img src="/list1banner.png" style={{ position: "absolute", width: "100%", height: "330px", zIndex: "-1" }}></img>
            <StyledBannerText>
                <div>
                    <div className='eng'> Instant Lottery </div>
                    <div className='title'> 즉시 당첨</div>
                </div>
                <div className='content'> 설문에 참여하고 즉시 당첨 여부를 확인해보세요 ! </div>
            </StyledBannerText>
        </StyledBanner>
    )
}

export default Banner