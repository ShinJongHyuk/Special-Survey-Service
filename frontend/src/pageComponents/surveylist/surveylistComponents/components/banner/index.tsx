import React from "react";
import { StyledBanner, StyledBannerText } from "./Banner.styled";

const Banner = (props: any) => {
  const path = props.selectbtn;

  let eng;
  let title;
  let content;
  if (path === "1") {
    eng = "Normal";
    title = "일  반";
    content = "설문에 참여하고 상품을 받아가세요 ! ";
  } else {
    eng = "Instant Lottery";
    title = "즉시 당첨";
    content = "설문에 참여하고 즉시 당첨 여부를 확인해보세요 !";
  }

  return (
    <StyledBanner>
      {path === "1" ? (
        <img src="/listpage/list2banner.png" style={{ position: "absolute", width: "100%", height: "330px", zIndex: "-1" }}></img>
      ) : (
        <img src="/listpage/list1banner.png" style={{ position: "absolute", width: "100%", height: "330px", zIndex: "-1" }}></img>
      )}
      <StyledBannerText>
        <div>
          <div className="eng"> {eng} </div>
          <div className="title">{title}</div>
        </div>
        <div className="content">{content}</div>
      </StyledBannerText>
    </StyledBanner>
  );
};

export default Banner;
