"use client";

import { useMypageStore } from "@/stores/mypage/useMypageStore";
import MypageComponents from "./mypageComponents";

const Mypage = () => {
  const selectBtn = useMypageStore((state) => state.selectBtn);

  return (
    <>
      <div style={{ backgroundColor: "#FFF129", height: "220px" }}>
        <div>Mypage</div>
      </div>
      <MypageComponents selectBtn={selectBtn} />
    </>
  );
};

export default Mypage;
