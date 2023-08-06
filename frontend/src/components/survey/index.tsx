import React, {useState,useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import theme from '@/styles/DefaultTheme'
import {ImagePreiew_Box,ImagePreview,UploadImage,Image_Delete_Button,Image_Container,Move_Container,ImageWrapper,Essential_Question_Title,LinkSelectBox,LinkSelect_List,LinkSelect_Option,Link_Question_Title,Essential_Question_Box,Elements_Box,Link_Question_Box,Bottom_Box, Question_Inner_Container,SelectBox_Option,SelectBox_List,SelectBox,Main_Container,Question_Container
    ,Question_Header,Question_Header_Container,
    Question_Content,Question_Content_Container,
    CheckBox_Input,CheckBox_Label,CheckBox_Switch} from '@/components/survey/Survey.styled';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import ImageIcon from '/public/survey/ImageIcon.png'
import SurveyType from './Survey.type';
import Image from 'next/image'
import etc from '/public/survey/etc.png'
import DragIcon from '/public/survey/DragIcon.png'
import MultipleChoice from './multiplechoice';
import useMakeSurveyApiStore from '@/stores/makesurvey/useMakeSurveyApiStore';
import CheckBox from './checkbox';
import DropDown from './dropdown';
import Dates from './dates';
import Time from './time';

const SurveyComponent = ({ componentKey, index }: { componentKey: string, index: number }) => {
    const {surveyComponents} = useSurveyStore();
    const { surveyList, setSurveyList } = useMakeSurveyApiStore();
    const [surveyState,setSurveyState] = useState('MULTIPLE_CHOICE')
    const [imgurl,setImgUrl] = useState('')
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

        const SendData = {
            type : surveyState,
            isEssential : checked,
            title : headerText,
            listOption,
            };
        saveComponentDataToLocalStorage(componentKey, componentData);
        setSurveyList(componentKey,SendData); 
      }, [surveyState, selectedOption, checked, headerText, headerDetailText, listOption]);

    console.log(surveyList)
    
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

        const handleImageClick = (index : number) => {
        const uploadButton = document.getElementById(`upload-button-${componentKey}-${index}`);
        if (uploadButton) {
          uploadButton.click();
        }
    };       
    const handleImageChange = (index: number, event: any) => {
      const file = event.target.files[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImgUrl(imageUrl);
        event.target.value = null;
      }

    };
    const handleImageDelete = (index: number) => {
      setImgUrl('')
    };

    const positionImage = surveyState === 'dates' || surveyState === 'time'
        ? { marginLeft: '252px' }
        : {};

    return (
        <ThemeProvider theme={theme}>
            <Main_Container>
                <Question_Inner_Container>
                    <Question_Container>
                        <Question_Header_Container>
                            <Question_Header onChange={handleHeaderChange} value={headerText} index={index}/>
                        </Question_Header_Container>            
                        <Question_Content_Container>
                            <Question_Content onChange={handleHeaderDetailChange} value={headerDetailText} index={index} />
                        </Question_Content_Container>

           
                    </Question_Container>
                    <ImageWrapper onClick={() => handleImageClick(index)}>
                    <Image src={ImageIcon} alt="ImageIcon" />
                </ImageWrapper>
                    <SelectBox>
                            <SelectBox_List onChange={handleOptionChange} value={selectedOption}>
                                <SelectBox_Option value="MULTIPLE_CHOICE">객관식 답변</SelectBox_Option>
                                <SelectBox_Option value="CHECKBOX">체크 박스</SelectBox_Option>
                                <SelectBox_Option value="DROPDOWN">드롭 다운</SelectBox_Option>
                                <SelectBox_Option value="DATE_FORM">날짜 선택</SelectBox_Option>
                                <SelectBox_Option value="TIME_FORM">시간 선택</SelectBox_Option>
                            </SelectBox_List>
                    </SelectBox>
                </Question_Inner_Container>
                <UploadImage id={`upload-button-${componentKey}-${index}`} onChange={(e: any) => handleImageChange(index, e)} />
                {imgurl && (
                <Image_Container style={positionImage}> 
                <ImagePreiew_Box>
                    <ImagePreview src={imgurl} alt={`${index + 1}번 이미지`} />
                    
                    <Image_Delete_Button onClick={() => handleImageDelete(index)}>X</Image_Delete_Button>
                </ImagePreiew_Box>
                </Image_Container>
                )}  
                {surveyState === 'MULTIPLE_CHOICE' && <MultipleChoice componentKey={componentKey} isLink={listOption} />}
                {surveyState === 'CHECKBOX' && <CheckBox componentKey={componentKey} isLink={listOption} />}
                {surveyState === 'DROPDOWN' && <DropDown componentKey={componentKey} isLink={listOption} />}
                {surveyState === 'DATE_FORM' && <Dates componentKey={componentKey}/>}
                {surveyState === 'TIME_FORM' && <Time componentKey={componentKey} />}
                        
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