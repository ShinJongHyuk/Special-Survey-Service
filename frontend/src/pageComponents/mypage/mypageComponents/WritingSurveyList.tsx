"use client";
import useWritingListHook from "@/Hooks/mypage/useWritingListHook";
import { StyledList } from "../Mypage.styled";
import Mycard from "@/components/mycard";
import { useRouter } from "next/navigation";

const WritingSurveyList = (props: any) => {
  const { surveys } = useWritingListHook();
  const router = useRouter();

  return (
    <div>
      <StyledList>
        {surveys.map((survey: any, index: any) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "220px", height: "323px" }}>
              <Mycard
                type={survey.surveyCategoryType}
                title={survey.title}
                writername={survey.writerName}
                giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
                remaintime={survey.remainTime || ""}
                endtime={survey.endTime}
                headcount={survey.headCount}
                closedheadcount={survey.closedHeadCount}
                onClick={() => router.push("/surveyresult/" + survey.id)}
              />
            </div>
          </div>
        ))}
      </StyledList>
    </div>
  );
};

export default WritingSurveyList;
