import React, {useState,useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '@/styles/DefaultTheme'
import {Move_Container,ImageWrapper,Essential_Question_Title,LinkSelectBox,LinkSelect_List,LinkSelect_Option,Link_Question_Title,Essential_Question_Box,Elements_Box,Link_Question_Box,Bottom_Box, Question_Inner_Container,SelectBox_Option,SelectBox_List,SelectBox,Main_Container,Question_Container
    ,Question_Header,Question_Header_Container,
    Question_Content,Question_Content_Container,
    CheckBox_Input,CheckBox_Label,CheckBox_Switch} from '@/components/survey/Survey.styled';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import SurveyType from './Survey.type';
import Image from 'next/image'
import etc from '/public/survey/etc.png'
import DragIcon from '/public/survey/DragIcon.png'
import MultipleChoice from './multiplechoice';
import CheckBox from './checkbox';
import DropDown from './dropdown';
import Dates from './dates';
import Time from './time';

const SurveyComponent = ({ componentKey, index }: { componentKey: string, index: number }) => {
    const {surveyComponents} = useSurveyStore();
    const [surveyState,setSurveyState] = useState('multiplechoice')
    const [selectedOption, setSelectedOption] = useState(''); 
    const [listOption, setListOption] = useState(false);
    const [checked, setChecked] = useState(false); 
    const [headerText, setHeaderText] = useState('');
    const [headerDetailText, setHeaderDetailText] = useState('');

    const saveComponentDataToLocalStorage = (componentKey: string, data: any) => {
        localStorage.setItem(componentKey, JSON.stringify(data));
      };

    const loadComponentDataFromLocalStorage = (componentKey: string) => {
        const storedData = localStorage.getItem(componentKey);
        return storedData ? JSON.parse(storedData) : null;
      };

    useEffect(() => {
        const storedData = loadComponentDataFromLocalStorage(componentKey);
        if (storedData) {
          setSurveyState(storedData.surveyState);
          setSelectedOption(storedData.selectedOption);
          setChecked(storedData.checked);
          setHeaderText(storedData.headerText);
          setHeaderDetailText(storedData.headerDetailText)
          setListOption(storedData.listOption)
        }
      }, [componentKey]);

    useEffect(() => {
        const componentData = {
          surveyState,
          selectedOption,
          checked,
          headerText,
          headerDetailText,
          listOption,
          
        };
        saveComponentDataToLocalStorage(componentKey, componentData);
      }, [surveyState, selectedOption, checked,headerText,headerDetailText,listOption]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    };
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
      setSurveyState(event.target.value);
    };

    const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeaderText(event.target.value);
      };
    
    const handleHeaderDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeaderDetailText(event.target.value);
      };

    const LinkOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setListOption((prevOption) => !prevOption);
    };
      
    return (
        <ThemeProvider theme={theme}>
            <Main_Container>
                <ImageWrapper>
                  <Image src={DragIcon} alt="옮기기" />
                </ImageWrapper>
                <Question_Inner_Container>
                    <Question_Container>
                        <Question_Header_Container>
                            <Question_Header onChange={handleHeaderChange} value={headerText} index={index}/>
                        </Question_Header_Container>            
                        <Question_Content_Container>
                            <Question_Content onChange={handleHeaderDetailChange} value={headerDetailText} index={index} />
                        </Question_Content_Container>
                    </Question_Container>
                    <SelectBox>
                            <SelectBox_List onChange={handleOptionChange} value={selectedOption}>
                                <SelectBox_Option value="multiplechoice">객관식 답변</SelectBox_Option>
                                <SelectBox_Option value="checkbox">체크 박스</SelectBox_Option>
                                <SelectBox_Option value="dropdown">드롭 다운</SelectBox_Option>
                                <SelectBox_Option value="dates">날짜 선택</SelectBox_Option>
                                <SelectBox_Option value="time">시간 선택</SelectBox_Option>
                            </SelectBox_List>
                    </SelectBox>
                </Question_Inner_Container>
                {surveyState === 'multiplechoice' && <MultipleChoice componentKey={componentKey} isLink={listOption} />}
                {surveyState === 'checkbox' && <CheckBox componentKey={componentKey} isLink={listOption} />}
                {surveyState === 'dropdown' && <DropDown componentKey={componentKey} isLink={listOption} />}
                {surveyState === 'dates' && <Dates componentKey={componentKey}/>}
                {surveyState === 'time' && <Time componentKey={componentKey} />}
                        
                <hr/>
                <Bottom_Box>
                    <Link_Question_Box>
                        <Link_Question_Title>연계 질문 여부</Link_Question_Title>
                        <LinkSelectBox>
                            <LinkSelect_List value={listOption ? 'true' : 'false'} onChange={LinkOptionChange}>
                                <LinkSelect_Option value='false'>X</LinkSelect_Option>
                                <LinkSelect_Option value='true'>O</LinkSelect_Option>
                            </LinkSelect_List>
                        </LinkSelectBox>
                    </Link_Question_Box>
                    <Elements_Box>
                        <ImageWrapper>
                        </ImageWrapper>
                            <Image src={etc} alt="etc"></Image>
                        </Elements_Box>
                    <Essential_Question_Box>
                        <Essential_Question_Title>필수 여부</Essential_Question_Title>
                        <CheckBox_Label>
                            <CheckBox_Input checked={checked} onChange={handleChange} />
                            <CheckBox_Switch />
                        </CheckBox_Label>
                    </Essential_Question_Box>
                </Bottom_Box>
            </Main_Container>
        </ThemeProvider>
    )
}

export default SurveyComponent;