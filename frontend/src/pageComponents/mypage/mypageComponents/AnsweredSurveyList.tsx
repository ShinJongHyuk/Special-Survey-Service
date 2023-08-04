import useAnsweredListHook from "@/Hooks/mypage/useAnsweredListHook";
import { StyledList } from "../Mypage.styled";
import Mycard from "@/components/mycard";

const AnsweredSurveyList = (props: any) => {
  const { surveys } = useAnsweredListHook();
  return (
    <div>
      <StyledList>
        {surveys.map((survey: any, index: any) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "220px" }}>
              <Mycard
                type={survey.surveyCategoryType}
                title={survey.title}
                writername={survey.writerName}
                giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
                remaintime={survey.remainTime || ""}
                endtime={survey.endTime}
                probability={survey.winningPercent + "%"} />
            </div>
          </div>
        ))}
      </StyledList>
    </div>
  )
};

export default AnsweredSurveyList;
