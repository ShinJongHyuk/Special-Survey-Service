import React,{useState} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,Dates_content_Box,Dates_Box,MultipleCheck} from './Dates.styled';


const Dates = () => {

        const [items, setItems] = useState<any[]>([
          { id: Date.now(), text: '답변 1', imageUrl: '' },
        ]);
      
        const handleAddItem = () => {
          setItems([...items, { id: Date.now(), text: '', imageUrl: '' }]);
        };
      
        const handleDeleteItem = (index: number) => {
          const upDatesdItems = [...items];
          upDatesdItems.splice(index, 1);
          setItems(upDatesdItems);
        };
      
        const handleItemTextChange = (index: number, text: string) => {
          const upDatesdItems = [...items];
          upDatesdItems[index].text = text;
          setItems(upDatesdItems);
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
            const upDatesdItems = [...items];
            upDatesdItems[index].imageUrl = imageUrl;
            setItems(upDatesdItems);
            event.target.value = null;
          }
    
        };
    
        const handleImageDelete = (index: number) => {
          const upDatesdItems = [...items];
          upDatesdItems[index].imageUrl = '';
          setItems(upDatesdItems);
        };
      
        return (
          <Dates_Box>
            {items.map((item, index) => (
              <Dates_content_Box key={item.id}>
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


               
              </Dates_content_Box>
            ))}
          </Dates_Box>
        );
      };


export default Dates;