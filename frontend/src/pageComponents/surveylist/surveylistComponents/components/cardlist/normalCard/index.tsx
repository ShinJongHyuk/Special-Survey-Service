import Card from "@/components/card";
import React from "react";
import { useRouter } from "next/navigation";

const NormalCard = ({ index, survey }: any) => {
  const router = useRouter();

  return (
    <div key={index} style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "220px", height: "323px" }}>
        <Card
          title={survey.title}
          nickname={survey.writerName}
          type={survey.surveyCategoryType}
          giveaways={survey.surveyGiveaways[0].giveawayResponse.giveawayType}
          probability={survey.winningPercent + "%"}
          remaintime={survey.remainTime || ""}
          endtime={survey.endTime}
          onClick={() => router.push("/surveydetail/" + survey.id)}
        />
      </div>
    </div>
  );
};

export default NormalCard;
