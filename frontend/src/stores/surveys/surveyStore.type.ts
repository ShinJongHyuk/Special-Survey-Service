export interface SurveyType {
  surveys: {
    title: string;
    startTime: string;
    endTime: string;

    headCount: string;
    closedHeadCount: string;

    nickname: string;
    type: string;

    probability: string;
    giveaways: string;

    remainTime?: string;
    responsedTime?: string;

  }[];
}
