import React,{useState,useEffect} from 'react';
import Toolbar from '@/components/survey/toolbar';
import { Survey_Container } from './MakeSettings.Styled'; 
import backgroundImage from '/public/survey/MakeSurvey_Background.png'
import Main_Image from '/public/survey/Main_Image.png'
import Image from 'next/Image'
import SurveyNavbar from '@/components/common/surveynavbar';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import axios from 'axios'

function MakeSettings() {
  const {surveyComponents} = useSurveyStore();
  const [titleText,setTitleText] = useState('')
  const [titleContent,setTitleContent] = useState('')
  const [imgUrl,setImgUrl] = useState('')

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
    }, [titleText,titleContent,imgUrl]);

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
  return (

    <Survey_Container>
        <div>굿</div>
        <div>굿</div>
    </Survey_Container>

  );
}

export default MakeSettings;67