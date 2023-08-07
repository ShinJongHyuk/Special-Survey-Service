import Card from "@/components/card";
import React from "react";
import { useRouter } from "next/navigation";
import useSSEHook from "@/Hooks/sse/useSSEHook";

const NormalCard = ({ survey }: any) => {
  const router = useRouter();
  const percent = useSSEHook(survey.id, "확률변동");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "220px" }}>
        <Card
          title={survey.title}
          nickname={survey.writerName}
          type={survey.surveyCategoryType}
          giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
          probability={percent ? percent + "%" : survey.winningPercent + "%"}
          remaintime={survey.remainTime || ""}
          endtime={survey.endTime}
          onClick={() => router.push("/surveydetail/" + survey.id)}
        />
      </div>
    </div>
  );
};

export default NormalCard;
