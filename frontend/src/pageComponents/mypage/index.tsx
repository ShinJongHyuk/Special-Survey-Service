"use client";
import { useMypageStore } from "@/stores/mypage/useMypageStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MypageComponents from "./mypageComponents";
import Banner from "./mypageComponents/components/banner";

// import dynamic from "next/dynamic";
// const Banner = dynamic(() => import('./mypageComponents/components/banner'), { ssr: false })
// const MypageComponents = dynamic(() => import('./mypageComponents'), { ssr: false })

const Mypage = () => {
  const router = useRouter();

  const selectBtn = useMypageStore((state) => state.selectBtn);

  return (
    <div>
      <>
        <Banner />
        <MypageComponents selectBtn={selectBtn} />
      </>
    </div>
  );
};

export default Mypage;
