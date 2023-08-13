import Viewcheck from "@/pageComponents/viewcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
};

export default function ({ params }: { params: { id: string } }) {
  return <Viewcheck page="instantwincheck" id={params.id}></Viewcheck>;
}
