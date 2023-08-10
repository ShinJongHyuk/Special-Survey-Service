"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { Toggle_Component,Top_Option_Container } from './Makesurvey.styled';
import MakeQuestion from './components/makequestion';
import MakeSettings from './components/makesettings';


function MakeSurvey() {
  const [selectedOption, setSelectedOption] = useState('setting');
  const router = useRouter();
  const handleButtonClick = (option : any) => {
    setSelectedOption(option);
  };

  
  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        router.push('/login');
      };
    };
    checkLoginStatus();
  }, []);

  return (
    <>
      <Top_Option_Container>
        <Toggle_Component
          onClick={() => handleButtonClick('setting')}
          isSelected={selectedOption === 'setting'}
        >
          설정
        </Toggle_Component>
        <Toggle_Component
          onClick={() => handleButtonClick('question')}
          isSelected={selectedOption === 'question'}
        >
          설문
        </Toggle_Component>
      </Top_Option_Container>
      {selectedOption === 'setting' ? <MakeSettings /> : <MakeQuestion />}
    </>
  );
}


export default MakeSurvey;