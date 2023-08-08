export interface DetailPropsType {
  closedheadcount: string;
  endtime: string;
  headcount: string;
  questioncount: string;
  requiredtime: string;
  starttime: string;
  type: string;
  title: string;
  writername: string;
  giveawaynames: string;
  content: string;
  surveyid: string;
}

export interface ResultPropsType {
  headcount: string;
  type: string;
  giveawaytype: string;
  percent: string;
  id: string;
}

export interface BoardPropsType {
  answertime: string;
  name: string;
  giveawayname: string;
  iswin: string;
  submitorder: string;
  type: string;
  surveyid: string;
}

export const convertToDetailProps = (surveyDetail: any): DetailPropsType => {
  return {
    closedheadcount: surveyDetail.closedHeadCount || "0",
    endtime: surveyDetail.endTime || "",
    headcount: surveyDetail.headCount || "0",
    questioncount: surveyDetail.questionCount || "0",
    requiredtime: surveyDetail.requiredTimeInSeconds || "0",
    starttime: surveyDetail.startTime || "",
    type: surveyDetail.surveyCategoryType || "",
    title: surveyDetail.title || "",
    writername: surveyDetail.writerName || "",
    giveawaynames: surveyDetail.surveyGiveaways?.[0]?.giveawayResponse?.name || "",
    content: surveyDetail.content || "",
    surveyid: surveyDetail.id || "",
  };
};

export const convertToResultProps = (surveyDetail: any): ResultPropsType => {
  return {
    headcount: surveyDetail.headCount || "0",
    type: surveyDetail.surveyCategoryType || "0",
    giveawaytype: surveyDetail.surveyGiveaways?.[0]?.giveawayResponse?.giveawayType || "0",
    percent: surveyDetail.winningPercent || "0",
    id: surveyDetail.id || "0",
  };
};
export const convertToBoardProps = (surveyDetail: any): BoardPropsType => {
  return {
    answertime: surveyDetail.answerTime || "0",
    name: surveyDetail.name || "",
    giveawayname: surveyDetail.giveAwayName || "",
    iswin: surveyDetail.isWin ? "true" : "false",
    submitorder: surveyDetail.submitOrder || "0",
    type: surveyDetail.surveyCategoryType || "",
    surveyid: surveyDetail.id || "",
  };
};
