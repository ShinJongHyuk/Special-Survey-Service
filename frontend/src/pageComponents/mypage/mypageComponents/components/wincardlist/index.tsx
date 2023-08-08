"use client";
import { StyledList } from "@/pageComponents/mypage/Mypage.styled";
import Wincard from "./wincard/Wincard";
import { useState } from "react";
import Modal from "@/pageComponents/mypage/mypageComponents/components/modal";
import myGiveawayCheckPatch from "@/api/win/myGiveawayCheckPatch";
import useWinListHook from "@/Hooks/mypage/useWinListHook";
import { useRouter } from "next/navigation";

const WinCardlist = (props: any) => {
  const lists = props.winConfirmList;

  const [isOpen, setIsOpen] = useState(false);
  const [toModalData, setToModalData] = useState({ surveyid: "", giveawayType: "", win: "" });

  const patchList = async (surveyid: any) => {
    await myGiveawayCheckPatch(surveyid);
    // await props.refreshList();
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
                  setToModalData({ surveyid: list.surveyId, giveawayType: list.giveawayType, win: list.win.toString() });
                  patchList(list.surveyId);
                  setIsOpen(true);
                }
              }}
            />
          </div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={async () => {
          await props.refreshList();
          setIsOpen(false);
        }}
        giveawayType={toModalData.giveawayType}
        win={toModalData.win}
      />
    </StyledList>
  );
};

export default WinCardlist;
