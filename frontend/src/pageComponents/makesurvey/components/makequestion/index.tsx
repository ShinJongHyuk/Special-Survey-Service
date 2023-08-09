"use client";
import React,{useState,useEffect} from 'react';
import Toolbar from '@/components/survey/toolbar';
import {Component_Container,Survey_Inner_Container,ImagePreiew_Box,ImagePreview,Image_Delete_Button,UploadImage,Image_Text_Content,Image_Text_Header,Inner_Icon_Container,Inner_Text_Container,Image_Inner_Container,Title_Content,Title_input,Title_Inner_Container,Survey_Container, Background_Container, Survey_MainImage_Container,Survey_Title_Container } from './MakeQuestion.styled';
import Main_Image from '/public/survey/Main_Image.png'
import Image from 'next/image'
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import useSettingSurveyApiStore from '@/stores/makesurvey/useSettingSurveyApiStore';
import axios from 'axios'

function MakeQuestion() {
  const {surveyComponents} = useSurveyStore();
  const {title,setTitle,titleContent,setTitleContent,img,setImg} = useSettingSurveyApiStore();

  const saveComponentDataToLocalStorage = (data: any) => {
      localStorage.setItem('entire', JSON.stringify(data));
    };

  const loadComponentDataFromLocalStorage = () => {
      const storedData = localStorage.getItem('entire');
      return storedData ? JSON.parse(storedData) : null;
    };

  useEffect(() => {
      const storedData = loadComponentDataFromLocalStorage();
      if (storedData) {
        setImg(storedData.img);
      }
    }, []);

  useEffect(() => {
      const componentData = {
        img,
      };

      saveComponentDataToLocalStorage(componentData);
    }, [img]);


    const handleTextareaInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const textarea = event.currentTarget;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(event.target.value);
    };
    const handleTitleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitleContent(event.target.value);
    };
  const handleImageClick = () => {
    const uploadButton = document.getElementById(`upload-button`);
    if (uploadButton) {
      uploadButton.click();
    }
  };     

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
      event.target.value = null;
    }

  };

  const handleImageDelete = () => {
    setImg('');
  };
  return (
    
      <Survey_Container>
        <Survey_Inner_Container>
        <Survey_Title_Container>
          <Title_Inner_Container>
          <Title_input minRows={1} maxRows={2} placeholder="설문지 제목" onKeyDown={handleTextareaInput} onKeyUp={handleTextareaInput} onChange={handleTitleChange} value={title}/>
          <Title_Content minRows={1} maxRows={4} placeholder="설문에 대한 설명을 적어주세요 (필수사항)" onKeyDown={handleTextareaInput} onKeyUp={handleTextareaInput}  onChange={handleTitleContentChange} value={titleContent} />
          </Title_Inner_Container>
        </Survey_Title_Container>
        <Survey_MainImage_Container>
          <Image_Inner_Container>
              <Inner_Text_Container>
                <Image_Text_Header>설문 대표 이미지 1장</Image_Text_Header>
                <Image_Text_Content>jpg 또는 png 이미지 (선택사항)</Image_Text_Content>    
              </Inner_Text_Container>
              <UploadImage id={`upload-button`} onChange={(e: any) => handleImageChange(e)} />
              {img ?  (
                <ImagePreiew_Box>
                  <ImagePreview src={img} alt='메인 이미지' />
                  <Image_Delete_Button onClick={() => handleImageDelete()}>X</Image_Delete_Button>
                </ImagePreiew_Box>
              )  : <Inner_Icon_Container onClick={() => handleImageClick()}>
                <Image src={Main_Image} alt="메인 이미지" />
              </Inner_Icon_Container>
              }
          </Image_Inner_Container>
        </Survey_MainImage_Container>
        <Component_Container>
          <Toolbar />
        </Component_Container>  
        </Survey_Inner_Container>




    </Survey_Container>
  );
}

export default MakeQuestion;