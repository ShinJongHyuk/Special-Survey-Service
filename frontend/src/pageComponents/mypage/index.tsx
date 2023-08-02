"use client";
import { useMypageStore } from "@/stores/mypage/useMypageStore";
import MypageComponents from "./mypageComponents";
import useUserStore from "@/stores/useUserStore";
import Image from "next/image";
import { StyledBanner, StyledText } from "./Mypage.styled";

const Mypage = () => {
  const selectBtn = useMypageStore((state) => state.selectBtn);
  const userInformation = useUserStore((state: any) => state.userInformation);

  const genderInfo: any = {
    WOMAN: {
      text: "여성",
      img: "/womanIcon.png",
    },
    MAN: {
      text: "남성",
      img: "/manIcon.png",
    },
  };

  const userGender = userInformation.gender;
  return (
    <>
      <div style={{ backgroundColor: "#FFF129", height: "230px" }}>
        <StyledBanner>
          <div style={{ width: "30%", textAlign: "right" }}>
            <Image
              src={genderInfo[userGender].img}
              alt="man"
              width={120}
              height={120}
              style={{ border: "1px solid black", borderRadius: "50%" }}
            ></Image>
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
      <MypageComponents selectBtn={selectBtn} />
    </>
  );
};

export default Mypage;
