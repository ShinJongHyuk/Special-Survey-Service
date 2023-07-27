import { create } from "zustand";
import { SurveyType } from "./surveyStore.type";

const useSSSPickStore = create<SurveyType>((set) => ({
  surveys: [
    {
      remainTime: "",
      title: "설문지 제목1",
      startTime: "2023-07-26-17-30",
      endTime: "2023-07-30-21-20",
      headCount: "10",
      closedHeadCount: "100",
      nickname: "닉네임abc",
      type: "타임어택",
      probability: "27%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목2",
      startTime: "2023-07-27-10-45",
      endTime: "2023-07-30-11-25",
      headCount: "15",
      closedHeadCount: "50",
      nickname: "닉네임def",
      type: "즉시당첨",
      probability: "34%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목3",
      startTime: "2023-07-28-14-00",
      endTime: "2023-08-01-15-30",
      headCount: "20",
      closedHeadCount: "80",
      nickname: "닉네임ghi",
      type: "타임어택",
      probability: "45%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목4",
      startTime: "2023-07-30-11-20",
      endTime: "2023-08-03-12-30",
      headCount: "30",
      closedHeadCount: "60",
      nickname: "닉네임mno",
      type: "타임어택",
      probability: "47%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목5",
      startTime: "2023-07-29-09-10",
      endTime: "2023-08-02-10-50",
      headCount: "25",
      closedHeadCount: "70",
      nickname: "닉네임jkl",
      type: "즉시당첨",
      probability: "36%",
      giveaways: "coffee",
    },
  ],
}));

export default useSSSPickStore;
