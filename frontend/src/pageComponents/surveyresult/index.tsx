import React, { useState, useEffect } from 'react';
import { Toggle_Component,Top_Option_Container } from './SurveyResult.styled';
import Question from './components/question';
import Statistics from './components/statistics';
import Payment from './components/payment';
import { useSurveyAnswerHook } from '@/Hooks/useSurveyAnswerHook';

function SurveyResult(props : any) {
  const [selectedOption, setSelectedOption] = useState('question');
  const { surveyInformation, getSurveyQuestion } = useSurveyAnswerHook()
  const handleButtonClick = (option : any) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Top_Option_Container>
        <Toggle_Component
          onClick={() => handleButtonClick('question')}
          isSelected={selectedOption === 'question'}
        >
          질문
        </Toggle_Component>
        <Toggle_Component
          onClick={() => handleButtonClick('Statistics')}
          isSelected={selectedOption === 'Statistics'}
        >
          응답
        </Toggle_Component>
        <Toggle_Component
          onClick={() => handleButtonClick('payment')}
          isSelected={selectedOption === 'payment'}
        >
          결제 정보
        </Toggle_Component>
      </Top_Option_Container>
      {selectedOption === 'question' ? <Question /> :
       selectedOption === 'Statistics' ? <Statistics /> :
       selectedOption === 'payment' ? <Payment /> : null }
    </>
  );
}


export default SurveyResult;