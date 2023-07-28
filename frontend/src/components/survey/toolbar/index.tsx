import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/DefaultTheme';
import Image from 'next/image';
import { ToolbarBox, Toolbar_InnerBox } from './Toolbar.styled';
import add from '../../../../public/survey/add.png';
import image_toolbar from '../../../../public/survey/image_toolbar.png';
import video from '../../../../public/survey/video.png';
import Survey from '../../survey';
import useStayStore from '@/stores/useStayStore';

const Toolbar = () => {
  const [surveyComponents, setSurveyComponents] = useState<any[]>([]);
  const { selectedSurvey, prevSelectedSurvey, surveyLength, setSelectedSurvey } = useStayStore();
  const componentRefs = useRef<any[]>([]);
  const [height, setHeight] = useState<any>(null); 

  useEffect(() => {
    componentRefs.current = surveyComponents.map(() => React.createRef());
  }, [surveyComponents]);

  
  useEffect(() => {
    let Height = 0;
    for (let i = 0; i < selectedSurvey; i++) {
      const componentRef = componentRefs.current[i];
      Height += componentRef?.current?.clientHeight ?? 0;
    }
    setHeight(Height);
  }, [selectedSurvey]);


  const addSurveyComponent = () => {
    setSurveyComponents((prevComponents) => [...prevComponents, <Survey key={prevComponents.length} />]);
  };

  const handleSurveyClick = (surveyIndex: number) => {
    setSelectedSurvey(surveyIndex);
  };


  return (
    <ThemeProvider theme={theme}>
      <ToolbarBox height={height}>
        <Toolbar_InnerBox>
          <Image src={add} alt="추가" onClick={addSurveyComponent} />
        </Toolbar_InnerBox>
        <Toolbar_InnerBox>
          <Image src={image_toolbar} alt="이미지" />
        </Toolbar_InnerBox>
        <Toolbar_InnerBox>
          <Image src={video} alt="비디오" />
        </Toolbar_InnerBox>
      </ToolbarBox>
      {surveyComponents.map((component, index) => (
        <div ref={componentRefs.current[index]} key={index} onClick={() => handleSurveyClick(surveyLength + index)}>
          {component}
        </div>
      ))}
    </ThemeProvider>
  );
};

export default Toolbar;