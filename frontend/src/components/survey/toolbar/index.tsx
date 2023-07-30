import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import theme from '@/styles/DefaultTheme';
import Image from 'next/image';
import { ToolbarBox, Toolbar_InnerBox } from './Toolbar.styled';
import add from '../../../../public/survey/add.png';
import up_arrow from '../../../../public/survey/up_arrow.png';
import down_arrow from '../../../../public/survey/down_arrow.png';
import Survey from '../../survey';
import useStayStore from '@/stores/useStayStore';

const Toolbar = () => {
  const [surveyComponents, setSurveyComponents] = useState<any[]>([]);
  const { selectedSurvey, prevSelectedSurvey, setSelectedSurvey } = useStayStore();
  const componentRefs = useRef<any[]>([]);
  const [height, setHeight] = useState<any>(null); 

  useEffect(() => {
    componentRefs.current = surveyComponents.map(() => React.createRef());
  }, [surveyComponents]);


  useEffect(() => {
    setHeight(calculateHeight());
  }, [selectedSurvey]);
  
  const calculateHeight = () => {
    let Height = 0;
    for (let i = 0; i < selectedSurvey-1; i++) {
      const componentRef = componentRefs.current[i];
      Height += componentRef?.current?.clientHeight ?? 0;
    }
    return Height;
  };

  const addSurveyComponent = () => {
    setSurveyComponents((prevComponents) => [...prevComponents, <Survey key ={uuidv4()} componentKey={uuidv4()}/>]);
  };

  const handleSurveyClick = (surveyIndex: number) => {
    setSelectedSurvey(surveyIndex);
    
  };

  const handleUpArrowClick = async () => {
    if (selectedSurvey > 1) {
      const selectedKey = surveyComponents[selectedSurvey - 1]?.key;
      const updatedComponents = surveyComponents.filter((component) => component.key !== selectedKey
      );
      
      await setSurveyComponents(updatedComponents);

      if (surveyComponents.length <= selectedSurvey) {
        await setSelectedSurvey(selectedSurvey-1);
      } else {
        await setSelectedSurvey(selectedSurvey);
      }
      
    } else if (selectedSurvey === 1) {
      const updatedComponents = [...surveyComponents];
      updatedComponents?.splice(0, 1);    
      await setSurveyComponents(updatedComponents);
      await setSelectedSurvey(1);
    }

  };


  return (
    <ThemeProvider theme={theme}>
      <ToolbarBox height={height}>
        <Toolbar_InnerBox>
          <Image src={add} alt="추가" onClick={addSurveyComponent} />
        </Toolbar_InnerBox>
        <Toolbar_InnerBox>
        
        </Toolbar_InnerBox>
        <Toolbar_InnerBox>
        <Image src={up_arrow} alt="위 화살표" onClick={handleUpArrowClick} />
        </Toolbar_InnerBox>
      </ToolbarBox>
      {surveyComponents.map((component, index) => (
        <div ref={componentRefs.current[index]} key={index} onClick={() => handleSurveyClick(1 + index)}>
          {component}
        </div>
      ))}
    </ThemeProvider>
  );
};

export default Toolbar;