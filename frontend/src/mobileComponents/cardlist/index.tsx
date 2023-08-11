"use client";
import Surveycard from "../surveycard";
import { StyledCardList } from "./Cardlist.styled";
import { useRouter } from "next/navigation";

const Cardlist = (props: any) => {
  const cards = props.cards;
  const router = useRouter();

  return (
    <StyledCardList>
      {cards.map((survey: any, index: any) => (
        <div key={index}>
          <div style={{ width: "315px", height: "155px" }}>
            <Surveycard
              title={survey.title}
              nickname={survey.writerName}
              type={survey.surveyCategoryType}
              giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
              // giveaways={survey.surveyGiveaways}
              probability={survey.winningPercent + "%"}
              remaintime={survey.remainTime || ""}
              endtime={survey.endTime}
              responsedtime={survey.requiredTimeInSeconds + "분"}
              id={survey.id}
              contentype={props.contentType}
            />
          </div>
        </div>
      ))}
    </StyledCardList>
  );
};

export default Cardlist;
