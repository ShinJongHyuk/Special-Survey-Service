import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,Dates_content_Box,Dates_Box,MultipleCheck} from './Dates.styled';


const Dates = ({ componentKey }: { componentKey: string }) => {

        const [items, setItems] = useState<any[]>([
          { id: `${componentKey}_1`, date: '', imageUrl: '' },
        ]);
        
        useEffect(() => {
          const storedItems = loadDateFromLocalStorage(`dates_${componentKey}`);
          if (storedItems) {
            setItems(storedItems);
          }
        }, [componentKey]);
    
    
        useEffect(() => {
          saveDateToLocalStorage(`dates_${componentKey}`, items);
        }, [componentKey,items]);
      
        const saveDateToLocalStorage = (componentKey: string, items: any[]) => {
          localStorage.setItem(`dates_${componentKey}`, JSON.stringify(items));
        };
      
        const loadDateFromLocalStorage = (componentKey: string) => {
          const storedData = localStorage.getItem(`dates_${componentKey}`);
      
          return storedData ? JSON.parse(storedData) : null;
        };
        const handleDeleteItem = (index: number) => {
          const upDatesdItems = [...items];
          upDatesdItems.splice(index, 1);
          setItems(upDatesdItems);
        };

        const handleItemDateChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
          const updatedItems = [...items];
          updatedItems[index].date = event.target.value;
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
          <Dates_Box>
            {items.map((item, index) => (
              <Dates_content_Box key={item.id}>
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
                <MultipleCheck 
                  name="DateGroup"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleItemDateChange(index, event)}
                  value={item.date} />
                <ImageWrapper onClick={() => handleImageClick(index)}>
                  <Image src={ImageIcon} alt="ImageIcon" width={30} height={30} />
                </ImageWrapper>
           
              </Dates_content_Box>
            ))}
          </Dates_Box>
        );
      };


export default Dates;