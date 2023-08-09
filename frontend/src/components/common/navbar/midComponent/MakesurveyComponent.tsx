"use client";
import React from "react";
import { useState,useEffect } from "react";
import { StyledText, StyledMidComp, StyledTitleInput } from "../Navbar.styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import useSettingSurveyApiStore from "@/stores/makesurvey/useSettingSurveyApiStore";
import useMakeSurveyApiStore from "@/stores/makesurvey/useMakeSurveyApiStore";
import makeSurveyPost from "@/api/makesurvey/makeSurveyPost";
import useSurveyStore from "@/stores/makesurvey/useSurveyStore";

const MakesruveyComponent = (props: any) => {
    const pathname = props.pathname;
    const router = useRouter();
    const {surveyList} = useMakeSurveyApiStore();
    const {surveyComponents} = useSurveyStore();
    
    const {
      title,
      setTitle,
      titleContent,
      closedHeadCount,
      startTime,
      endTime,
      type,
      surveyTarget,
      img,
    } = useSettingSurveyApiStore();


    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
      };

    const handleCreateButtonClick = () => { 
      const surveyData = {
        title,
        titleContent,
        closedHeadCount,
        startTime,
        endTime,
        type,
        surveyTarget,
        img,
        questions: surveyComponents.map((component, index) => {
          const { componentKey, ...dataWithoutComponentKey } = surveyList[component.componentKey];
          return {
            ...dataWithoutComponentKey,
            questionNumber: index + 1 
            };
          })
          .filter(dataWithoutComponentKey => dataWithoutComponentKey !== undefined),
        }


        const Inner_hasEmptyValue = surveyData.questions.some((questionData : any, questionIndex : number) => {
          if (questionData.title === "" || questionData.type === "") {
              alert(`질문 ${questionIndex + 1}의 모든 필드를 채워주시기 바랍니다.`);
              return true;
          }
          if (questionData.multipleChoices) {
              const emptyChoiceIndex = questionData.multipleChoices.findIndex((choice : any) => choice.content === "");
              if (emptyChoiceIndex !== -1) {
                  alert(`질문 ${questionIndex + 1}의 선택지 ${emptyChoiceIndex + 1}의 내용을 채워주시기 바랍니다.`);
                  return true;
              }
          }           
          return false;
        });

        const Outer_hasEmptyValue =
          surveyData.title === "" ?
          alert("설문 제목을 입력해주세요.") :
          surveyData.closedHeadCount === 0 ?
          alert("설문 인원을 입력해주세요.") :
          surveyData.endTime === 0 ?
          alert("종료 시간을 선택해주세요.") :
          surveyData.startTime === 0 ?
          alert("시작 시간을 선택해주세요.") :
          (surveyData.surveyTarget === undefined || surveyData.surveyTarget.length === 0) ?
          alert("설문 대상을 선택해주세요.") :
          surveyData.type === "" ?
          alert("설문 유형을 선택해주세요.") :
          surveyData.startTime === "" ?
          alert("설문 시작 시간을 선택해주세요.") :
          surveyData.endTime === "" ?
          alert("설문 마감 시간을 선택해주세요.") :
          false;
      
      if (Inner_hasEmptyValue || Outer_hasEmptyValue) {
          return;
      } else {
        router.push(`/payment`);
      };


    };
    return (
        <StyledMidComp pathname={pathname}>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px",maxWidth : "600px"}} >
                <StyledTitleInput onChange={handleTitleChange} value={title} style={{minWidth : "600px",maxWidth : "600px"}}></StyledTitleInput>
                <StyledText>
                    <Image src='/survey/check.png' width={12} height={12} style={{ marginRight: "10px" }} alt="체크" />
                    모든 변경사항이 반영되었습니다.
                </StyledText>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="gray" label="임시저장" />
                </div>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="longYellow" label="생성하기" onClick={handleCreateButtonClick} />
                </div>
            </div>
        </StyledMidComp>
    );
};

export default MakesruveyComponent;