import React, { useState, useEffect } from 'react';
import Toolbar from '@/components/survey/toolbar';
import { ImagePreiew_Box, ImagePreview, Image_Delete_Button, UploadImage, Image_Text_Content, Image_Text_Header, Inner_Icon_Container, Inner_Text_Container, Image_Inner_Container, Title_Content, Title_input, Title_Inner_Container, Survey_Container, Background_Container, Survey_MainImage_Container, Survey_Title_Container } from './Makesurvey.styled';
import backgroundImage from '../../../public/survey/MakeSurvey_Background.png'
import Main_Image from '../../../public/survey/Main_Image.png'
import Image from 'next/Image'
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import axios from 'axios'

function MakeSurvey() {
  const { surveyComponents } = useSurveyStore();
  const [titleText, setTitleText] = useState('')
  const [titleContent, setTitleContent] = useState('')
  const [imgUrl, setImgUrl] = useState('')

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
      setTitleText(storedData.titleText);
      setTitleContent(storedData.titleContent);
      setImgUrl(storedData.imgUrl);
    }
  }, []);

  useEffect(() => {
    const componentData = {
      titleText,
      titleContent,
      imgUrl,
    };
    saveComponentDataToLocalStorage(componentData);
  }, [titleText, titleContent, imgUrl]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(event.target.value);
  };
  const handleTitleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      setImgUrl(imageUrl);
      event.target.value = null;
    }

  };

  const handleImageDelete = () => {
    setImgUrl('');
  };

  const allData = surveyComponents.map((componentKey) => {
    const multipleChoiceData = JSON.parse(localStorage.getItem(`multiplechoice_multiplechoice_${componentKey.key}`) ?? 'null');
    const entireData = JSON.parse(localStorage.getItem('entire') ?? 'null');
    const surveyStateData = JSON.parse(localStorage.getItem(componentKey.key) ?? 'null');
    return {
      multipleChoiceData,
      entireData,
      surveyStateData,
    }
  });
  console.log(allData)
  return (
    <>
      <Survey_Container>
        <Survey_Title_Container>
          <Title_Inner_Container>
            <Title_input onChange={handleTitleChange} value={titleText} />
            <Title_Content onChange={handleTitleContentChange} value={titleContent} />
          </Title_Inner_Container>
        </Survey_Title_Container>
        <Survey_MainImage_Container>
          <Image_Inner_Container>
            <Inner_Text_Container>
              <Image_Text_Header>설문 대표 이미지 1장</Image_Text_Header>
              <Image_Text_Content>jpg 또는 png 이미지 (선택사항)</Image_Text_Content>

            </Inner_Text_Container>
            <UploadImage id={`upload-button`} onChange={(e: any) => handleImageChange(e)} />
            {imgUrl ? (
              <ImagePreiew_Box>
                <ImagePreview src={imgUrl} alt='메인 이미지' />
                <Image_Delete_Button onClick={() => handleImageDelete()}>X</Image_Delete_Button>
              </ImagePreiew_Box>
            ) : <Inner_Icon_Container onClick={() => handleImageClick()}>
              <Image src={Main_Image} alt="메인 이미지" />
            </Inner_Icon_Container>
            }
          </Image_Inner_Container>
        </Survey_MainImage_Container>
        <Toolbar />
        <Background_Container>
          <Image src={backgroundImage} alt="배경" />
          <Image src={backgroundImage} alt="배경" />
        </Background_Container>

      </Survey_Container>
    </>
  );
}

export default MakeSurvey;