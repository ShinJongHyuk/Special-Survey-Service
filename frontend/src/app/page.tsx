import Viewcheck from "@/pageComponents/viewcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSS",
};

export default function Home() {
  return <Viewcheck page="main"></Viewcheck>;
}
