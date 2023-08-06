import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import theme from '@/styles/DefaultTheme';
import Image from 'next/image';
import { ToolbarBox, Toolbar_InnerBox } from './Toolbar.styled';
import plus from '../../../../public/survey/plus.svg';
import minus from '../../../../public/survey/minus.svg';
import duplicate from '../../../../public/survey/duplicate.svg'
import Survey from '../../survey';
import useSurveyFocusStore from '@/stores/makesurvey/useSurveyFocusStore';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import useMakeSurveyApiStore from '@/stores/makesurvey/useMakeSurveyApiStore';

const Toolbar = () => {
  const {surveyComponents, setSurveyComponents } = useSurveyStore();
  const {surveyList,setSurveyList,removeSurveyItem} = useMakeSurveyApiStore();
  const { selectedSurvey, prevSelectedSurvey, setSelectedSurvey } = useSurveyFocusStore();
  const componentRefs = useRef<any[]>([]);
  const [height, setHeight] = useState<any>(null); 
  const [index,setIndex] = useState(0);
  useEffect(() => {
    componentRefs.current = surveyComponents.map(() => React.createRef());
  }, [surveyComponents]);

  
  useEffect(() => {
    setHeight(calculateHeight());
  }, [selectedSurvey]);
  
  const calculateHeight = () => {
    let Height = 300;
    for (let i = 0; i < selectedSurvey-1; i++) {
      const componentRef = componentRefs.current[i];
      Height += componentRef?.current?.clientHeight ?? 0;
    }
    return Height;
  };

  const handlePlusClick = () => {
    const newComponentKey = uuidv4();
    const newComponent: any = {
      componentKey: newComponentKey,
      key: newComponentKey,
      index : index+1,
    };
    setSurveyComponents([...surveyComponents, newComponent]);
    setIndex(index);
  };

  const handleSurveyClick = (surveyIndex: number) => {
    setSelectedSurvey(surveyIndex);
    
  };

  const handleMinusClick = async () => {
    if (selectedSurvey > 1) {
      const selectedKey = surveyComponents[selectedSurvey - 1]?.key;
      const updatedComponents = surveyComponents.filter((component) => component.key !== selectedKey);

      
      await setSurveyComponents(updatedComponents);
      await removeSurveyItem(selectedKey)
      await setSelectedSurvey(selectedSurvey-1);

      
    } else if (selectedSurvey === 1) {
      const selectedKey = surveyComponents[0]?.key;
      const updatedComponents = [...surveyComponents];
      updatedComponents?.splice(0, 1);    

      await setSurveyComponents(updatedComponents);
      await setSelectedSurvey(1)
      await removeSurveyItem(selectedKey); 
    }

  };

  const duplicateSurveyComponent = () => {
    const selectedComponent = surveyComponents[selectedSurvey - 1];
    if (selectedComponent) {
      const newComponentKey = uuidv4();
  
      const localStorageData = localStorage.getItem(selectedComponent.componentKey);
      let surveyState = '';
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        surveyState = parsedData.surveyState;
        localStorage.setItem(newComponentKey, JSON.stringify(parsedData));
      }

      const innerContent = duplicateInnerContent(selectedComponent.componentKey, newComponentKey,surveyState);

      const duplicatedComponent = {
        ...selectedComponent,
        componentKey: newComponentKey,
        key: newComponentKey,
      };
  
      const updatedComponents = [...surveyComponents];
      updatedComponents.splice(selectedSurvey, 0, duplicatedComponent);

      setSurveyComponents(updatedComponents);
      setSelectedSurvey(selectedSurvey);
    }
  };
  
  const duplicateInnerContent = (originalComponentKey : string, newComponentKey : string, surveyState : string) => {
    const originalLocalStorageKey = `${surveyState}_${surveyState}_${originalComponentKey}`;
    const newLocalStorageKey = `${surveyState}_${surveyState}_${newComponentKey}`;
    const localStorageData = localStorage.getItem(originalLocalStorageKey);
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      localStorage.setItem(newLocalStorageKey, JSON.stringify(parsedData));
    }
  };

  return (
    < >
      <ToolbarBox height={height}>
      <Toolbar_InnerBox>
        <Image src={plus} alt="추가" onClick={handlePlusClick} style={{ cursor: 'pointer' }} />
        </Toolbar_InnerBox>
        <Toolbar_InnerBox>
        <Image src={minus} alt="삭제" onClick={handleMinusClick} style={{ cursor: 'pointer' }} />
        </Toolbar_InnerBox>
        <Toolbar_InnerBox>
          <Image src={duplicate} width={22} height={22} alt="복제" onClick={duplicateSurveyComponent} style={{ cursor: 'pointer' }}/>
        </Toolbar_InnerBox>
      </ToolbarBox>
      {surveyComponents && surveyComponents.map((component, index) => (
        <div ref={componentRefs.current[index]} key={index} onClick={() => handleSurveyClick(1 + index)}>
          <Survey componentKey={component.componentKey} key={component.key} index={index} />
        </div>
      ))}
    </>
  );
};

export default Toolbar;