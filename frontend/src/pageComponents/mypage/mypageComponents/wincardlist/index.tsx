"use client";
import { StyledList } from "./Wincardlist.styled";
import Wincard from "./wincard/Wincard";

const WinCardlist = (props: any) => {
  const lists = props.winConfirmList;

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
            />
          </div>
        </div>
      ))}
    </StyledList>
  );
};

export default WinCardlist;
