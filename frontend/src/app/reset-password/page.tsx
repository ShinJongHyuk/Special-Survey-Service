import ResetPasswordPage from "@/pageComponents/resetpassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "비밀번호 변경 페이지 입니다.  "
};


export default function () {
  return <ResetPasswordPage />;
}
