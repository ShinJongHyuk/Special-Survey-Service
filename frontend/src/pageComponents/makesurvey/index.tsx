import React, { useState, useEffect } from 'react';
import { Toggle_Component,Top_Option_Container } from './Makesurvey.styled';
import MakeQuestion from './makequestion';
import MakeSettings from './makesettings';


function MakeSurvey() {
  const [selectedOption, setSelectedOption] = useState('question');
  const handleButtonClick = (option : any) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Top_Option_Container>
        {/* 선택된 옵션에 따라 isSelected prop 값 설정 */}
        <Toggle_Component
          onClick={() => handleButtonClick('setting')}
          isSelected={selectedOption === 'setting'}
        >
          Setting
        </Toggle_Component>
        <Toggle_Component
          onClick={() => handleButtonClick('question')}
          isSelected={selectedOption === 'question'}
        >
          Question
        </Toggle_Component>
      </Top_Option_Container>

      {/* 선택된 옵션에 따라 해당 컴포넌트 렌더링 */}
      {selectedOption === 'setting' ? <MakeSettings /> : <MakeQuestion />}
    </>
  );
}


export default MakeSurvey;