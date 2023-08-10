"use client";
import MainPage from "@/pageComponents/mainPage";
import { Metadata } from "next";
import useIsMobileHook from "@/mobileComponents/hooks/useIsMobileHook";
import Mobilemain from "@/mobileComponents/mobilemain";

export const metadata: Metadata = {
  title: "SSS",
};

export default function Home() {
  const isMobile = useIsMobileHook();
  return <>{isMobile ? <Mobilemain /> : <MainPage></MainPage>}</>;
}
