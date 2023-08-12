import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Delete_Button_Container,LinkSelect_List,LinkSelect_Option,DeleteButton,AddButton,CheckBox_content_Box,CheckBox_Box,MultipleCheck,MultipleCheckText } from './CheckBox.styled';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore'
import useMakeSurveyApiStore from '@/stores/makesurvey/useMakeSurveyApiStore';
import useSurveyFocus from '@/stores/makesurvey/useSurveyFocusStore';

const CheckBox =  ({ componentKey,isLink }: { componentKey: string, isLink : boolean }) => {
        const {surveyComponents} = useSurveyStore();
        const {surveyList,setSurveyList} = useMakeSurveyApiStore();
        const {selectedSurvey} = useSurveyFocus();
        const [items, setItems] = useState<any[]>([
          { id: `${componentKey}_1`, text: '' ,linkNumber : 0},
        ]
        );
        const [count, setCount] = useState(3);

        useEffect(() => {
    
          const loadDataFromLocalStorage = async () => {
            const storedItems = await loadCheckBoxFromLocalStorage(`CHECK_BOX_${componentKey}`);
            
            if (storedItems) {
              setItems(storedItems);
            }
          };
          loadDataFromLocalStorage();
         
        }, [componentKey]);


        useEffect(() => {
          const saveData = async () => {
            await saveCheckBoxToLocalStorage(`CHECK_BOX_${componentKey}`, items);
          };
        
          saveData();
        }, [componentKey, items]);

        useEffect(() => {
          const CheckBoxData = items.map((item) => ({
            content: item.text,
            linkNumber: item.linkNumber,
          }));
       
          const surveyState = useMakeSurveyApiStore.getState();
          const surveyList = surveyState.surveyList;
          
          surveyState.setSurveyList(componentKey, {
            ...surveyList[componentKey],
            multipleChoices: CheckBoxData,
          });
    
        
        }, [componentKey, items]);

  

        const saveCheckBoxToLocalStorage = (componentKey: string, items: any[]) => {
          if (items) {
          localStorage.setItem(`CHECK_BOX_${componentKey}`, JSON.stringify(items));
          }
        };
      
        const loadCheckBoxFromLocalStorage = (componentKey: string) => {
          const storedData = localStorage.getItem(`CHECK_BOX_${componentKey}`);
      
          return storedData ? JSON.parse(storedData) : null;
        };

        const handleTextareaInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
          const textarea = event.currentTarget;
          textarea.style.height = 'auto';
          textarea.style.height = `${textarea.scrollHeight}px`;
        };

        const handleAddItem = () => {
          setItems((prevItems : any) => [
            ...prevItems,
            { id: `${componentKey}_${count}`, text: '', linkNumber :0 },
          ]);
          setCount((prevCount) => prevCount + 1);
        };
      
        const handleDeleteItem = (index: number) => {
          const updatedItems = [...items];
          updatedItems.splice(index, 1);
          setItems(updatedItems);
        };
      
        const handleItemTextChange = (index: number, event: React.ChangeEvent<HTMLTextAreaElement>) => {
          const updatedItems = [...items];
          updatedItems[index].text = event.target.value;
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
            {items && items.map((item : any, index : number) => (
              <CheckBox_content_Box key={item.id}>
                <MultipleCheck name="radioGroup1" />
                <MultipleCheckText
                    placeholder={`문항 ${index + 1}`}
                    minRows={1} maxRows={4}
                    
                  onKeyDown={handleTextareaInput} onKeyUp={handleTextareaInput}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleItemTextChange(index, event)}
                    value = {item.text}
                  />

                <Delete_Button_Container>
                  {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
                </Delete_Button_Container>
                {isLink && (
              <LinkSelect_List value={item.linkNumber} onChange={(e: any) => handleOptionChange(index, e)}>
                <LinkSelect_Option value="0">연계할 설문 번호를 선택</LinkSelect_Option>
                {surveyComponents
                  .filter((component, idx) => idx+1 > selectedSurvey) 
                  .map((component, idx) => (
                    <LinkSelect_Option key={idx+selectedSurvey+1} value={idx+selectedSurvey+1}>
                      {`${idx+selectedSurvey+1}번 질문`}
                    </LinkSelect_Option>
                  ))}
              </LinkSelect_List>
            )}
              </CheckBox_content_Box>
            ))}
            <AddButton onClick={() => handleAddItem()}>문항 추가</AddButton>
          </CheckBox_Box>
        );
      };


export default CheckBox;