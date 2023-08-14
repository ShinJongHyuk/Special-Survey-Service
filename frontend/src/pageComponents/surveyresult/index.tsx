'use client'
import React, { useState, useEffect } from 'react';
import { Toggle_Component,Top_Option_Container, StyledTag, Top_Option } from './SurveyResult.styled';
import Question from './components/question';
import Statistics from './components/statistics';
import PaymentInfo from './components/paymentinfo';
import { useSurveyAnswerHook } from '@/Hooks/useSurveyAnswerHook';
import Image from 'next/image';
import moment from 'moment';
import surveyResultGet from '@/api/surveyresult/surveyResultGet';
import { useSurveyResultHook } from '@/Hooks/useSurveyResultHook';

function SurveyResult(props : any) {
  const [selectedOption, setSelectedOption] = useState('Statistics');
  const { surveyResult, getSurveyResult } = useSurveyResultHook()
  const handleButtonClick = (option : any) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    getSurveyResult(props.id)
  },[])
  
  // useEffect(() => {
  //   if (surveyResult) {
  //     console.log(surveyResult)
  //   }
  // },[surveyResult])


  return (
    <>
      <Top_Option_Container>
        {/* <Toggle_Component
          onClick={() => handleButtonClick('question')}
          isSelected={selectedOption === 'question'}
        >
          질문
        </Toggle_Component> */}
        <Toggle_Component
          onClick={() => handleButtonClick('Statistics')}
          isSelected={selectedOption === 'Statistics'}
          type={surveyResult?.surveyCategoryType}
        >
          <Top_Option>응답</Top_Option>
          
            <StyledTag {...surveyResult}>
            {surveyResult?.surveyCategoryType === "NORMAL" ? (
              <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
            ) : (
              <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
            )}
          <div className="type-text">{surveyResult?.headCount}</div>
      </StyledTag>
        </Toggle_Component>
        <Toggle_Component
          onClick={() => handleButtonClick('PaymentInfo')}
          isSelected={selectedOption === 'PaymentInfo'}
          type={surveyResult?.surveyCategoryType}
        >
          <Top_Option>결제 정보</Top_Option>
        </Toggle_Component>
      </Top_Option_Container>
      {selectedOption === 'question' ? <Question /> :
       selectedOption === 'Statistics' ? <Statistics 
       surveyCategoryType={surveyResult?.surveyCategoryType} 
       questions={surveyResult?.questions} 
       questionAnswers={surveyResult?.questionAnswers}
       title={surveyResult?.title}
       content={surveyResult?.content}/> :
       selectedOption === 'PaymentInfo' ? <PaymentInfo /> : null }
    </>
  );
}


export default SurveyResult;