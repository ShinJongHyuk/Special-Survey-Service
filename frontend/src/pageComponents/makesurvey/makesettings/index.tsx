import React, { useState, useEffect } from "react";
import Toolbar from "@/components/survey/toolbar";
import {
  MarkText,
  Age_Button,
  Gender_Button,
  Condition_Select_Container,
  Bottom_Type2_Container,
  Bottom_Type1_Container,
  Element_Bottom_Row_Container,
  Element_Detail_Title,
  Element_Input,
  Element_Title,
  Element_Top_Container,
  Element_Bottom_Container,
  Element_Detail_Inner_Container,
  Element_Detail_Container,
  Condition_Detail_Content,
  Condition_Detail_Title,
  Survey_Title_Container,
  Condition_Content,
  Condition_Inner_Container,
  Condition_Title,
  Survey_Container,
  Survey_Inner_Container,
  Survey_Detail_Container,
  Title_Inner_Container,
  Title_Content,
  Title_input,
} from "./MakeSettings.Styled";
import List_Down from "/public/survey/List_Down.png";
import List_Up from "/public/survey/List_Up.png";
import Target from "/public/survey/Target.png";
import Calendar from "/public/survey/Calendar.png";
import People from "/public/survey/People.png";
import Category from "/public/survey/Category.png";
import Image from "next/image";
import axios from "axios";

