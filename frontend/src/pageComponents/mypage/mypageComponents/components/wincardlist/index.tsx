"use client";
import { StyledList } from "@/pageComponents/mypage/Mypage.styled";
import Wincard from "./wincard/Wincard";
import { useRouter } from "next/navigation";

const WinCardlist = (props: any) => {
  const lists = props.winConfirmList;

  const router = useRouter();

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
              onClick={() => router.push("/mywincheck/" + list.giveawayId)}
            />
          </div>
        </div>
      ))}
    </StyledList>
  );
};

export default WinCardlist;
