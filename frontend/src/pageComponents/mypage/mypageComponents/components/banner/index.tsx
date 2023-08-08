"use client";
import { StyledBanner, StyledText } from "./Banner.styled";

const Banner = (props: any) => {
  // const userInformation = useUserStore((state: any) => state.userInformation);

  const genderInfo: any = {
    WOMAN: {
      text: "여성",
      profileimg: "/womanIcon.png",
    },
    MAN: {
      text: "남성",
      profileimg: "/manIcon.png",
    },
  };

  const userInformation = props.userInfo;
  const userGender = userInformation.gender;

  return (
    <div style={{ backgroundColor: "#FFF129", height: "230px" }}>
      <StyledBanner>
        <div style={{ width: "30%", textAlign: "right" }}>
          <img src={genderInfo[userGender].profileimg} style={{ border: "1px solid black", borderRadius: "50%", width: "120px", height: "120px" }} />
        </div>
        <StyledText style={{ width: "30%" }}>
          <div className="email">{userInformation.email}</div>
          <div className="others">
            {userInformation.name}/{userInformation.birthday}/{genderInfo[userGender].text}
          </div>
        </StyledText>
        <StyledText style={{ width: "45%" }}>
          <div className="survey"> 응답한 설문 : {userInformation.responseSurveyCount}</div>
          <div className="survey"> 만든 설문 : {userInformation.createSurveyCount}</div>
          <div className="survey"> 당첨된 상품 : {userInformation.winningGiveawayCount}</div>
        </StyledText>
      </StyledBanner>
    </div>
  );
};

export default Banner;
