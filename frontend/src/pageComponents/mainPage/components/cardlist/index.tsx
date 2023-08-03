import Card from "@/components/card";
import { StyledCardList } from "./CardList.styled";

const CardList = (props: any) => {
  const cards = props.cards;
  return (
    <StyledCardList>
      {cards.map((survey: any, index: any) => (
        <div key={index}>
          <div style={{ width: "220px" }}>
            <Card
              title={survey.title}
              nickname={survey.writerName}
              type={survey.type}
              giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
              probability={survey.winningPercent + "%"}
              remaintime={survey.remainTime || ""}
              endtime={survey.endTime}
              responsedtime={survey.requiredTimeInSeconds + "분"}
              contentype={props.contentType}
            />
          </div>
        </div>
      ))}
    </StyledCardList>
  );
};

export default CardList;
