import React, {useState,useMemo} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '@/styles/DefaultTheme'
import useStayStore from '@/stores/useStayStore';
import {Move_Container,ImageWrapper,Essential_Question_Title,LinkSelectBox,LinkSelect_List,LinkSelect_Option,Link_Question_Title,Essential_Question_Box,Elements_Box,Link_Question_Box,Bottom_Box, Question_Inner_Container,SelectBox_Option,SelectBox_List,SelectBox,Main_Container,Question_Container
    ,Question_Header,Question_Header_Container,
    Question_Content,Question_Content_Container,
    CheckBox_Input,CheckBox_Label,CheckBox_Switch} from '@/components/survey/Survey.styled';
import SurveyType from './Survey.type';
import Image from 'next/image'
import trash from '/public/survey/trash.png'
import duplicate from '/public/survey/duplicate.png'
import etc from '/public/survey/etc.png'
import shuffle_small from '/public/survey/shuffle_small.png'
import MultipleChoice from './multiplechoice';
import CheckBox from './checkbox';
import DropDown from './dropdown';
import Dates from './dates';
import Time from './time';

let count = 1;
const SurveyComponent = () => {

    const [surveyState,setSurveyState] = useState('multiplechoice')
    const [selectedOption, setSelectedOption] = useState(''); 
    const [checked, setChecked] = useState(false); 
    
  
    const ComponentKey = () => {
        const key = count;
        count += 1;
        return key;
      };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setChecked(e.target.checked)
    };
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
      setSurveyState(event.target.value);
    };

    const duplicateClick = () => {
        alert("복사할까");
    };

    const deleteClick = () => {
        alert("삭제할까");
    };
    return (
        <ThemeProvider theme={theme}>
            <Main_Container>
                <Move_Container>
                    <Image src={shuffle_small} alt="옮기기"></Image>
                </Move_Container>
                <Question_Inner_Container>
                    <Question_Container>
                        <Question_Header_Container>
                            <Question_Header />
                        </Question_Header_Container>            
                        <Question_Content_Container>
                            <Question_Content />
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
                {surveyState === 'multiplechoice' && <MultipleChoice customkey={ComponentKey()} />}
                {surveyState === 'checkbox' && <CheckBox customkey={ComponentKey()} />}
                {surveyState === 'dropdown' && <DropDown />}
                {surveyState === 'dates' && <Dates />}
                {surveyState === 'time' && <Time />}
                        
                <hr/>
                <Bottom_Box>
                    <Link_Question_Box>
                        <Link_Question_Title>질문 연계</Link_Question_Title>
                        <LinkSelectBox>
                                <LinkSelect_List onChange={handleOptionChange} value={selectedOption}>
                                    <LinkSelect_Option value="Option 1">1번 질문</LinkSelect_Option>
                                    <LinkSelect_Option value="Option 2">2번 질문</LinkSelect_Option>
                                    <LinkSelect_Option value="Option 3">3번 질문</LinkSelect_Option>
                                    <LinkSelect_Option value="Option 4">1번 질문</LinkSelect_Option>
                                </LinkSelect_List>
                        </LinkSelectBox>
                    </Link_Question_Box>
                    <Elements_Box>
                        <ImageWrapper onClick={duplicateClick}>
                            <Image src={duplicate} alt="복사"></Image>
                        </ImageWrapper>
                        <ImageWrapper onClick={deleteClick}>
                            <Image src={trash} alt="삭제"></Image>
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