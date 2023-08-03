"use client";
import {
  SurveyDetailContainer,
  SurveyContent,
  SurveyTitle,
  SurveyProfile,
  SurveyProfileName,
  SurveyPurpose,
  SurveyInformation,
  SurveyInformationTitle,
  SurveyInformationContent,
  SurveyInformationContentHighLight,
  SurveyFooter,
  SurveyCard,
  SurveyCardTitle,
  SurveyCardContent,
  SurveyCardTime,
  SurveyCardContentHangeul,
  SurveyCardContainer,
  ButtonAndShare,
} from "./Detail.styled";
import Image from "next/image";
import Button from "@/components/button";
import { StyledTag } from "@/components/card/Card.styled";
const DetailComponent = (props: any) => {
  return (
    <SurveyDetailContainer>
      <Image src="/surveyDetail/SurveyDetailTest.png" alt="s" width={450} height={600}></Image>

      <SurveyContent>
        <div>
          <div style={{ width: "65px" }}>
            <StyledTag {...props}>
              {props.type === "타임어택" ? (
                <Image src="/card/whatshot.svg" priority={true} width={11} height={17} alt="whatshot" />
              ) : (
                <Image src="/card/bolt.svg" priority={true} width={11} height={17} alt="abc" />
              )}
              <div className="type-text">{props.type}</div>
            </StyledTag>
          </div>

          <SurveyTitle>
            {props.title}
            프로그래밍 언어 선호도
          </SurveyTitle>

          <SurveyProfile>
            <Image src="/womanprofle.svg" width={32} height={32} alt="profile"></Image>
            <SurveyProfileName>내가그린기린그림 3일전</SurveyProfileName>
          </SurveyProfile>

          <SurveyPurpose>한국에서 어떤 프로그래밍 언어를 선호하는지 조사하고 싶습니다. 많은 관심과 참여 부탁드립니다.</SurveyPurpose>
        </div>

        <div style={{ width: "450px" }}>
          <SurveyInformation>
            {props.type === "타임어택" ? (
              <Image src="surveyDetail/agency_purple.svg" alt="agency" width={40} height={17.8}></Image>
            ) : (
              <Image src="surveyDetail/agency.svg" alt="agency" width={40} height={17.8}></Image>
            )}
            <SurveyInformationTitle>설문 기관</SurveyInformationTitle>
            <SurveyInformationContent>(주) 얼라이언스</SurveyInformationContent>
          </SurveyInformation>

          <SurveyInformation>
            {props.type === "타임어택" ? (
              <Image src="surveyDetail/period_purple.svg" alt="period" width={40} height={17.8}></Image>
            ) : (
              <Image src="surveyDetail/period.svg" alt="period" width={40} height={17.8}></Image>
            )}
            <SurveyInformationTitle>설문 기간</SurveyInformationTitle>
            <SurveyInformationContent>2023년 7월 19일부터 2023년 7월 30일까지</SurveyInformationContent>
          </SurveyInformation>

          <SurveyInformation>
            {props.type === "타임어택" ? (
              <Image src="surveyDetail/reward_purple.svg" alt="reward" width={40} height={17.8}></Image>
            ) : (
              <Image src="surveyDetail/reward.svg" alt="reward" width={40} height={17.8}></Image>
            )}
            <SurveyInformationTitle>리워드</SurveyInformationTitle>
            <SurveyInformationContent>스타벅스 10,000원권</SurveyInformationContent>
          </SurveyInformation>

          <SurveyInformation>
            {props.type === "타임어택" ? (
              <Image src="surveyDetail/res_purple.svg" alt="res" width={40} height={17.8}></Image>
            ) : (
              <Image src="surveyDetail/res.svg" alt="res" width={40} height={17.8}></Image>
            )}
            <SurveyInformationTitle>응답수</SurveyInformationTitle>
            <SurveyInformationContent>209/300</SurveyInformationContent>
          </SurveyInformation>
        </div>

        <SurveyFooter>
          <SurveyCardContainer>
            <SurveyCard>
              <SurveyCardTitle>문항수</SurveyCardTitle>
              <div style={{ display: "flex" }}>
                <SurveyCardContent>10</SurveyCardContent>
                <SurveyCardContentHangeul>개</SurveyCardContentHangeul>
              </div>
            </SurveyCard>

            <SurveyCard>
              <SurveyCardTitle>예상 소요시간</SurveyCardTitle>
              <div style={{ display: "flex" }}>
                <SurveyCardContent>5</SurveyCardContent>
                <SurveyCardContentHangeul>분</SurveyCardContentHangeul>
              </div>
            </SurveyCard>

            <SurveyCard>
              <SurveyCardTitle>남은 시간</SurveyCardTitle>
              <SurveyCardTime>00:59:10</SurveyCardTime>
            </SurveyCard>
          </SurveyCardContainer>

          <ButtonAndShare>
            <Image src="/surveyDetail/shareIcon.png" alt="share" width={48} height={48}></Image>
            {props.type === "타임어택" ? (
              <Button use="detailTimeAttack" label="지금 응답하기"></Button>
            ) : (
              <Button use="longYellow" label="지금 응답하기"></Button>
            )}
          </ButtonAndShare>
        </SurveyFooter>
      </SurveyContent>
    </SurveyDetailContainer>
  );
};

export default DetailComponent;
