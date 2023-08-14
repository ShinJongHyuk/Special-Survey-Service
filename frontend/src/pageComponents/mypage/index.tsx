"use client";
import { useMypageStore } from "@/stores/mypage/useMypageStore";
import MypageComponents from "./mypageComponents";
import Banner from "./mypageComponents/components/banner";
import userDetailGet from "@/api/user/userDetailGet";
import { useState, useEffect } from "react";

const Mypage = () => {
  const selectbtn = useMypageStore((state) => state.selectbtn);

  const [userInformation, setUserInformation] = useState<any>({});

  useEffect(() => {
    const fetchList = async () => {
      const data = await userDetailGet();
      setUserInformation(data);
    };
    fetchList();
  }, []);

  if (!userInformation || !userInformation.gender) return <div>Loading...</div>;

  return (
    <div>
      <>
        <Banner userInfo={userInformation} />
        <MypageComponents selectbtn={selectbtn} />
      </>
    </div>
  );
};

export default Mypage;
