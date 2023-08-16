import Viewcheck from "@/pageComponents/viewcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "웹 화면에서의 설문 리스트입니다. 일반타입, 즉시당첨, 2가지 타입의 설문 리스트를 확인할 수 있습니다.  "
};


export default function () {
  return <Viewcheck page="surveylist" />;
}
