import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,Time_content_Box,Time_Box,MultipleCheck} from './Time.styled';


const Time = ({ componentKey }: { componentKey: string }) => {


        const [items, setItems] = useState<any[]>([
          { id: `${componentKey}_1`, time: '', imageUrl: '' },
        ]);
        
        useEffect(() => {
          const storedItems = loadTimeFromLocalStorage(`time_${componentKey}`);
          if (storedItems) {
            setItems(storedItems);
          }
        }, [componentKey]);


        useEffect(() => {
          saveTimeToLocalStorage(`time_${componentKey}`, items);
        }, [componentKey,items]);

        const saveTimeToLocalStorage = (componentKey: string, items: any[]) => {
          localStorage.setItem(`time_${componentKey}`, JSON.stringify(items));
        };

        const loadTimeFromLocalStorage = (componentKey: string) => {
          const storedData = localStorage.getItem(`time_${componentKey}`);

          return storedData ? JSON.parse(storedData) : null;
        };

        const handleItemTimeChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
          const updatedItems = [...items];
          updatedItems[index].time = event.target.value;
          setItems(updatedItems);
        };

        const handleDeleteItem = (index: number) => {
          const upTimedItems = [...items];
          upTimedItems.splice(index, 1);
          setItems(upTimedItems);
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
          <Time_Box>
            {items.map((item, index) => (
              <Time_content_Box key={item.id}>
                <UploadImage id={`upload-button-${componentKey}-${index}`} onChange={(e: any) => handleImageChange(index, e)} />
                {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
                {/* {item.imageUrl && (
                  <Image_Container>
                    <ImagePreiew_Box>
                      <ImagePreview src={item.imageUrl} alt={`${index + 1}번 이미지`} />
                      <Image_Delete_Button onClick={() => handleImageDelete(index)}>X</Image_Delete_Button>
                    </ImagePreiew_Box>
                  </Image_Container>
                  
                )}               */}
                <MultipleCheck 
                  name="DateGroup"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleItemTimeChange(index, event)}
                  value={item.time} />
                {/* <ImageWrapper onClick={() => handleImageClick(index)}>
                  <Image src={ImageIcon} alt="ImageIcon" width={30} height={30} />
                </ImageWrapper> */}

               
              </Time_content_Box>
            ))}
          </Time_Box>
        );
      };


export default Time;