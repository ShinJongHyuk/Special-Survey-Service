import Speedyattacklist from "@/mobilePageComponents/speedyattacklist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "모바일의 응답시간이 빠른 순서의 모든 설문 리스트입니다.  "
};


export default function () {
  return <Speedyattacklist />;
}