function MakeSettings() {
  const [titleText, setTitleText] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [conditionText, setConditionText] = useState("");
  const [conditionContent, setConditionContent] = useState("");
  const [conditionVisible, setConditionVisible] = useState(false);
  const [headCount, setHeadCount] = useState("");
  const [startSurvey, setStartSurvey] = useState("");
  const [endSurvey, setEndSurvey] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const [genderSelected, setGenderSelected] = useState("");
  const [ageSelected, setAgeSelected] = useState("");

  const toggleCondition = () => {
    setConditionVisible(!conditionVisible);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(event.target.value);
  };
  const handleTitleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleContent(event.target.value);
  };
  const handleConditionTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConditionText(event.target.value);
  };

  const handleConditionContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConditionContent(event.target.value);
  };
  const handleHeadCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadCount(event.target.value);
  };
  const handleStartSurveyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartSurvey(event.target.value);
  };

  const handleEndSurveyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndSurvey(event.target.value);
  };
  const handleButtonClick = (alt: any) => {
    setSelectedButton(alt);
  };
  const handleGenderButtonClick = (gender: any) => {
    setGenderSelected(gender);
  };
  const handleAgeButtonClick = (ageCategory: any) => {
    setAgeSelected(ageCategory);
  };

  return (
    <Survey_Container>
      <Survey_Inner_Container>
        <Survey_Title_Container>
          <Title_Inner_Container>
            <Title_input onChange={handleTitleChange} value={titleText} />
            <Title_Content onChange={handleTitleContentChange} value={titleContent} />
          </Title_Inner_Container>
        </Survey_Title_Container>
        <Survey_Detail_Container>
          <Condition_Inner_Container>
            <Condition_Title>
              설문 조건
              <Image src={conditionVisible ? List_Up : List_Down} style={{ cursor: "pointer" }} alt="리스트 열림 닫힘" onClick={toggleCondition} />
            </Condition_Title>
          </Condition_Inner_Container>
          {conditionVisible && (
            <>
              <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={People} alt="인원" style={{ marginRight: "12px" }} />
                  설문 인원
                </Condition_Detail_Title>
              </Condition_Detail_Content>

              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                  <Element_Top_Container>
                    <Element_Title>
                      <MarkText>설문 인원을 작성해 주세요! (숫자만 기입)</MarkText>
                    </Element_Title>
                  </Element_Top_Container>
                  <Element_Bottom_Container>
                    <Element_Input value={headCount} onChange={handleHeadCountChange} />
                  </Element_Bottom_Container>
                </Element_Detail_Inner_Container>
              </Element_Detail_Container>

              <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={Target} alt="타겟" style={{ marginRight: "12px" }} />
                  설문 대상
                </Condition_Detail_Title>
              </Condition_Detail_Content>
              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                  <Element_Top_Container>
                    <Element_Title>
                      <MarkText>설문 대상을 선택해 주세요! (복수 응답 가능)</MarkText>
                    </Element_Title>
                  </Element_Top_Container>
                  <Element_Bottom_Container>
                    <Element_Detail_Title>성별</Element_Detail_Title>
                    <Condition_Select_Container>
                      <Gender_Button gender="MAN" genderSelected={genderSelected} onClick={handleGenderButtonClick}>
                        남성
                      </Gender_Button>
                      <Gender_Button gender="WOMAN" genderSelected={genderSelected} onClick={handleGenderButtonClick}>
                        여성
                      </Gender_Button>
                      <Gender_Button gender="Gender_All" genderSelected={genderSelected} onClick={handleGenderButtonClick}>
                        성별 무관
                      </Gender_Button>
                    </Condition_Select_Container>
                    <Element_Detail_Title>나이</Element_Detail_Title>
                    <Condition_Select_Container>
                      <Age_Button ageCategory="UNDER_TEENS" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        10세 이하
                      </Age_Button>
                      <Age_Button ageCategory="TEENS" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        10대
                      </Age_Button>
                      <Age_Button ageCategory="TWENTIES" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        20대
                      </Age_Button>
                      <Age_Button ageCategory="THIRTIES" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        30대
                      </Age_Button>
                      <Age_Button ageCategory="FORTIES" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        40대
                      </Age_Button>
                      <Age_Button ageCategory="FIFTIES" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        50대
                      </Age_Button>
                      <Age_Button ageCategory="SIXTIES" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        60대 이상
                      </Age_Button>
                      <Age_Button ageCategory="Age_All" ageSelected={ageSelected} onClick={handleAgeButtonClick}>
                        나이 무관
                      </Age_Button>
                    </Condition_Select_Container>
                  </Element_Bottom_Container>
                </Element_Detail_Inner_Container>
              </Element_Detail_Container>
              <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={Category} alt="유형" style={{ marginRight: "12px" }} />
                  설문 유형
                </Condition_Detail_Title>
              </Condition_Detail_Content>
              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                  <Element_Top_Container>
                    <Element_Title>
                      <MarkText>설문 유형을 선택해 주세요! (단일 선택)</MarkText>
                    </Element_Title>
                  </Element_Top_Container>
                  <Element_Bottom_Row_Container>
                    <Bottom_Type1_Container selected={selectedButton} onClick={() => handleButtonClick("whatshot")}>
                      <Image src="/card/whatshot.svg" width={50} height={50} alt="whatshot" />
                      타임어택
                    </Bottom_Type1_Container>
                    <Bottom_Type2_Container selected={selectedButton} onClick={() => handleButtonClick("instant")}>
                      <Image src="/card/bolt.svg" width={50} height={50} alt="instant" />
                      즉시당첨
                    </Bottom_Type2_Container>
                  </Element_Bottom_Row_Container>
                </Element_Detail_Inner_Container>
              </Element_Detail_Container>
              <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={Calendar} alt="기간" style={{ marginRight: "12px" }} />
                  설문 기간
                </Condition_Detail_Title>
              </Condition_Detail_Content>
              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                  <Element_Top_Container>
                    <Element_Title>
                      <MarkText>설문 기간을 작성해주세요! (숫자만 기입)</MarkText>
                    </Element_Title>
                  </Element_Top_Container>
                  <Element_Bottom_Container>
                    <Element_Detail_Title>시작</Element_Detail_Title>
                    <Element_Input type={"datetime-local"} value={startSurvey} onChange={handleStartSurveyChange} />
                    <hr />
                    <Element_Detail_Title>마감</Element_Detail_Title>
                    <Element_Input type={"datetime-local"} value={endSurvey} onChange={handleEndSurveyChange} />
                  </Element_Bottom_Container>
                </Element_Detail_Inner_Container>
              </Element_Detail_Container>
            </>
          )}
        </Survey_Detail_Container>
      </Survey_Inner_Container>
    </Survey_Container>
  );
}

export default MakeSettings;
