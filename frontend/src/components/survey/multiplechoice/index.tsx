import React,{useState,useEffect} from 'react';
import MultipleChoiceType from './MultipleChoice.type';
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleChoice_Box,MultipleCheck,MultipleCheckText } from './MultipleChoice.styled';

const MultipleChoice = ( { componentKey }: { componentKey: string } ) => {
    const [items, setItems] = useState<any[]>([
      { id: `${componentKey}_1`, text: '', imageUrl: '' },
      { id: `${componentKey}_2`, text: '', imageUrl: '' },
    ]
    );
    
    const [count, setCount] = useState(3);

    useEffect(() => {
      const storedItems = loadMultipleChoiceFromLocalStorage(`multiplechoice_${componentKey}`);
      if (storedItems) {
        setItems(storedItems);
      }
    }, [componentKey]);


    useEffect(() => {

      saveMultipleChoiceToLocalStorage(`multiplechoice_${componentKey}`, items);

    }, [componentKey,items]);
  

    const saveMultipleChoiceToLocalStorage = (componentKey: string, items: any[]) => {
      localStorage.setItem(`multiplechoice_${componentKey}`, JSON.stringify(items));
    };
  
    const loadMultipleChoiceFromLocalStorage = (componentKey: string) => {
      const storedData = localStorage.getItem(`multiplechoice_${componentKey}`);
      return storedData ? JSON.parse(storedData) : null;
    };


    const handleAddItem = () => {
      setItems((prevItems) => [
        ...prevItems,
        { id: `${componentKey}_${count}`, text: '', imageUrl: '' },
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
    
    return (
      <MultipleChoice_Box>
        {items.map((item, index) => (
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
  
  
            <UploadImage id={`upload-button-${componentKey}-${index}`} onChange={(e: any) => handleImageChange(index, e)} />
            {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
            
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