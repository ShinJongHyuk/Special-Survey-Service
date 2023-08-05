import { useEffect, useState } from "react";
import { ModalType } from "./Modal.type";
import { StyledBox, StyledModal, StyledTitleBox, StyledWinBox } from "./Modal.styled";
import Button from "../button";
import useScratchHook from "@/Hooks/wincheck/useScratchHook";
import myGiveawayCheckPatch from "@/api/win/myGiveawayCheckPatch";

const Modal = (props: ModalType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };

  const imgsrc = images[props.giveawayType];
  const { canvasRef, mouseDown, canvasOpacity, erase, setCanvasOpacity, isCanvasLoaded } = useScratchHook("/wincheck/board.png", props.isOpen);

  return props.isOpen ? (
    <StyledModal>
      {/* <StyledBox> */}
      <StyledTitleBox>
        <img src="/wincheck/money.png" style={{ width: "70px", height: "70px" }} alt="money" />
        <div className="title"> 당첨 확인하기 </div>
        <div className="subtitle"> 당첨여부를 확인하고 상품을 받아가세요! </div>
      </StyledTitleBox>
      <StyledWinBox>
        {isCanvasLoaded &&
          (props.win ? (
            <div style={{ position: "absolute", width: "140px", height: "140px", zIndex: "0" }}>
              <img src={imgsrc} style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
            </div>
          ) : (
            <div style={{ position: "absolute", width: "300px", height: "120px", zIndex: "0" }}>
              <img src="/wincheck/onlybomb.png" style={{ borderRadius: "100px", width: "100%", height: "100%" }}></img>
            </div>
          ))}
        <canvas
          ref={canvasRef}
          onMouseDown={() => {
            mouseDown.current = true;
          }}
          onMouseUp={() => {
            mouseDown.current = false;
          }}
          onMouseMove={erase}
          style={{ cursor: "pointer", transition: "opacity 1s", opacity: canvasOpacity, zIndex: "10" }}
        />
      </StyledWinBox>

      <div style={{ width: "220px", height: "45px" }}>
        <Button label="목록으로 이동하기" use="longYellow" onClick={props.onClose}></Button>
      </div>
      {/* </StyledBox> */}
    </StyledModal>
  ) : null;
};

export default Modal;
