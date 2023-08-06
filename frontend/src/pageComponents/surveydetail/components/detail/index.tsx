"use client";
import {
  StyledDetailContainer,
  StyledSurveyContent,
  StyledTag,
  SurveyTitle,
  SurveyPurpose,
  StyledText,
  SurveyCard,
  SurveyCardTitle,
  SurveyCardText,
  SurveyCardTime,
  SurveyCardContentHangeul,
  SurveyCardContainer,
  ButtonAndShare,
} from "./Detail.styled";

import Image from "next/image";
import Button from "@/components/button";
import moment from "moment";
import { DetailProps } from "./Detail.type";

const DetailComponent = (props: DetailProps) => {
  // const detail = props.detailProps;
  // console.log("detail: ", detail);

  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    // return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const endtimestr = formatDate(props.endtime);
  const starttimestr = formatDate(props.starttime);

  let typeName = "일 반";
  if (props.type === "INSTANT_WIN") {
    typeName = "즉시당첨";
  } else if (props.type === "NORMAL") {
    const now = moment();
    const endTime = moment(props.endtime, "YYYY-MM-DD-HH-mm");
    const diffHours = endTime.diff(now, "hours");
    if (diffHours < 24) {
      typeName = "타임어택";
    }
  }

  return (
    <StyledDetailContainer>
      <Image src="/surveyDetail/SurveyDetailTest.png" alt="nodetailImg" width={450} height={600}></Image>

      <StyledSurveyContent>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <StyledTag {...props}>
            {props.type === "NORMAL" ? (
              <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
            ) : (
              <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
            )}
            <div className="type-text">{typeName}</div>
          </StyledTag>

          <SurveyTitle>{props.title}</SurveyTitle>
          <SurveyPurpose>설문 상세설명(이후 추가) 많은 관심과 참여 부탁드립니다.</SurveyPurpose>
        </div>

        <div>
          <StyledText>
            {props.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/agency_purple.svg" alt="agency" width={40} height={17.8}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/agency.svg" alt="agency" width={40} height={17.8}></Image>
            )}
            <div className="bold">설문 작성자</div>
            <div>{props.writername}</div>
          </StyledText>

          <StyledText {...props}>
            {props.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/period_purple.svg" alt="period" width={40} height={17.8}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/period.svg" alt="period" width={40} height={17.8}></Image>
            )}
            <div className="bold">설문 기간 </div>
            <div>
              {starttimestr}부터
              <span className="end"> {endtimestr}</span>까지
            </div>
          </StyledText>

          <StyledText>
            {props.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/reward_purple.svg" alt="reward" width={40} height={40}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/reward.svg" alt="reward" width={40} height={40}></Image>
            )}
            <div className="bold">리워드</div>
            <div>{props.giveawaynames}</div>
          </StyledText>

          <StyledText>
            {props.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/res_purple.svg" alt="res" width={40} height={17.8}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/res.svg" alt="res" width={40} height={17.8}></Image>
            )}
            <div className="bold">응답수</div>
            <div>
              {props.headcount} / {props.closedheadcount}
            </div>
          </StyledText>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SurveyCard>
            <SurveyCardTitle>문항수</SurveyCardTitle>
            <SurveyCardText style={{ display: "flex" }}>
              <div className="number">{props.questioncount}</div>
              <div className="hangeul">개</div>
            </SurveyCardText>
          </SurveyCard>

          <SurveyCard>
            <SurveyCardTitle>예상 소요시간</SurveyCardTitle>
            <SurveyCardText style={{ display: "flex" }}>
              <div className="number">{props.requiredtime}</div>
              <div className="hangeul">분</div>
            </SurveyCardText>
          </SurveyCard>

          <SurveyCard>
            <SurveyCardTitle>남은 시간</SurveyCardTitle>
            <SurveyCardTime>{}</SurveyCardTime>
          </SurveyCard>
        </div>

        <ButtonAndShare>
          <Image src="/surveyDetail/shareIcon.png" alt="share" width={48} height={48}></Image>
          {props.type === "타임어택" ? (
            <Button use="detailTimeAttack" label="지금 응답하기"></Button>
          ) : (
            <Button use="longYellow" label="지금 응답하기"></Button>
          )}
        </ButtonAndShare>
      </StyledSurveyContent>
    </StyledDetailContainer>
  );
};

export default DetailComponent;
