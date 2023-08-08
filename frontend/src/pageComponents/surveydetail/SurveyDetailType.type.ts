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
