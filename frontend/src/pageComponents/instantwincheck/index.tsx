"use client";
import { StyledTitleBox, StyledBox, StyledWinBox } from "./Wincheck";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import useScratchHook from "@/Hooks/wincheck/useScratchHook";
import instantwinCheckGet from "@/api/win/instantwinCheckGet";
import { useEffect, useState } from "react";

const Instantwincheck = (props: any) => {
  const [winConfirm, setWinConfirm] = useState<any>([]);
  useEffect(() => {
    const fetchList = async () => {
      const data = await instantwinCheckGet(props.surveyid);
      setWinConfirm(data);
      console.log("data : ", data);
    };
    fetchList();
  }, []);

  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  const router = useRouter();
  const goList = () => {
    router.push("/");
  };

  const { canvasRef, mouseDown, canvasOpacity, erase, setCanvasOpacity, isCanvasLoaded } = useScratchHook("/wincheck/board.png", true);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img src="/wincheck/instantwin.png" style={{ position: "absolute", width: "100%", height: "100%", zIndex: "-1" }}></img>

      <StyledBox>
        <StyledTitleBox>
          <img src="/wincheck/money.png" style={{ width: "70px", height: "70px" }} alt="money" />
          <div className="title"> 즉시 당첨 확인하기 </div>
          <div className="subtitle"> 당첨여부를 확인하고 상품을 받아가세요! </div>
        </StyledTitleBox>
        <StyledWinBox>
          {isCanvasLoaded &&
            (winConfirm.win ? (
              <div style={{ position: "absolute", width: "140px", height: "140px", zIndex: "0" }}>
                <img src={imgsrc} style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
              </div>
            ) : (
              <div style={{ position: "absolute", width: "300px", height: "120px", zIndex: "0" }}>
                <img src="/wincheck/bomb.png" style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
              </div>
            ))}
          <canvas
            ref={canvasRef}
            width={380}
            height={140}
            onMouseDown={() => {
              mouseDown.current = true;
            }}
            onMouseUp={() => {
              mouseDown.current = false;
            }}
            onMouseMove={erase}
            style={{ position: "absolute", left: "0", top: "0", cursor: "pointer", transition: "opacity 1s", opacity: canvasOpacity }}
          />
        </StyledWinBox>

        <div style={{ width: "300px", height: "45px" }}>
          <Button label="홈화면으로 이동하기" onClick={goList} use="longYellow"></Button>
        </div>
      </StyledBox>
    </div>
  );
};

export default Instantwincheck;
