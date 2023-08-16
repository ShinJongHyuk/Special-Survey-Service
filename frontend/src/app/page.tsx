import Viewcheck from "@/pageComponents/viewcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "설문조사 플랫폼 SSS입니다. 즉시당첨, 일반 타입 2가지 타입의 설문을 제공합니다."
};

export default function Home() {
  return <Viewcheck page="main"></Viewcheck>;
}
