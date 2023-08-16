import Viewcheck from "@/pageComponents/viewcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "회원가입 페이지입니다.  "
};


export default function () {
  return <Viewcheck page="signup" />;
}
