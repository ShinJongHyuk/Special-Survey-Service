"use client";
import React from "react";
import { useState,useEffect } from "react";
import { StyledText, StyledMidComp, StyledTitleInput } from "../Navbar.styled";
import Image from "next/image";
import Button from "@/components/button";
import useSettingSurveyApiStore from "@/stores/makesurvey/useSettingSurveyApiStore";
import useMakeSurveyApiStore from "@/stores/makesurvey/useMakeSurveyApiStore";
import makeSurveyPost from "@/api/makesurvey/makeSurveyPost";
import giveawayListGet from "@/api/givawaylist/giveAwayListGet";
import useSurveyStore from "@/stores/makesurvey/useSurveyStore";

const MakesruveyComponent = (props: any) => {
    const pathname = props.pathname;
    const [giveawaydata,setGiveaWayData] = useState([])
    const {surveyList} = useMakeSurveyApiStore();
    const {surveyComponents} = useSurveyStore();

    useEffect(() => {
      const fetchList = async () => {
        const data = await giveawayListGet();
        setGiveaWayData(data);
        console.log("givaway :", data);
      };
      fetchList();
      
    }, []);
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
        giveaways : giveawaydata.map((item : any) => ({
          id : item.id,
          count : item.price
        }))
        };
        const Inner_hasEmptyValue = surveyData.questions.some((questionData : any) => {
           
            if (questionData.title === "" || questionData.content === "" || questionData.type === "") {
              return true;
            }
            if (questionData.multipleChoices) {
              return questionData.multipleChoices.some((choice : any) => choice.content === "");
            }           
            if (questionData.checkBox) {
              return questionData.checkBox.some((checkbox : any) => checkbox.content === "");
            }
            return false;
          });

        const Outer_hasEmptyValue =
            surveyData.title === "" ||
            surveyData.closedHeadCount === 0 ||
            surveyData.endTime === 0 ||
            surveyData.startTime === 0 ||
            (surveyData.surveyTarget === undefined || surveyData.surveyTarget.length === 0) ||
            surveyData.type === ""
        
        if (Inner_hasEmptyValue || Outer_hasEmptyValue) {
            alert("모든 필드를 채워주시기 바랍니다.");
            return;
        }
        console.log(surveyData)
        makeSurveyPost(surveyData)
   
        .then((responseData) => {
        console.log("설문 제출에 성공하였습니다:", responseData);
        })
        .catch((error) => {
        console.error("설문 제출에 실패하였습니다", error);
        });
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