"use client";
import { useMypageStore } from "@/stores/mypage/useMypageStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useUserStore from "@/stores/useUserStore";
import MypageComponents from "./mypageComponents";
import Banner from "./mypageComponents/components/banner";
// import dynamic from "next/dynamic";
// const Banner = dynamic(() => import('./mypageComponents/components/banner'), { ssr: false })
// const MypageComponents = dynamic(() => import('./mypageComponents'), { ssr: false })

const Mypage = () => {
  const isLogin = useUserStore((state: any) => state.isLogin);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);

  const selectBtn = useMypageStore((state) => state.selectBtn);


  return (
    <div>

      {isLogin ? (
        <>
          <Banner />
          <MypageComponents selectBtn={selectBtn} />
        </>
      ) : <></>}
    </div>
  )
};

export default Mypage;
