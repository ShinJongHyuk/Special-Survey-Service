"use client";
import Mobiletitle from "../../mobileComponents/mobiletitle";
import { StyledContainer, StyledBox, StyledName, StyledText, StyledLeft } from "./Mobilemain.styled";
import { useRouter } from "next/navigation";

const Mobilemain = () => {
  const router = useRouter();

  return (
    <>
      <Mobiletitle text="Let's Survey!" />
      <StyledContainer>
        <StyledBox
          onClick={() => {
            router.push("/speedyattacklist");
          }}
        >
          <StyledLeft>
            <img src="/mainpage/time.png" style={{ width: "35px", height: "35px" }} />
            <StyledName>Speedy Attack</StyledName>
          </StyledLeft>
          <StyledText> 응답시간이 짧은 설문 순이에요! </StyledText>
        </StyledBox>
        <StyledBox
          onClick={() => {
            router.push("/instantwinlist");
          }}
        >
          <StyledLeft>
            <img src="/mainpage/bulb.svg" style={{ width: "35px", height: "35px" }} />
            <StyledName>Instant Win</StyledName>
          </StyledLeft>
          <StyledText>설문하고 바로 당첨자가 되어보세요!</StyledText>
        </StyledBox>
        <StyledBox
          onClick={() => {
            router.push("/normallist");
          }}
        >
          <StyledLeft>
            <img src="/mainpage/good.svg" style={{ width: "35px", height: "35px" }} />
            <StyledName>Time Attack</StyledName>
          </StyledLeft>
          <StyledText> 마감시간이 얼마 남지 않은 설문 순이에요! </StyledText>
        </StyledBox>
      </StyledContainer>
      {/* <img src="/mobile/mainwoman.png" style={{ width: "170px", height: "170px" }} /> */}
    </>
  );
};

export default Mobilemain;
