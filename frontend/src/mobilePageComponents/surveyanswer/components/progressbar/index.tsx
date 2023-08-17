"use client";
import { useEffect, useState } from "react";
import { ProgressContainer, ProgressBar, ProgressBarPercentage } from "./ProgressBar.styeld";
import useSurveyAnswerStore from "@/stores/useSurveyAnswer";
import surveyPost from "@/api/surveyAnswer/surveyPost";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";

interface propsType {
  id: any;
  questionsCount: any;
  type: any;
}

const ProgressBarComponent = (props: propsType) => {
  const router = useRouter();
  const answer = useSurveyAnswerStore((state: any) => state.answer);
  const resetAnswer = useSurveyAnswerStore((state: any) => state.resetAnswer);
  const checkBoxAnswer = useSurveyAnswerStore((state: any) => state.checkBoxAnswer);
  const resetCheckBox = useSurveyAnswerStore((state: any) => state.resetCheckBox);
  const dateAnswer = useSurveyAnswerStore((state: any) => state.dateAnswer);
  const resetDateAnswer = useSurveyAnswerStore((state: any) => state.resetDateAnswer);
  const timeAnswer = useSurveyAnswerStore((state: any) => state.timeAnswer);
  const resetTimeAnswer = useSurveyAnswerStore((state: any) => state.resetTimeAnswer);
  const linkNumber = useSurveyAnswerStore((state: any) => state.linkNumber);
  const resetLinkNumber = useSurveyAnswerStore((state: any) => state.resetLinkNumber);
  const [count, setCount] = useState<any>([]);
  const percentage =
    answer && ((answer.length + count.length + dateAnswer.length + timeAnswer.length) / (props.questionsCount - linkNumber.length)) * 100;
  const viewPercentage = Math.round(percentage);

  useEffect(() => {
    resetAnswer();
    resetCheckBox();
    resetDateAnswer();
    resetTimeAnswer();
    resetLinkNumber();
  }, []);

  useEffect(() => {
    if (checkBoxAnswer.length === 0) {
      setCount([]);
    } else {
      checkBoxAnswer.map((e: any) => {
        if (!count.includes(e.questionId)) {
          setCount([...count, e.questionId]);
        }
      });
    }
  }, [checkBoxAnswer]);

  const submitAnswer = async () => {
    if (percentage === 100) {
      const answers = [...answer, ...checkBoxAnswer, ...dateAnswer, ...timeAnswer];

      const res = await surveyPost(answers, props.id);
      if (res?.data.success === true) {
        if (props.type === "NORMAL") {
          router.push("/");
        } else {
          router.push("/instantwincheck/" + props.id);
        }
      } else if (res?.data.success === false) {
        alert(res.data.apiError.message);
      }
    }
  };

  // modal
  const [showModal, setShowModal] = useState(false);
  const onModal = () => {
    if (percentage === 100) {
      setShowModal(true);
    }
  }
  return (
    <div>

      <ProgressContainer onClick={onModal}>
        <ProgressBar type={props.type} width={percentage} ></ProgressBar>
        <ProgressBarPercentage width={percentage}>{percentage === 100 ? "제출" : `${viewPercentage}%`}</ProgressBarPercentage>
      </ProgressContainer>
      <Modal
        isOpen={showModal}
        bigtext="설문 응답을 제출하시겠습니까?"
        cancel="닫기"
        confirm="제출"
        onClose={() => setShowModal(false)}
        onConfirmClick={submitAnswer}
        contenttype={props.type === "NORMAL" ? "NORMAL" : "INSTANT_WIN"}
      />
    </div>
  );
};

export default ProgressBarComponent;
