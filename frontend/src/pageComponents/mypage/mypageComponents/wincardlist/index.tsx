"use client";
import InstantWinConfirm from "@/pageComponents/instantWinConfirm";
import { StyledList } from "./Wincardlist.styled";
import Wincard from "./wincard/Wincard";
import { useRouter } from "next/navigation";

const WinCardlist = (props: any) => {
  const lists = props.winConfirmList;

  const router = useRouter();
  const goConfirm = () => {
    console.log("당첨확인페이지로 이동");
  };

  return (
    <StyledList>
      {lists.map((list: any, index: any) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "220px", height: "300px" }}>
            <Wincard
              surveytitle={list.surveyTitle}
              surveywriter={list.surveyWriter}
              usercheck={list.userCheck}
              win={list.win}
              giveawaytype={list.giveawayType}
              answerdatetime={list.answerDateTime}
              onClick={goConfirm}
            />
          </div>
        </div>
      ))}
    </StyledList>
  );
};

export default WinCardlist;
