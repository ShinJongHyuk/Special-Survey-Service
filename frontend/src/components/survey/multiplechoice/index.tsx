import React,{useState} from 'react';
import MultipleChoiceType from './MultipleChoice.type';
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleChoice_Box,MultipleCheck,MultipleCheckText } from './MultipleChoice.styled';


const MultipleChoice = () => {
    const [items, setItems] = useState<any[]>([
      { id: Date.now(), text: '답변 1', imageUrl: '' },
      { id: Date.now() + 1, text: '답변 2', imageUrl: '' },
    ]);
  
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
        const uploadButton = document.getElementById(`upload-button-${index}`);


        if (uploadButton) {
          uploadButton.click();
        }
    };

    const handleImageChange = (index: number, event: any) => {
      const file = event.target.files[0];
      console.log(file)
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        const updatedItems = [...items];
        updatedItems[index].imageUrl = imageUrl;
        setItems(updatedItems);
      }
      else { 
        console.log("fuck")
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
            {item.imageUrl && (
              <ImagePreiew_Box>
                <ImagePreview src={item.imageUrl} alt={`Uploaded Image ${index + 1}`} />
                <Image_Delete_Button onClick={() => handleImageDelete(index)}>X</Image_Delete_Button>
              </ImagePreiew_Box>
            )}
  
            <ImageWrapper onClick={() => handleImageClick(index)}>
              <Image src={ImageIcon} alt="ImageIcon" />
            </ImageWrapper>
  
            {index === items.length - 1 && <AddButton onClick={() => handleAddItem()}>문항 추가</AddButton>}
  
            <UploadImage id={`upload-button-${index}`} onChange={(e: any) => handleImageChange(index, e)} />
            {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
          </MultipleChoice_content_Box>
        ))}
      </MultipleChoice_Box>
    );
  };
  
  export default MultipleChoice;