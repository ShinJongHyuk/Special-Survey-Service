"use client";
import {
  Board,
  BoardTop,
  BoardCount,
  BoardTopLiveFont,
  BoardTopLivetime,
  TableContainer,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from "./Board.styled";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { BoardPropsType } from "../../SurveyDetailType.type";
import moment from "moment";


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

  const { answerlog } = props;

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (tableContainerRef.current) {
      const container = tableContainerRef.current as HTMLDivElement;
      container.scrollTop = container.scrollHeight;
    }
  };


  const convertToDetailProps = (surveyDetail: any): BoardPropsType => {
    return {
      answertime: surveyDetail.answerTime || "0",
      name: surveyDetail.name || "",
      giveawayname: surveyDetail.giveAwayName || "",
      iswin: surveyDetail.isWin || "",
      submitorder: surveyDetail.submitOrder || "0",
      type: surveyDetail.surveyCategoryType || "",
    };
  }

  const isArray = Array.isArray(answerlog);
  const answerPropsArray = (isArray ? answerlog : [answerlog]).map(convertToDetailProps);
  const [nowtime, setNowtime] = useState('Loading...'); // 초기값을 'Loading...' 등으로 설정

  useEffect(() => {
    const now = moment();
    const formattedNow = now.format('YYYY.MM.DD HH:mm:ss');
    setNowtime(formattedNow);
  }, []);

  console.log("answer props: ", answerPropsArray)
  return (
    <Board>
      <BoardTop>
        <div style={{ display: "flex", marginLeft: "40px", gap: "10px" }}>
          <BoardTopLiveFont>{answerPropsArray[0].type === "NORMAL" ? "실시간 응답 현황" : "실시간 당첨 현황"}</BoardTopLiveFont>
          <BoardCount>{answerPropsArray.length}</BoardCount>
        </div>

        <div style={{
          display: "flex", gap: "10px", alignItems: "center", marginRight: "20px"
        }}>
          <BoardTopLivetime>{nowtime}</BoardTopLivetime>
          <Image src="/surveyDetail/refresh.png" alt="refresh" width={16} height={16} style={{ cursor: "pointer" }}></Image>
        </div>
      </BoardTop>

      {/* <TableContainer ref={tableContainerRef}> */}
      <TableContainer ref={tableContainerRef} >
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
              {answerPropsArray[0].type === "NORMAL" ? (
                <TableHeaderCell style={{ width: "25%" }}>
                  <div className="text">추첨 번호 </div>
                </TableHeaderCell>
              ) : (
                <TableHeaderCell style={{ width: "25%" }}>
                  <div className="text">당첨여부</div>
                </TableHeaderCell>
              )}

            </TableRow>
          </TableHead>
          <tbody>
            {answerPropsArray.reverse().map((answerProp, index) => (
              <TableRow key={index} {...answerProp}>
                <TableDataCell style={{ width: "25%" }}>
                  <div className="number">{formatAnswerTime(answerProp.answertime)}</div>
                </TableDataCell>
                <TableDataCell style={{ width: "20%" }}>
                  <div className="korean">{answerProp.name}</div>
                </TableDataCell>
                {answerProp.type === "NORMAL" ? (
                  <TableDataCell style={{ width: "30%" }}>
                    <div className="korean">
                      이후 당첨 상품 확인
                    </div>
                  </TableDataCell>
                ) : (
                  <TableDataCell style={{ width: "30%" }}>
                    <div className="korean">
                      {answerProp.giveawayname}
                    </div>
                  </TableDataCell>
                )}
                {answerProp.type === "NORMAL" ? (
                  <TableDataCell style={{ width: "25%" }}>
                    <div className="korean">{answerProp.submitorder}</div>
                  </TableDataCell>
                ) : (
                  <TableDataCell style={{ width: "25%" }}>
                    <div className="korean">{answerProp.iswin ? "당첨" : "꽝"}</div>
                  </TableDataCell>
                )}

              </TableRow>
            ))}

          </tbody>
        </table>
      </TableContainer>
      <div
        style={{ height: "48px", width: "100%", backgroundColor: "#E2E4EA", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px" }}
      ></div>
    </Board >
  );
};

export default BoardComponent;
