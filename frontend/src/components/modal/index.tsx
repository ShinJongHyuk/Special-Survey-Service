import { useRouter } from "next/navigation";
import Button from "../button";
import { StyledModalWrapper, StyledModal, StyledBigText } from "./Modal.styled";
import { ModalType } from "./Modal.type";

const Modal = (props: ModalType) => {
  const router = useRouter();
  return props.isOpen ? (
    <StyledModalWrapper>
      <StyledModal style={{ backgroundColor: "white", width: "350px", height: "230px" }}>
        <img src="/modal/screamer.png" style={{ width: "25%" }}></img>
        <StyledBigText>
          <div className="title">{props.bigtext}</div>
          {props.smalltext !== "" ? <div className="subtitle"> {props.smalltext} </div> : null}
        </StyledBigText>

        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
          <div style={{ width: "43%", height: "38px" }}>
            <Button use="bgGray" label={props.cancel} style={{ borderRadius: "5px" }} onClick={props.onClose} />
          </div>
          <div style={{ width: "43%", height: "38px" }}>
            <Button
              use={props.contenttype === "NORMAL" ? "purple" : "longYellow"}
              label={props.confirm}
              style={{ borderRadius: "5px" }}
              onClick={() => {
                if (props.onConfirmClick) {
                  props.onConfirmClick();
                }
              }}
            />
          </div>

        </div>
      </StyledModal>
    </StyledModalWrapper>
  ) : null;
};

export default Modal;
