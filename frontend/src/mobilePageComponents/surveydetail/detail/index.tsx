"use client";
import {
  StyledSurveyContent,
  StyledTag,
  SurveyTitle,
  SurveyPurpose,
  StyledText,
  SurveyCard,
  SurveyCardTitle,
  SurveyCardText,
  SurveyCardTime,
  StyledButton,
  StyledShare,
} from "./Detail.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import Button from "@/components/button";
import moment from "moment";
import useTimerHook from "@/Hooks/card/useTimerHook";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import { convertToDetailProps } from "@/pageComponents/surveydetail/SurveyDetailType.type";

const DetailComponent = (props: any) => {
  const [hasAccessToken, setHasAccessToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setHasAccessToken(!!token);
  }, []);

  const router = useRouter();

  const { surveyDetail, cananswer } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [toModalData, setToModalData] = useState({
    surveyid: "",
    bigtext: "",
    smalltext: "",
    confirm: "",
  });

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
  // const isExpired = now.isAfter(endTime);
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

  let currentUrl = "/";
  if (typeof window !== "undefined") {
    currentUrl = window.location.href;
  }

  return (
    <div style={{ paddingTop: "90px", paddingBottom: "90px" }}>
      <StyledSurveyContent>
        <div style={{ display: "flex", gap: "14px", flexDirection: "column" }}>
          <StyledTag {...detailProps}>
            {detailProps.type === "NORMAL" ? (
              <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
            ) : (
              <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
            )}
            <div className="type-text">{typeName}</div>
          </StyledTag>

          <div style={{ display: "flex", justifyContent: "space-between" }}>

            <div>

              <SurveyTitle>{detailProps.title}</SurveyTitle>
              <SurveyPurpose>{detailProps.content || "많은 관심과 참여 부탁드립니다."}</SurveyPurpose>
            </div>
            <CopyToClipboard text={currentUrl} onCopy={() => alert("클립보드에 복사되었습니다.")}>
              <StyledShare src="/surveyDetail/share.png" alt="share"></StyledShare>
            </CopyToClipboard>
          </div>
          {/* <SurveyPurpose>{detailProps.content || "많은 관심과 참여 부탁드립니다."}</SurveyPurpose> */}
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
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              <div>{starttimestr}부터</div>
              <div>
                <span className="end"> {endtimestr}</span>까지
              </div>
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
              {detailProps.headcount} / {detailProps.closedheadcount}명
            </div>
          </StyledText>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
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
              <div className="hangeul">초</div>
            </SurveyCardText>
          </SurveyCard>

          <SurveyCard>
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

        <StyledButton>
          {(() => {
            switch (cananswer) {
              case "TIMEOVER":
                return <Button style={{ borderRadius: "0px" }} use="bgGray" label="마감된 설문입니다."></Button>;
              case "TIMEBEFORE":
                return <Button style={{ borderRadius: "0px" }} use="bgGray" label="설문 시작 전입니다."></Button>;
              case "DIDANSWER":
                return <Button style={{ borderRadius: "0px" }} use="bgGray" label="이미 응답한 설문입니다."></Button>;
              case "HEADFULL":
                return <Button style={{ borderRadius: "0px" }} use="bgGray" label="인원 마감입니다."></Button>;
              case "TYPENOTMATCH":
                return <Button style={{ borderRadius: "0px" }} use="bgGray" label="설문 대상자가 아닙니다."></Button>;
              default: // case "CANANSWER":
                return (
                  <Button
                    style={{ borderRadius: "0px" }}
                    use={detailProps.type === "NORMAL" ? "purple" : "longYellow"}
                    label="지금 응답하기"
                    onClick={() => {
                      if (hasAccessToken) {
                        setToModalData({
                          surveyid: detailProps.surveyid,
                          bigtext: "설문을 시작하시겠습까?",
                          smalltext: "",
                          confirm: "응답하기",
                        });
                      } else {
                        setToModalData({
                          surveyid: detailProps.surveyid,
                          bigtext: "로그인이 필요합니다.",
                          smalltext: "",
                          confirm: "로그인하기",
                        });
                      }
                      setIsOpen(true);
                    }}
                  />
                );
            }
          })()}
        </StyledButton>
      </StyledSurveyContent>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        bigtext={hasAccessToken ? "설문을 시작하시겠습까?" : toModalData.bigtext}
        smalltext={toModalData.smalltext}
        cancel="닫기"
        confirm={hasAccessToken ? "응답하기" : toModalData.confirm}
        contenttype={detailProps.type}
        surveyid={toModalData.surveyid}
        onConfirmClick={() => {
          if (toModalData.confirm === "로그인하기") {
            router.push("/login");
          } else {
            router.push(`/surveyAnswer/${toModalData.surveyid}`);
          }
        }}
      />
    </div>
  );
};

export default DetailComponent;
