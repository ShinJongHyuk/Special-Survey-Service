"use client";
import { CardWrapper, CardBack, CardFront, StyledTitleBox, StyledBox, StyledWinBox, BottomButtonBox } from "./Wincheck";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import useScratchHook from "@/Hooks/wincheck/useScratchHook";
import instantwinCheckGet from "@/api/win/instantwinCheckGet";
import { useEffect, useState } from "react";

const MobileInstantwincheck = (props: any) => {
  const [winConfirm, setWinConfirm] = useState<any>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      const data = await instantwinCheckGet(props.id);
      setWinConfirm(data);
    };
    fetchList();
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[winConfirm.giveawayType];

  const router = useRouter();
  const goList = () => {
    router.push("/");
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <StyledBox>
        <StyledTitleBox>
          <img src="/wincheck/money.png" style={{ width: "70px", height: "70px" }} alt="money" />
          <div className="title"> 즉시 당첨 확인하기 </div>
          <div className="subtitle"> 당첨여부를 확인하고 상품을 받아가세요! </div>
        </StyledTitleBox>
        <StyledWinBox>
          <CardWrapper onClick={handleFlip}>
            <CardFront isFlipped={isFlipped}>
              <img src="/wincheck/board.png"></img>
            </CardFront>
            <CardBack isFlipped={isFlipped}>
              {winConfirm.win ? (
                <div style={{ position: "absolute", width: "140px", height: "140px", zIndex: "0" }}>
                  <img src={imgsrc} style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
                </div>
              ) : (
                <div style={{ position: "absolute", width: "300px", height: "120px", zIndex: "0" }}>
                  <img src="/wincheck/bomb.png" style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
                </div>
              )}
            </CardBack>
          </CardWrapper>
        </StyledWinBox>

        <BottomButtonBox>
          <Button label="홈화면으로 이동하기" onClick={goList} use="longYellow"></Button>
        </BottomButtonBox>
      </StyledBox>
    </div>
  );
};

export default MobileInstantwincheck;
