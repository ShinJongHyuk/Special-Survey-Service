import Normallist from "@/mobilePageComponents/normallist";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "모바일의 일반 설문 리스트입니다.  "
};


export default function () {
  return <Normallist />;
}
