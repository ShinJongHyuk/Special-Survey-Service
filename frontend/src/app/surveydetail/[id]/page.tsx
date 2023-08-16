import Viewcheck from "@/pageComponents/viewcheck";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
  description: "설문 디테일 페이지입니다.  "
};



export default function Page({ params }: { params: { id: string } }) {
  return <Viewcheck id={params.id} page="surveydetail"></Viewcheck>;
}
