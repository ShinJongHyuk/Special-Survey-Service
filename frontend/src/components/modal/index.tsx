import { useRouter } from "next/navigation";
import Button from "../button";
import { StyledModalWrapper, StyledModal, StyledBigText } from "./Modal.styled";
import { ModalType } from "./Modal.type";

const Modal = (props: ModalType) => {
  const router = useRouter();
  console.log("survey id : ", props.surveyid);
  return props.isOpen ? (
    <StyledModalWrapper>
      <StyledModal style={{ backgroundColor: "white", width: "350px", height: "230px" }}>
        <img src="/modal/screamer.png" style={{ width: "25%" }}></img>
        <StyledBigText>
          <div className="title">{props.bigtext}</div>
          <div className="subtitle"> {props.smalltext} </div>
        </StyledBigText>

        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
          <div style={{ width: "43%", height: "38px" }}>
            <Button use="bgGray" label={props.cancel} style={{ borderRadius: "5px" }} onClick={props.onClose} />
          </div>
          {props.contenttype === "NORMAL" ? (
            <div style={{ width: "43%", height: "38px" }}>
              <Button
                use="purple"
                label={props.confirm}
                style={{ borderRadius: "5px" }}
                onClick={() => router.push(`/surveyAnswer/${props.surveyid}`)}
              />
            </div>
          ) : (
            <div style={{ width: "43%", height: "38px" }}>
              <Button
                use="longYellow"
                label={props.confirm}
                style={{ borderRadius: "5px" }}
                onClick={() => router.push(`/surveyAnswer/${props.surveyid}`)}
              />
            </div>
          )}
        </div>
      </StyledModal>
    </StyledModalWrapper>
  ) : null;
};

export default Modal;
