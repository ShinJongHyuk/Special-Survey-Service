import React,{useState,useEffect} from 'react';
import Toolbar from '@/components/survey/toolbar';
import {MarkText,Target_Button,Condition_Select_Container,Bottom_Type2_Container,Bottom_Type1_Container,Element_Bottom_Row_Container,Element_Detail_Title,Element_Input,Element_Title,Element_Top_Container,Element_Bottom_Container,Element_Detail_Inner_Container,Element_Detail_Container,Condition_Detail_Content,Condition_Detail_Title,Survey_Title_Container,Condition_Content,Condition_Inner_Container,Condition_Title, Survey_Container,Survey_Inner_Container,Survey_Detail_Container,Title_Inner_Container,Title_Content,Title_input } from './MakeSettings.Styled'; 
import List_Down from '/public/survey/List_Down.png'
import List_Up from '/public/survey/List_Up.png'
import Target from '/public/survey/Target.png'
import Calendar from '/public/survey/Calendar.png'
import People from '/public/survey/People.png'
import Category from '/public/survey/Category.png'
import Image from 'next/Image'
import useMakeSurveyApiStore, {MakeSurveyApiState} from '../../../stores/makesurvey/useMakeSurveyApiStore';


function MakeSettings() {
    const [conditionVisible, setConditionVisible] = useState(false); 
    const {
      title,
      setTitle,
      titleContent,
      setTitleContent,
      closedHeadCount,
      setClosedHeadCount,
      startTime,
      setStartTime,
      endTime,
      setEndTime,
      type,
      setType,
      surveyTarget,
      setSurveyTarget,
    } = useMakeSurveyApiStore(); 


    // 날짜 변환 함수
    function formatNumber(number : number) {
      return number.toString().padStart(2, '0');
    }

    const toggleCondition = () => {
      setConditionVisible(!conditionVisible);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);

    };
    const handleTitleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitleContent(event.target.value);
    };
    
    const handleClosedHeadCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const onlyNumber = value.replace(/[^0-9]/g, '');
      setClosedHeadCount(onlyNumber);
    };
    const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const parsedDate = new Date(value);
      const formattedDate = `${parsedDate.getFullYear()}-${formatNumber(parsedDate.getMonth() + 1)}-${formatNumber(parsedDate.getDate())} ${formatNumber(parsedDate.getHours())}:${formatNumber(parsedDate.getMinutes())}`;
      if (endTime) {
        const parsedStartTime = new Date(formattedDate);
        const parsedEndTime = new Date(endTime);
        if (parsedEndTime <= parsedStartTime) {
          alert("시작 시간보다 마감 시간이 빠릅니다.");
          return
        } else {
          setStartTime(formattedDate)
        }
      } else {
          setStartTime(formattedDate)
      }
    };

    const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const parsedDate = new Date(value);
      const formattedDate = `${parsedDate.getFullYear()}-${formatNumber(parsedDate.getMonth() + 1)}-${formatNumber(parsedDate.getDate())} ${formatNumber(parsedDate.getHours())}:${formatNumber(parsedDate.getMinutes())}`;

      if (startTime) {
        const parsedStartTime = new Date(startTime);
        const parsedEndTime = new Date(formattedDate);
        if (parsedEndTime <= parsedStartTime) {
          alert("시작 시간보다 마감 시간이 빠릅니다.");
          return
        } else {
          setEndTime(formattedDate)
        }
      } else {
        alert("시작 시간을 먼저 선택해주세요!");   
      }   
    };

    const handleButtonClick = (alt : any) => {
      setType(alt);
    };

    //하드 코딩,, 나중에 리팩토링
    const handleTargetButtonClick = (Category: string) => {
      if (Category === "GENDER_ALL") {

          if (surveyTarget) {
            if (surveyTarget.includes("MAN")) {
                setSurveyTarget("MAN")
            } 
            if (surveyTarget.includes("WOMAN")) {
              {
                setSurveyTarget("WOMAN")
              }
            }
            setSurveyTarget("MAN");
            setSurveyTarget("WOMAN");
          }
          else {
            setSurveyTarget("MAN");
            setSurveyTarget("WOMAN");
          }
        }
      else if (Category === "AGE_ALL") {
        if (surveyTarget) {
          if (surveyTarget.includes("UNDER_TEENS")) {
              setSurveyTarget("UNDER_TEENS")
          } 
          if (surveyTarget.includes("TEENS")) {
            {
              setSurveyTarget("TEENS")
            }
          }
          if (surveyTarget.includes("TWENTIES")) {
            {
              setSurveyTarget("TWENTIES")
            }
          }
          if (surveyTarget.includes("THIRTIES")) {
            {
              setSurveyTarget("THIRTIES")
            }
          }
          if (surveyTarget.includes("FORTIES")) {
            {
              setSurveyTarget("FORTIES")
            }
          }
          if (surveyTarget.includes("FIFTIES")) {
            {
              setSurveyTarget("FIFTIES")
            }
          }
          if (surveyTarget.includes("SIXTIES")) {
            {
              setSurveyTarget("SIXTIES")
            }
          }
          setSurveyTarget("UNDER_TEENS")
          setSurveyTarget("TEENS")
          setSurveyTarget("TWENTIES")
          setSurveyTarget("THIRTIES")
          setSurveyTarget("FORTIES")
          setSurveyTarget("FIFTIES")
          setSurveyTarget("SIXTIES")
        }
      } else {
        setSurveyTarget(Category);
      }
    }
    
    const isSelected = (selectedValues: any[] | undefined, currentValue: string): boolean => {
      if (selectedValues) {
        return selectedValues.includes(currentValue);
      }
      return false;
    };
    

    return (
      <Survey_Container>
        <Survey_Inner_Container>
          <Survey_Title_Container>
            <Title_Inner_Container>
                <Title_input onChange={handleTitleChange} value={title} />
                <Title_Content onChange={handleTitleContentChange} value={titleContent} />
            </Title_Inner_Container>
          </Survey_Title_Container>
          <Survey_Detail_Container>
            <Condition_Inner_Container>
              
              <Condition_Title>
                설문 조건
                <Image src={conditionVisible ? List_Up : List_Down} style={{cursor : 'pointer'}} alt="리스트 열림 닫힘" onClick={toggleCondition} />
              </Condition_Title>
            </Condition_Inner_Container>
            {conditionVisible && (
              <>
             <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={People} alt="인원" style={{marginRight : "12px"}} />
                  설문 인원
                </Condition_Detail_Title>
             </Condition_Detail_Content>

             <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                    <Element_Top_Container>
                        <Element_Title><MarkText>설문 인원을 작성해 주세요! (숫자만 기입)</MarkText></Element_Title>

                    </Element_Top_Container>
                    <Element_Bottom_Container>
                    <Element_Input value={closedHeadCount} onChange={handleClosedHeadCountChange} />
                   
                    </Element_Bottom_Container>
                </Element_Detail_Inner_Container>
             </Element_Detail_Container>

             <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={Target} alt="타겟" style={{marginRight : "12px"}} />
                  설문 대상
                  </Condition_Detail_Title>


              </Condition_Detail_Content>
              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                      <Element_Top_Container>
                          <Element_Title><MarkText>설문 대상을 선택해 주세요! (복수 응답 가능)</MarkText></Element_Title>
                      </Element_Top_Container>
                      <Element_Bottom_Container>
                        <Element_Detail_Title>성별</Element_Detail_Title>
                          <Condition_Select_Container>
                                <Target_Button selected={isSelected(surveyTarget, "MAN")} surveyTarget={"MAN"} onClick={() => handleTargetButtonClick("MAN")}>
                                  남성 
                                </Target_Button>
                                <Target_Button selected={isSelected(surveyTarget, "WOMAN")} surveyTarget={"WOMAN"} onClick={() => handleTargetButtonClick("WOMAN")}>
                                  여성
                                </Target_Button>
                                <Target_Button selected={isSelected(surveyTarget, "GENDER_ALL")} surveyTarget={"GENDER_ALL"} onClick={() => handleTargetButtonClick("GENDER_ALL")}>
                                  성별 무관
                                </Target_Button>
                          </Condition_Select_Container>
                        <Element_Detail_Title>나이</Element_Detail_Title>
                          <Condition_Select_Container>
                            <Target_Button selected={isSelected(surveyTarget, "UNDER_TEENS")} surveyTarget={"UNDER_TEENS"} onClick={() => handleTargetButtonClick("UNDER_TEENS")}>
                              10세 이하
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "TEENS")} surveyTarget={"TEENS"} onClick={() => handleTargetButtonClick("TEENS")}>
                              10대
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "TWENTIES")} surveyTarget={"TWENTIES"} onClick={() => handleTargetButtonClick("TWENTIES")}>
                              20대
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "THIRTIES")} surveyTarget={"THIRTIES"} onClick={() => handleTargetButtonClick("THIRTIES")}>
                              30대
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "FORTIES")} surveyTarget={"FORTIES"} onClick={() => handleTargetButtonClick("FORTIES")}>
                              40대
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "FIFTIES")} surveyTarget={"FIFTIES"} onClick={() => handleTargetButtonClick("FIFTIES")}>
                              50대
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "SIXTIES")} surveyTarget={"SIXTIES"} onClick={() => handleTargetButtonClick("SIXTIES")}>
                              60대 이상
                            </Target_Button>
                            <Target_Button selected={isSelected(surveyTarget, "AGE_ALL")} surveyTarget={"AGE_ALL"} onClick={() => handleTargetButtonClick("AGE_ALL")}>
                              나이 무관
                            </Target_Button>
                          </Condition_Select_Container>
                      </Element_Bottom_Container>
                  </Element_Detail_Inner_Container>
             </Element_Detail_Container>
             <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={Category} alt="유형" style={{marginRight : "12px"}} />
                  설문 유형
                  </Condition_Detail_Title>
              </Condition_Detail_Content>
              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                      <Element_Top_Container>
                          <Element_Title><MarkText>설문 유형을 선택해 주세요! (단일 선택)</MarkText></Element_Title>
                          
                      </Element_Top_Container>
                      <Element_Bottom_Row_Container>
                        <Bottom_Type1_Container selected={type} onClick={() => handleButtonClick("NORMAL")}>
                          <Image src="/card/whatshot.svg" width={50} height={50} alt="NORMAL" />
                          타임어택
                        </Bottom_Type1_Container>
                        <Bottom_Type2_Container selected={type} onClick={() => handleButtonClick("INSTANT_WIN"
                        )}>
                          <Image src="/card/bolt.svg" width={50} height={50} alt="instant" />
                          즉시당첨
                        </Bottom_Type2_Container>
                      </Element_Bottom_Row_Container>
                  </Element_Detail_Inner_Container>
             </Element_Detail_Container>
             <Condition_Detail_Content>
                <Condition_Detail_Title>
                  <Image src={Calendar} alt="기간" style={{marginRight : "12px"}} />
                  설문 기간
                  </Condition_Detail_Title>
              </Condition_Detail_Content>
              <Element_Detail_Container>
                <Element_Detail_Inner_Container>
                      <Element_Top_Container>
                          <Element_Title><MarkText>설문 기간을 작성해주세요! (숫자만 기입)</MarkText></Element_Title>
                      </Element_Top_Container>
                      <Element_Bottom_Container>
                        <Element_Detail_Title>시작</Element_Detail_Title>
                        <Element_Input type={'datetime-local'} value={startTime} onChange={handleStartTimeChange} />
                        <hr/>
                        <Element_Detail_Title>마감</Element_Detail_Title>
                        <Element_Input type={'datetime-local'} value={endTime} onChange={handleEndTimeChange} />
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

export default MakeSettings
