import useAnsweredListHook from "@/Hooks/mypage/useAnsweredListHook";
import Cardlist from "@/mobileComponents/cardlist";
import { SurveyCard } from "@/mobilePageComponents/surveydetail/detail/Detail.styled";
import { useRouter } from "next/navigation";

const AnsweredSurveyList = () => {
  const { surveys } = useAnsweredListHook();

  return (
    <div style={{ marginTop: "20px" }}>
      <Cardlist cards={surveys} contentType="mypage"></Cardlist>
    </div>
  );
};

export default AnsweredSurveyList;
