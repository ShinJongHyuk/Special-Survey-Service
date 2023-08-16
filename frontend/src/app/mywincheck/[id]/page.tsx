import Mywincheck from "@/pageComponents/mywincheck";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "당첨 확인 페이지입니다.  "
};

export default function ({ params }: { params: { id: string } }) {
  return <Mywincheck id={params.id}></Mywincheck>;
}
