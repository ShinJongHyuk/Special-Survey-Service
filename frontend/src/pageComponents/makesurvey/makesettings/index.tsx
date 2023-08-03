import React,{useState,useEffect} from 'react';
import Toolbar from '@/components/survey/toolbar';
import {Element_Detail_Title,Element_Input,Element_Title,Element_Top_Container,Element_Bottom_Container,Element_Detail_Inner_Container,Element_Detail_Container,Condition_Detail_Content,Condition_Detail_Title,Survey_Title_Container,Condition_Content,Condition_Inner_Container,Condition_Title, Survey_Container,Survey_Inner_Container,Survey_Detail_Container,Title_Inner_Container,Title_Content,Title_input } from './MakeSettings.Styled'; 
import List_Down from '/public/survey/List_Down.png'
import List_Up from '/public/survey/List_Up.png'
import Target from '/public/survey/Target.png'
import Calendar from '/public/survey/Calendar.png'
import People from '/public/survey/People.png'
import Category from '/public/survey/Category.png'
import Image from 'next/Image'
import Input from '@/components/input';
import axios from 'axios'
import { start } from 'repl';

function MakeSettings() {
    const [titleText,setTitleText] = useState('')
    const [titleContent,setTitleContent] = useState('')
    const [conditionText, setConditionText] = useState('');
    const [conditionContent, setConditionContent] = useState('');
    const [conditionVisible, setConditionVisible] = useState(false); 
    const [headCount,setHeadCount] = useState('');
    const [startSurvey,setStartSurvey] = useState('');
    const [endSurvey,setEndSurvey] = useState('');

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
    console.log(startSurvey,endSurvey)
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
                        <Element_Title>설문 인원을 작성해 주세요! (숫자만 기입)</Element_Title>
                    </Element_Top_Container>
                    <Element_Bottom_Container>
                    <Element_Input value={headCount} onChange={handleHeadCountChange} />
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
                          <Element_Title>설문 대상을 선택해 주세요! (복수 선택 가능)</Element_Title>
                      </Element_Top_Container>
                      <Element_Bottom_Container>
                          <Element_Input value={headCount} onChange={handleHeadCountChange} />
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
                          <Element_Title>설문 유형을 선택해 주세요! (단일 선택)</Element_Title>
                      </Element_Top_Container>
                      <Element_Bottom_Container>
                         
                      </Element_Bottom_Container>
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
                          <Element_Title>설문 기간을 작성해주세요! (숫자만 기입)</Element_Title>
                      </Element_Top_Container>
                      <Element_Bottom_Container>
                        <Element_Detail_Title>시작</Element_Detail_Title>
                        <Element_Input type={'datetime-local'} value={startSurvey} onChange={handleStartSurveyChange} />
                        <hr/>
                        <Element_Detail_Title>마감</Element_Detail_Title>
                        <Element_Input type={'datetime-local'} value={endSurvey} onChange={handleEndSurveyChange} />
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