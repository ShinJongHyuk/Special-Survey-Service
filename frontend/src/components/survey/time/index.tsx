import React,{useState} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,Time_content_Box,Time_Box,MultipleCheck} from './Time.styled';


const Time = () => {

        const [items, setItems] = useState<any[]>([
          { id: Date.now(), text: '답변 1', imageUrl: '' },
        ]);
      
        const handleAddItem = () => {
          setItems([...items, { id: Date.now(), text: '', imageUrl: '' }]);
        };
      
        const handleDeleteItem = (index: number) => {
          const upTimedItems = [...items];
          upTimedItems.splice(index, 1);
          setItems(upTimedItems);
        };
      
        const handleItemTextChange = (index: number, text: string) => {
          const upTimedItems = [...items];
          upTimedItems[index].text = text;
          setItems(upTimedItems);
        };
    
        const handleImageClick = (index : number) => {
            const uploadButton = document.getElementById(`upload-button-${index}`);
    
            if (uploadButton) {
              uploadButton.click();
            }
        };              
    
        const handleImageChange = (index: number, event: any) => {
          const file = event.target.files[0];
    
          if (file) {
            const imageUrl = URL.createObjectURL(file);
            const upTimedItems = [...items];
            upTimedItems[index].imageUrl = imageUrl;
            setItems(upTimedItems);
            event.target.value = null;
          }
    
        };
    
        const handleImageDelete = (index: number) => {
          const upTimedItems = [...items];
          upTimedItems[index].imageUrl = '';
          setItems(upTimedItems);
        };
      
        return (
          <Time_Box>
            {items.map((item, index) => (
              <Time_content_Box key={item.id}>
                <UploadImage id={`upload-button-${index}`} onChange={(e: any) => handleImageChange(index, e)} />
                {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
                {item.imageUrl && (
                  <Image_Container>
                    <ImagePreiew_Box>
                      <ImagePreview src={item.imageUrl} alt={`${index + 1}번 이미지`} />
                      <Image_Delete_Button onClick={() => handleImageDelete(index)}>X</Image_Delete_Button>
                    </ImagePreiew_Box>
                  </Image_Container>
                  
                )}              
                <MultipleCheck name="DateGroup" />
                <ImageWrapper onClick={() => handleImageClick(index)}>
                  <Image src={ImageIcon} alt="ImageIcon" width={30} height={30} />
                </ImageWrapper>


               
              </Time_content_Box>
            ))}
          </Time_Box>
        );
      };


export default Time;