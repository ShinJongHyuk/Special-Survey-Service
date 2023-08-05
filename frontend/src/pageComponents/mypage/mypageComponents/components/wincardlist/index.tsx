"use client";
import { StyledList } from "@/pageComponents/mypage/Mypage.styled";
import Wincard from "./wincard/Wincard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/components/modal";
import myGiveawayCheckPatch from "@/api/win/myGiveawayCheckPatch";

const WinCardlist = (props: any) => {
  const lists = props.winConfirmList;

  const [isOpen, setIsOpen] = useState(false);
  const [toModalData, setToModalData] = useState({ surveyid: "", giveawayType: "", win: "" });
  const router = useRouter();

  const fetchList = async () => {
    await myGiveawayCheckPatch(toModalData.surveyid);
  };

  console.log(lists);
  return (
    <StyledList>
      {lists.map((list: any, index: any) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "220px", height: "300px" }}>
            <Wincard
              surveytitle={list.surveyTitle}
              surveywriter={list.surveyWriter}
              usercheck={list.userCheck.toString()}
              win={list.win.toString()}
              giveawaytype={list.giveawayType}
              answerdatetime={list.answerDateTime}
              // onClick={() => router.push("/mywincheck/" + list.giveawayId)} // 모바일에서 사용
              onClick={() => {
                if (list.userCheck.toString() !== "true") {
                  setIsOpen(true);
                  setToModalData({ surveyid: list.surveyid, giveawayType: list.giveawayType, win: list.win.toString() });
                }
              }}
            />
          </div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          fetchList();
        }}
        giveawayType={toModalData.giveawayType}
        win={toModalData.win}
      />
    </StyledList>
  );
};

export default WinCardlist;
