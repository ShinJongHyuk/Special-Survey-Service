"use client";

import { useMypageStore } from "@/stores/mypage/useMypageStore";
import MypageComponents from "./mypageComponents";
import useUserStore from "@/stores/useUserStore";
import { useEffect } from "react";
import Image from "next/image";
import { StyledBanner } from "./Mypage.styled";

const Mypage = () => {
  const selectBtn = useMypageStore((state) => state.selectBtn);
  const userInformation = useUserStore((state: any) => state.userInformation);

  useEffect(() => {
    console.log(userInformation);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#FFF129", height: "220px" }}>
        <StyledBanner>
          <Image src="/womanIcon.png" alt="man" width={120} height={120} style={{ border: "1px solid black", borderRadius: "50%" }}></Image>
          <div>
            <div>email</div>
            <div>이름/생년월일</div>
          </div>
          <div>
            <div> 응답한 설문</div>
            <div> 만든 설문</div>
            <div> 당첨된 상품 </div>
          </div>
        </StyledBanner>
      </div>
      <MypageComponents selectBtn={selectBtn} />
    </>
  );
};

export default Mypage;
