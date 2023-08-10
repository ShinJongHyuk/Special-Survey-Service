import React from "react";
import Mobiletitle from "../../mobileComponents/mobiletitle";
import { StyledContainer, StyledBox, StyledName, StyledText, StyledLeft } from "./Mobilemain.styled";

const Mobilemain = () => {
  return (
    <>
      <Mobiletitle text="Let's Survey!" />
      <StyledContainer>
        <StyledBox>
          <StyledLeft>
            <img src="/mainpage/good.svg" style={{ width: "33px", height: "33px" }} />
            <StyledName>Time Attack</StyledName>
          </StyledLeft>
          <StyledText> 종료 임박 타임어택 설문이에요! </StyledText>
        </StyledBox>
        <StyledBox>
          <StyledLeft>
            <img src="/mainpage/time.png" style={{ width: "33px", height: "33px" }} />
            <StyledName>Speedy Attack</StyledName>
          </StyledLeft>
          <StyledText> 응답시간이 짧은 설문이에요! </StyledText>
        </StyledBox>
        <StyledBox>
          <StyledLeft>
            <img src="/mainpage/bulb.svg" style={{ width: "33px", height: "33px" }} />
            <StyledName>Instant Win</StyledName>
          </StyledLeft>
          <StyledText> 설문하고 바로 당첨자가 되어보세요! </StyledText>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default Mobilemain;
