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
} from "./Detail.styled";

import Image from "next/image";
import Button from "@/components/button";
import moment from "moment";
import useTimerHook from "@/Hooks/card/useTimerHook";
import { useEffect, useState } from "react";
import { convertToDetailProps } from "../../SurveyDetailType.type";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";

const DetailComponent = (props: any) => {
  const router = useRouter();

  const { surveyDetail } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [toModalData, setToModalData] = useState({ surveyid: "" });

  const detailProps = convertToDetailProps(surveyDetail);

  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    // return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const endtimestr = formatDate(detailProps.endtime || "");
  const starttimestr = formatDate(detailProps.starttime || "");

  const now = moment();
  const endTime = moment(detailProps.endtime, "YYYY-MM-DD-HH-mm");
  const isExpired = now.isAfter(endTime);
  let typeName = "일 반";
  if (detailProps.type === "INSTANT_WIN") {
    typeName = "즉시당첨";
  } else if (detailProps.type === "NORMAL") {
    const diffHours = endTime.diff(now, "hours");
    if (diffHours < 24) {
      typeName = "타임어택";
    }
  }

  const [remaintime, setRemainTime] = useState("00분, 00초");

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainTime(useTimerHook(detailProps.endtime));
    }, 1000);

    return () => clearInterval(timer);
  }, [detailProps.endtime]);

  const [unit1, unit2] = remaintime ? remaintime.split(", ") : ["00분", "00초"];
  const [value1, label1] = unit1.split(":");
  const [value2, label2] = unit2.split(":");

  return (
    <StyledDetailContainer>
      <Image src="/surveyDetail/SurveyDetailTest.png" alt="nodetailImg" width={450} height={600}></Image>

      <StyledSurveyContent>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <StyledTag {...detailProps}>
            {detailProps.type === "NORMAL" ? (
              <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
            ) : (
              <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
            )}
            <div className="type-text">{typeName}</div>
          </StyledTag>

          <SurveyTitle>{detailProps.title}</SurveyTitle>
          <SurveyPurpose>{detailProps.content || "많은 관심과 참여 부탁드립니다."}</SurveyPurpose>
        </div>

        <div>
          <StyledText>
            {detailProps.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/agency_purple.svg" alt="agency" width={40} height={17.8}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/agency.svg" alt="agency" width={40} height={17.8}></Image>
            )}
            <div className="bold">설문 작성자</div>
            <div>{detailProps.writername}</div>
          </StyledText>

          <StyledText {...detailProps}>
            {detailProps.type === "NORMAL" ? (
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
            {detailProps.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/reward_purple.svg" alt="reward" width={40} height={40}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/reward.svg" alt="reward" width={40} height={40}></Image>
            )}
            <div className="bold">리워드</div>
            <div>{detailProps.giveawaynames}</div>
          </StyledText>

          <StyledText>
            {detailProps.type === "NORMAL" ? (
              <Image src="/surveyDetail/purple/res_purple.svg" alt="res" width={40} height={17.8}></Image>
            ) : (
              <Image src="/surveyDetail/yellow/res.svg" alt="res" width={40} height={17.8}></Image>
            )}
            <div className="bold">응답수</div>
            <div>
              {detailProps.headcount} / {detailProps.closedheadcount}
            </div>
          </StyledText>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SurveyCard>
            <SurveyCardTitle>문항수</SurveyCardTitle>
            <SurveyCardText style={{ display: "flex" }}>
              <div className="number">{detailProps.questioncount}</div>
              <div className="hangeul">개</div>
            </SurveyCardText>
          </SurveyCard>

          <SurveyCard>
            <SurveyCardTitle>예상 소요시간</SurveyCardTitle>
            <SurveyCardText style={{ display: "flex" }}>
              <div className="number">{detailProps.requiredtime}</div>
              <div className="hangeul">분</div>
            </SurveyCardText>
          </SurveyCard>

          <SurveyCard style={{ width: "160px" }}>
            <SurveyCardTitle>남은 시간</SurveyCardTitle>
            <SurveyCardTime {...detailProps}>
              <div>
                <span>{value1}</span>
                <span>{label1}</span>
              </div>
              <div style={{ paddingLeft: "8px" }}>
                <span>{value2}</span>
                <span>{label2}</span>
              </div>
            </SurveyCardTime>
          </SurveyCard>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <Image src="/surveyDetail/shareIcon.png" alt="share" width={48} height={48}></Image>
          {!isExpired ? (
            detailProps.type === "NORMAL" ? (
              <Button
                use="purple"
                label="지금 응답하기"
                onClick={() => {
                  setToModalData({ surveyid: detailProps.surveyid });
                  setIsOpen(true);
                }}
              ></Button>
            ) : (
              <Button
                use="longYellow"
                label="지금 응답하기"
                onClick={() => {
                  setToModalData({ surveyid: detailProps.surveyid });
                  setIsOpen(true);
                }}
              ></Button>
            )
          ) : (
            <Button use="bgGray" label="마감된 설문입니다."></Button>
          )}
        </div>
      </StyledSurveyContent>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        bigtext="설문을 시작하시겠습까?"
        cancel="닫기"
        confirm="응답하기"
        contenttype={detailProps.type}
        surveyid={toModalData.surveyid}
      />
    </StyledDetailContainer>
  );
};

export default DetailComponent;
