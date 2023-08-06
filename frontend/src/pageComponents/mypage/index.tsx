"use client";
import { useMypageStore } from "@/stores/mypage/useMypageStore";
import MypageComponents from "./mypageComponents";
import Banner from "./mypageComponents/components/banner";
import userDetailGet from "@/api/user/userDetailGet";
import { useState, useEffect } from "react";

// import dynamic from "next/dynamic";
// const Banner = dynamic(() => import('./mypageComponents/components/banner'), { ssr: false })
// const MypageComponents = dynamic(() => import('./mypageComponents'), { ssr: false })

const Mypage = () => {
  const selectBtn = useMypageStore((state) => state.selectBtn);

  const [userInformation, setUserInformation] = useState<any>({});
  useEffect(() => {
    const fetchList = async () => {
      const data = await userDetailGet();
      setUserInformation(data);
      console.log("mypage :", data);
    };
    fetchList();
  }, []);

  if (!userInformation || !userInformation.gender) return <div>Loading...</div>;

  return (
    <div>
      <>
        <Banner userInfo={userInformation} />
        <MypageComponents selectBtn={selectBtn} />
      </>
    </div>
  );
};

export default Mypage;
