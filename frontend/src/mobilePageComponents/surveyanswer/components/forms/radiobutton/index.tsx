"use client";
import { useEffect, useState } from "react";
import { RadioContainer, RadioFlex, RadioButton } from "./Radiobutton.styled";
import useSurveyAnswerStore from "@/stores/useSurveyAnswer";

interface resultType {
  questionId: string;
  multipleChoiceAnswer: string;
}

const Radiobutton = (props: any) => {
  const questionId = props.id;
  const questionNumber = props.questionNumber;
  const multipleChoices = props.multipleChoices;

  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const onButtonClick = (multipleChoice: any) => {
    setSelectedChoice(multipleChoice.id);

    if (multipleChoice.linkNumber) {
      setLinkNumber(multipleChoice.linkNumber);
    }

    const updateResult = {
      questionId: String(questionId),
      multipleChoiceAnswer: multipleChoice.id,
    };

    setAnswer(updateResult);
    removeLinkNumber(multipleChoice.linkNumber);
  };

  const setAnswer = useSurveyAnswerStore((state: any) => state.setAnswer);
  const setLinkNumber = useSurveyAnswerStore((state: any) => state.setLinkNumber);
  const linkNumber = useSurveyAnswerStore((state: any) => state.linkNumber);
  const removeLinkNumber = useSurveyAnswerStore((state: any) => state.removeLinkNumber);
  const removeLinkAnswer = useSurveyAnswerStore((state: any) => state.removeLinkAnswer);
  useEffect(() => {
    if (linkNumber.includes(questionNumber)) {
      removeLinkAnswer(questionId);
    }
  }, [linkNumber]);

  return (
    <RadioContainer disabled={props.disabled}>
      {multipleChoices &&
        multipleChoices.map((multipleChoice: any) => {
          return (
            <RadioFlex key={multipleChoice.id}>
              <RadioButton selected={selectedChoice === multipleChoice.id} onClick={() => onButtonClick(multipleChoice)} {...props}>
                {multipleChoice.content}
              </RadioButton>
            </RadioFlex>
          );
        })}
    </RadioContainer>
  );
};

export default Radiobutton;
