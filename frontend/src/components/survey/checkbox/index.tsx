import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {LinkSelect_List,LinkSelect_Option,Image_Container,Image_Delete_Button,ImagePreiew_Box,ImageWrapper,UploadImage,ImagePreview,DeleteButton,AddButton,CheckBox_content_Box,CheckBox_Box,MultipleCheck,MultipleCheckText } from './CheckBox.styled';
import useSurveyStore from '@/stores/useSurveyStore'


const CheckBox =  ({ componentKey,isLink }: { componentKey: string, isLink : boolean }) => {
        const {surveyComponents} = useSurveyStore();
        const [items, setItems] = useState<any[]>([
          { id: `${componentKey}_1`, text: '', imageUrl: '' },
          { id: `${componentKey}_2`, text: '', imageUrl: '' },
        ]
        );
        const [count, setCount] = useState(3);

        useEffect(() => {
          const storedItems = loadCheckBoxFromLocalStorage(`checkbox_${componentKey}`);
          if (storedItems) {
            setItems(storedItems);
          }
        }, [componentKey]);


        useEffect(() => {
          saveCheckBoxToLocalStorage(`checkbox_${componentKey}`, items);
        }, [componentKey,items]);
      

        const saveCheckBoxToLocalStorage = (componentKey: string, items: any[]) => {
          localStorage.setItem(`checkbox_${componentKey}`, JSON.stringify(items));

        };
      
        const loadCheckBoxFromLocalStorage = (componentKey: string) => {
          const storedData = localStorage.getItem(`checkbox_${componentKey}`);
      
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
        
        const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
          const value = parseInt(event.target.value);
          const updatedItems = [...items];
          updatedItems[index].linkNumber = value;
          setItems(updatedItems);
        };
      
        return (
          <CheckBox_Box>
            {items.map((item, index) => (
              <CheckBox_content_Box key={item.id}>
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
                {item.imageUrl && (
                <Image_Container>
                  <ImagePreiew_Box>
                    <ImagePreview src={item.imageUrl} alt={`${index + 1}번 이미지`} />
                    <Image_Delete_Button onClick={() => handleImageDelete(index)}>X</Image_Delete_Button>
                  </ImagePreiew_Box>
                </Image_Container>
                )}  
               
              </CheckBox_content_Box>
            ))}
            <AddButton onClick={() => handleAddItem()}>문항 추가</AddButton>
          </CheckBox_Box>
        );
      };


export default CheckBox;