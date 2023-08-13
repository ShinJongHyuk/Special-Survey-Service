"use client";
import { useEffect, useState } from "react";
import { StyledCheckboxNotice, CheckboxButton, CheckBoxContainer, CheckBoxFlex } from "./CheckBox.styled";
import useSurveyAnswerStore from "@/stores/useSurveyAnswer";

const CheckBox = (props: any) => {
  const multipleChoices = props.multipleChoices;
  const questionNumber = props.questionNumber;
  const setCheckBoxAnswer = useSurveyAnswerStore((state: any) => state.setCheckBoxAnswer);
  const questionId = props.id;
  const linkNumber = useSurveyAnswerStore((state: any) => state.linkNumber);
  const removeCheckBoxLinkNumver = useSurveyAnswerStore((state: any) => state.removeCheckBoxLinkNumver);
  const removeCheckBoxAnswer = useSurveyAnswerStore((state: any) => state.removeCheckBoxAnswer);

  //
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (linkNumber.includes(questionNumber)) {
      removeCheckBoxAnswer(questionId);
    }
  }, [linkNumber]);

  const onClick = (multipleChoice: any) => async (e: any) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(multipleChoice.id)) {
        return prevSelected.filter((id) => id !== multipleChoice.id);
      } else {
        return [...prevSelected, multipleChoice.id];
      }
    });

    const newResult = {
      ["questionId"]: String(questionId),
      ["multipleChoiceAnswer"]: e.target.id,
    };
    setCheckBoxAnswer(newResult);
    removeCheckBoxLinkNumver(multipleChoice.linkNumber);
  };

  return (
    <CheckBoxContainer>
      <StyledCheckboxNotice {...props}> * 여러 개 선택 가능</StyledCheckboxNotice>
      {multipleChoices &&
        multipleChoices.map((multipleChoice: any) => {
          return (
            <CheckBoxFlex key={multipleChoice.id}>
              <CheckboxButton
                surveyCategoryType={props.surveyCategoryType}
                onClick={onClick(multipleChoice)}
                selected={selected.includes(multipleChoice.id)} // 선택된 상태 전달
              >
                {multipleChoice.content}
              </CheckboxButton>
            </CheckBoxFlex>
          );
        })}
    </CheckBoxContainer>
  );
};

export default CheckBox;
