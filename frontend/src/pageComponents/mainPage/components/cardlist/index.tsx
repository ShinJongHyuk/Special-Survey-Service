import Card from "@/components/card";
import { StyledCardList } from "./CardList.styled";
import { useRouter } from "next/navigation";

const CardList = (props: any) => {
  const cards = props.cards;
  const router = useRouter();
  return (
    <StyledCardList>
      {cards &&
        cards.map((survey: any, index: any) => (
          <div key={index}>
            <div style={{ width: "220px", height: "323px" }}>
              <Card
                title={survey.title}
                nickname={survey.writerName}
                type={survey.surveyCategoryType}
                giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
                probability={survey.winningPercent + "%"}
                remaintime={survey.remainTime || ""}
                endtime={survey.endTime}
                responsedtime={survey.requiredTimeInSeconds + "분"}
                id={survey.id}
                contentype={props.contentType}
                onClick={() => router.push("/surveydetail/" + survey.id)}
              />
            </div>
          </div>
        ))}
    </StyledCardList>
  );
};

export default CardList;
