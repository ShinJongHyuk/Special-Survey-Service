import Agreement from "@/pageComponents/agreement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "설문 동의 페이지입니다 "
};
export default function () {
  return <Agreement />;
}
