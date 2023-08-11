"use client";
import {
  Board,
  BoardTop,
  BoardCount,
  BoardTopLiveFont,
  TableContainer,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from "./Board.styled";
import { useRef, useEffect, useState } from "react";
import { SSEToBoardProps, convertToBoardProps } from "../../SurveyDetailType.type";
import useSSEHook from "@/Hooks/sse/useSSEHook";

function formatAnswerTime(answerTime: string): string {
  const date = new Date(answerTime);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

const BoardComponent = (props: any) => {
  const tableContainerRef = useRef(null);
  const answerlog = props.answerlog;
  const surveyDetail = props.surveyDetail;

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (tableContainerRef.current) {
      const container = tableContainerRef.current as HTMLDivElement;
      container.scrollTop = container.scrollHeight;
    }
  };

  const [answerPropsArray, setAnswerPropsArray] = useState((Array.isArray(answerlog) ? answerlog : [answerlog]).map(convertToBoardProps));

  const SSEdata = useSSEHook(surveyDetail.id, "응답인원추가");
  useEffect(() => {
    setAnswerPropsArray((Array.isArray(answerlog) ? answerlog : [answerlog]).map(convertToBoardProps));
  }, [answerlog]);

  useEffect(() => {
    if (SSEdata) {
      const jsonData = JSON.parse(SSEdata);
      const newEntry = SSEToBoardProps(jsonData);
      setAnswerPropsArray((prevArray) => [...prevArray, newEntry]);
    }
  }, [SSEdata]);

  return (
    <Board>
      <BoardTop>
        <div style={{ display: "flex", marginLeft: "40px", gap: "10px" }}>
          <BoardTopLiveFont>
            {surveyDetail.closed
              ? "전체 당첨 결과"
              : (surveyDetail.surveyCategoryType === "NORMAL" ? "실시간 응답 현황" : "실시간 당첨 현황")
            }
          </BoardTopLiveFont>

          <BoardCount>{answerPropsArray.length}</BoardCount>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginRight: "20px",
          }}
        ></div>
      </BoardTop>

      <TableContainer ref={tableContainerRef}>
        <table style={{ width: "100%" }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#E4E7EC" }}>
              <TableHeaderCell style={{ width: "25%" }}>
                <div className="text">설문일시</div>
              </TableHeaderCell>
              <TableHeaderCell style={{ width: "20%" }}>
                <div className="text">이름</div>
              </TableHeaderCell>
              <TableHeaderCell style={{ width: "30%" }}>
                <div className="text">리워드</div>
              </TableHeaderCell>
              <TableHeaderCell style={{ width: "25%" }}>
                <div className="text">
                  {
                    surveyDetail.closed || surveyDetail.surveyCategoryType !== "NORMAL"
                      ? "당첨 여부"
                      : "추첨 번호"
                  }

                </div>
              </TableHeaderCell>
            </TableRow>
          </TableHead>


          {[...answerPropsArray].length > 0 && (
            <tbody>
              {answerPropsArray.reverse().map((answerProp, index) => (
                <TableRow key={index} {...answerProp}>
                  <TableDataCell style={{ width: "25%" }}>
                    <div className="number">{formatAnswerTime(answerProp.answertime)}</div>
                  </TableDataCell>
                  <TableDataCell style={{ width: "20%" }}>
                    <div className="korean">{answerProp.name}</div>
                  </TableDataCell>

                  {
                    surveyDetail.closed || answerProp.type !== "NORMAL"
                      ? (
                        <TableDataCell style={{ width: "30%" }}>
                          <div className="korean">{answerProp.giveawayname}</div>
                        </TableDataCell>
                      )
                      : (<TableDataCell style={{ width: "30%" }}>
                        <div className="korean">이후 당첨 상품 확인</div>
                      </TableDataCell>)
                  }
                  {answerProp.type === "NORMAL" ? (
                    <TableDataCell style={{ width: "25%" }}>
                      <div className="korean">{answerProp.submitorder}</div>
                    </TableDataCell>
                  ) : (
                    <TableDataCell style={{ width: "25%" }}>
                      <div className="korean">{answerProp.iswin === "true" ? "당첨" : "꽝"}</div>
                    </TableDataCell>
                  )}
                </TableRow>
              ))}
            </tbody>
          )}
        </table>
      </TableContainer>
      <div
        style={{ height: "48px", width: "100%", backgroundColor: "#E2E4EA", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px" }}
      ></div>
    </Board>
  );
};

export default BoardComponent;
