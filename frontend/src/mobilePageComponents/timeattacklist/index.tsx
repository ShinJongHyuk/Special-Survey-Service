"use client";
import Mobiletitle from "@/mobileComponents/mobiletitle";
import Surveycard from "@/mobileComponents/surveycard";
import { StyledBox } from "./Timeattacklist.styled";

const Timeattacklist = () => {
  const survey = {
    id: 1, // 설문 ID
    title: "설문 제목 입니다.",
    content: "설문 세부 내용 입니다.",
    img: "설문 대표 이미지 입니다.",
    surveyCategoryType: "NORMAL", // 설문 타입
    surveyTarget: ["MAN", "WOMAN", "TEENS", "TWENTIES", "THIRTIES"], // 설문 대상자들
    writerName: "김유저", // 작성자 이름
    winningPercent: 100.0, // 당첨 확률
    requiredTimeInSeconds: 30, // 응답에 걸리는 시간
    startTime: "2023-08-01T22:56:00", // 설문 시작 시간
    endTime: "2023-08-31T22:57:00", // 설문 마감 시간
    headCount: 0, // 설문에 응한 사람 수
    closedHeadCount: 10, // 마감 인원수
    questionCount: 2, // 문항 개수
    winHeadCount: 0, // 당첨자 인원수
    surveyGiveaways: [
      // 배열로 넘겨준다 , 0번째 인덱스에 가장 비싼 상품이 있다.
      {
        id: 5, // id값 아마 쓸 일 없을거임
        count: 5, // 당첨 상품 개수
        giveawayResponse: {
          id: 1,
          giveawayType: "COFFEE", // 상품 타입
          name: "스타벅스 아이스 아메리카노", // 상품 이름
          price: 4500, // 상품 가격
        },
      },
    ],
  };
  return (
    <>
      <Mobiletitle text="Time attack" />
      <StyledBox>
        <div style={{ width: "80%", height: "157px" }}>
          <Surveycard
            title={survey.title}
            nickname={survey.writerName}
            typename={survey.surveyCategoryType}
            giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
            probability={survey.winningPercent + "%"}
            endtime={survey.endTime}
          />
        </div>
      </StyledBox>
    </>
  );
};

export default Timeattacklist;
