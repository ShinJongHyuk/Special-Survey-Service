export interface SurveycardType {
  title: string;
  nickname: string;

  type: string;
  giveaways: string;

  probability: string;

  remaintime: string;
  endtime: string;
  typename?: string;
  responsedtime?: string;
  contentype?: string;
  id?: string;
  onClick?: (e: any) => any;
}
