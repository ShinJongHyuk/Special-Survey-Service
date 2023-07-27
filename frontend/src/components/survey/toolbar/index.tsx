import React, { useState } from 'react';
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
    const selectedSurvey = useStayStore((state: any) => state.selectedSurvey);
  
    const addSurveyComponent = () => {
      setSurveyComponents((prevComponents) => [...prevComponents, <Survey key={prevComponents.length} />]);
    };
    const handleSurveyClick = (surveyIndex: number) => {
      useStayStore.setState({ selectedSurvey: surveyIndex });
    };
    console.log(selectedSurvey);
    return (
      <ThemeProvider theme={theme}>
        {selectedSurvey !== null && (
          <ToolbarBox>
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
        )}
        {surveyComponents.map((component, index) => (
          <div key={index} onClick={() => handleSurveyClick(index)}>
            {component}
            <p>설문지 인덱스 : {index}</p>
          </div>
        ))}
      </ThemeProvider>
    );
  };
  
  export default Toolbar;