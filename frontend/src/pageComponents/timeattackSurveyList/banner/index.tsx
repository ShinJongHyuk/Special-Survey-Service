import React from 'react'
import { StyledBanner, StyledBannerText } from "./Banner.styled";

const Banner = () => {
    return (
        <StyledBanner>
            <img src="/listpage/list2banner.png" style={{ position: "absolute", width: "100%", height: "330px", zIndex: "-1" }}></img>
            <StyledBannerText>
                <div>
                    <div className='eng'> Time Attack </div>
                    <div className='title'> 타임어택 </div>
                </div>
                <div className='content'> 설문에 참여하고 상품을 받아가세요 ! </div>
            </StyledBannerText>
        </StyledBanner>
    )
}

export default Banner