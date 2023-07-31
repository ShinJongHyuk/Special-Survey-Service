import React from 'react';
import Toolbar from '@/components/survey/toolbar';
import {Image_Text_Content,Image_Text_Header,Inner_Icon_Container,Inner_Text_Container,Image_Inner_Container,Title_Content,Title_input,Title_Inner_Container,Survey_Container, Background_Container, Survey_MainImage_Container,Survey_Title_Container } from './Makesurvey.styled';
import backgroundImage from '../../../public/survey/MakeSurvey_Background.png'
import images from '../../../public/survey/images.png'
import Main_Image from '../../../public/survey/Main_Image.png'
import Image from 'next/Image'

function MakeSurvey() {
  return (
    <Survey_Container>
      <Survey_Title_Container>
        <Title_Inner_Container>
          <Title_input />
          <Title_Content />
        </Title_Inner_Container>
      </Survey_Title_Container>
      <Survey_MainImage_Container>
        <Image_Inner_Container>
            <Inner_Text_Container>
              <Image_Text_Header />
              <Image_Text_Content />
            </Inner_Text_Container>
            <Inner_Icon_Container>
              <Image src={Main_Image} alt="이미지" />
            </Inner_Icon_Container>
        </Image_Inner_Container>
      </Survey_MainImage_Container>
      <Toolbar />
      <Background_Container>
      <Image src={backgroundImage} alt="배경" />
      <Image src={backgroundImage} alt="배경" />
      </Background_Container>
      
    </Survey_Container>
  );
}

export default MakeSurvey;