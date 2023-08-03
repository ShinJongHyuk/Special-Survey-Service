"use client";
import { useMypageStore } from "@/stores/mypage/useMypageStore";
import MypageComponents from "./mypageComponents";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Banner from "./mypageComponents/banner";
import useUserStore from "@/stores/useUserStore";

const Mypage = () => {
  const isLogin = useUserStore((state: any) => state.isLogin);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin, router]);

  const selectBtn = useMypageStore((state) => state.selectBtn);
  return isLogin ? (
    <>
      <Banner />
      <MypageComponents selectBtn={selectBtn} />
    </>
  ) : null;
};

export default Mypage;
