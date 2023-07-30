import React,{useState,useEffect} from 'react';
import MultipleChoiceType from './MultipleChoice.type';
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleChoice_Box,MultipleCheck,MultipleCheckText } from './MultipleChoice.styled';


const MultipleChoice = ( { componentKey }: { componentKey: string } ) => {
    const [items, setItems] = useState<any[]>([
      { id: Date.now(), text: '답변 1', imageUrl: '' },
      { id: Date.now() + 1, text: '답변 2', imageUrl: '' },
    ]);
    useEffect(() => {
      saveMultipleChoiceToLocalStorage(componentKey, items);
      console.log(items,"이야")
    }, [componentKey, items]);
  
    useEffect(() => {
      const storedItems = loadMultipleChoiceFromLocalStorage(componentKey);
      if (storedItems) {
        setItems(storedItems);
      }
      console.log(storedItems,"야")
    }, [componentKey]);

    const saveMultipleChoiceToLocalStorage = (componentKey: string, items: any[]) => {
      localStorage.setItem(`MultipleChoice_${componentKey}`, JSON.stringify(items));
      console.log(items,"아이템스")
    };
  
    const loadMultipleChoiceFromLocalStorage = (componentKey: string) => {
      const storedData = localStorage.getItem(`MultipleChoice_${componentKey}`);
      return storedData ? JSON.parse(storedData) : null;
    };


    const handleAddItem = () => {
      setItems([...items, { id: Date.now(), text: '', imageUrl: '' }]);
    };
  
    const handleDeleteItem = (index: number) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    const handleItemTextChange = (index: number, text: string) => {
      const updatedItems = [...items];
      updatedItems[index].text = text;
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
              placeholder={`답변 ${index + 1}`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleItemTextChange(index, e.target.value)
              }
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