export interface SurveycardType {
  title: string;
  nickname: string;

  giveaways: string;

  probability?: string;
  remaintime?: string;
  endtime: string;

  responsedtime?: string;

  id?: string;

  typename?: string;

  onClick?: (e: any) => any;
}
