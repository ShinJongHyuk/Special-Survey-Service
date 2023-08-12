import { useRouter } from "next/navigation";
import { StyledCardList } from "../Timeattack.styled";
import Card2 from "@/components/card2";

const TimeAttackCardList = (props: any) => {
  const cards = props.cards;
  const transformValue = props.transformValue;
  const router = useRouter();

  return (
    <StyledCardList
      style={{
        transform: `translateX(${transformValue}px)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {cards &&
        cards.map((survey: any, index: any) => (
          <div key={index}>
            <div style={{ width: "440px" }}>
              <Card2
                title={survey.title}
                nickname={survey.writerName}
                giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
                probability={survey.winningPercent + "%"}
                remaintime={survey.remainTime || ""}
                id={survey.id}
                onClick={() => router.push("/surveydetail/" + survey.id)}
              />
            </div>
          </div>
        ))}
    </StyledCardList>
  );
};

export default TimeAttackCardList;
