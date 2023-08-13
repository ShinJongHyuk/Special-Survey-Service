"use client";
// import { StyledTag } from '@/components/card/Card.styled'
import {
  Survey_Container,
  SurveyQuestionContainer,
  SurveyQuestion,
  Survey_Title_Container,
  StyledTag,
  Surveycontent,
  SurveyImage,
} from "./Question.styled";
import { useEffect, useState } from "react";
import useSurveyAnswerStore from "@/stores/useSurveyAnswer";
import Image from "next/image";
import Radiobutton from "../forms/radiobutton";
import Date from "../forms/date";
import CheckBox from "../forms/checkbox";
import Time from "../forms/time";
import ShortForm from "../forms/short";

const QuestionComponent = (props: any) => {
  const questionNumber = props.questionNumber;
  const [disabled, setDisabled] = useState(true);
  const questionId = props.id;
  const linkNumber = useSurveyAnswerStore((state: any) => state.linkNumber);
  const removeLinkTimeAnswer = useSurveyAnswerStore((state: any) => state.removeLinkTimeAnswer);
  const multipleChoices = props.multipleChoices;
  const setLinkNumber = useSurveyAnswerStore((state: any) => state.setLinkNumber);
  useEffect(() => {
    if (linkNumber.includes(questionNumber)) {
      setDisabled(true);
      removeLinkTimeAnswer(questionId);
    } else {
      setDisabled(false);
    }
  }, [linkNumber]);
  useEffect(() => {
    multipleChoices.map((multipleChoice: any) => {
      if (multipleChoice.linkNumber) {
        setLinkNumber(multipleChoice.linkNumber);
      }
    });
  }, [multipleChoices]);
  console.log(props);
  useEffect(() => {
    console.log(props, "123");
  });
  return (
    <>
      {!disabled && (
        <Survey_Container>
          <Survey_Title_Container>
            <SurveyQuestionContainer>
              <StyledTag type={props.surveyCategoryType} disabled={disabled}>
                <div className="type-text">Q{props.questionNumber}</div>
              </StyledTag>
              <SurveyQuestion>{props.title}</SurveyQuestion>
              <Surveycontent disabled={disabled}>{props.content}</Surveycontent>
              <SurveyImage>
                {props.imgAddress && <Image src={props.imgAddress} alt={props.id} width={100} height={100} unoptimized={true}></Image>}
              </SurveyImage>
            </SurveyQuestionContainer>
            {props.type === "MULTIPLE_CHOICE" && <Radiobutton {...props} disabled={disabled}></Radiobutton>}
            {props.type === "CHECK_BOX" && <CheckBox {...props} disabled={disabled}></CheckBox>}
            {props.type === "SHORT_FORM" && <ShortForm {...props} disabled={disabled}></ShortForm>}
            {props.type === "DATE_FORM" && <Date {...props} disabled={disabled}></Date>}
            {props.type === "TIME_FORM" && <Time {...props} disabled={disabled}></Time>}
          </Survey_Title_Container>
        </Survey_Container>
      )}
    </>
  );
};

export default QuestionComponent;
