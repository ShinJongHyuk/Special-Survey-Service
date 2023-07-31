import React,{useState,useEffect} from 'react';
import MultipleChoiceType from './MultipleChoice.type';
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {LinkSelect_List,LinkSelect_Option,Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleChoice_Box,MultipleCheck,MultipleCheckText } from './MultipleChoice.styled';
import useSurveyStore from '@/stores/useSurveyStore';
import useItemStore, { ItemType } from '@/stores/useItemStore';
const MultipleChoice = ({ componentKey,isLink }: { componentKey: string, isLink : boolean } ) => {
    const {surveyComponents} = useSurveyStore();
    const {items,setItems} = useItemStore(componentKey);

    const [count, setCount] = useState(3);
    console.log(items)
    useEffect(() => {
  
      const loadDataFromLocalStorage = async () => {
        const storedItems = await loadMultipleChoiceFromLocalStorage(componentKey);
        if (storedItems) {
          setItems(storedItems);
        }
        // save after loading data
        await saveMultipleChoiceToLocalStorage(componentKey, items);
      };
     
    }, [componentKey]);

    useEffect(() => {
        saveMultipleChoiceToLocalStorage(componentKey, items);
      
     
    }, [items]);





    const saveMultipleChoiceToLocalStorage = (componentKey: string, items: any[]) => {
      if (items) {
        localStorage.setItem(componentKey, JSON.stringify(items));
      }
   
    };
  
    const loadMultipleChoiceFromLocalStorage = (componentKey: string) => {
      const storedData = localStorage.getItem(componentKey); 
      console.log(storedData,"야")
      return storedData ? JSON.parse(storedData) : null;
    };


    const handleAddItem = () => {
      setItems((prevItems : any) => [
        ...prevItems,
        { id: `${componentKey}_${count}`, text: '', imageUrl: '',linkNumber: 0 },
      ]);
      setCount((prevCount) => prevCount + 1);
    };
  
    const handleDeleteItem = (index: number) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    
    const handleItemTextChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedItems = [...items];
      updatedItems[index].text = event.target.value;

      setItems(updatedItems);
      
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
        const updatedItems = [...items];
        updatedItems[index].imageUrl = imageUrl;
        setItems(updatedItems);
        event.target.value = null;
      }

    };

    const handleImageDelete = (index: number) => {
      const updatedItems = [...items];
      updatedItems[index].imageUrl = '';
      setItems(updatedItems);
    };
    
    const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseInt(event.target.value);
      const updatedItems = [...items];
      updatedItems[index].linkNumber = value;
      setItems(updatedItems);
    };
    


    return (
      <MultipleChoice_Box>
        {items && items.map((item : any, index : number) => (
          <MultipleChoice_content_Box key={item.id}>
            <MultipleCheck name="radioGroup1" />
            <MultipleCheckText
              placeholder={`옵션 ${index + 1}`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleItemTextChange(index, event)}
              value = {item.text}
            />
            <ImageWrapper onClick={() => handleImageClick(index)}>
            <Image src={ImageIcon} alt="ImageIcon" />
            </ImageWrapper>
            {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
            
            {isLink && (
            <LinkSelect_List value={item.linkNumber} onChange={(e : any) => handleOptionChange(index, e)}>
                <LinkSelect_Option value="0">연계할 설문 번호를 선택</LinkSelect_Option>
              {surveyComponents.map((component, idx) => (
                <LinkSelect_Option key={idx} value={idx + 1}>
                  {`${idx + 1}번 질문으로 연결됨`}
                </LinkSelect_Option>
              ))}
            </LinkSelect_List>
            )}

            <UploadImage id={`upload-button-${componentKey}-${index}`} onChange={(e: any) => handleImageChange(index, e)} />
           
            
            {item.imageUrl && (
            <Image_Container>
              <ImagePreiew_Box>
                <ImagePreview src={item.imageUrl} alt={`${index + 1}번 이미지`} />
                <Image_Delete_Button onClick={() => handleImageDelete(index)}>X</Image_Delete_Button>
              </ImagePreiew_Box>
            </Image_Container>
            )}  
           
          </MultipleChoice_content_Box>
        ))}
        <AddButton onClick={() => handleAddItem()}>문항 추가</AddButton>
      </MultipleChoice_Box>
    );
  };
  
  export default MultipleChoice;