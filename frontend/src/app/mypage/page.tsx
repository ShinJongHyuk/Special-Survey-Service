import Viewcheck from "@/pageComponents/viewcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "마이페이지입니다. 회원 정보 수정, 응답한 설문 목록, 만든 설문 목록, 당첨 상품 목록을 확인할 수 있습니다. "
};
export default function () {
  return <Viewcheck page="mypage" />;
}
