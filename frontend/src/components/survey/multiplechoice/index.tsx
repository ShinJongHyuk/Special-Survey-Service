import React,{useState,useEffect} from 'react';
import MultipleChoiceType from './MultipleChoice.type';
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {Add_Button_Container,Delete_Button_Container,LinkSelect_List,LinkSelect_Option,DeleteButton,AddButton,MultipleChoice_content_Box,MultipleChoice_Box,MultipleCheck,MultipleCheckText } from './MultipleChoice.styled';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import useMakeSurveyApiStore from '@/stores/makesurvey/useMakeSurveyApiStore';
import useSurveyFocus from '@/stores/makesurvey/useSurveyFocusStore';
import TextAreaAutoSize from 'react-textarea-autosize'
const MultipleChoice = ({ componentKey,isLink }: { componentKey: string, isLink : boolean } ) => {
    const {surveyComponents} = useSurveyStore();
    const {surveyList,setSurveyList} = useMakeSurveyApiStore();
    const {selectedSurvey} = useSurveyFocus();
    const [items,setItems] = useState<any[]>([
      { id: `${componentKey}_1`, text: '', linkNumber: 0 },

    ])
    const [count, setCount] = useState(3);

    useEffect(() => {
    
      const loadDataFromLocalStorage = async () => {
        const storedItems = await loadMultipleChoiceFromLocalStorage(`MULTIPLE_CHOICE_${componentKey}`);
        
        if (storedItems) {
          setItems(storedItems);
        }
      };
      loadDataFromLocalStorage();
     
    }, [componentKey]);

    useEffect(() => {
      const saveData = async () => {
        await saveMultipleChoiceToLocalStorage(`MULTIPLE_CHOICE_${componentKey}`, items);
      };
    
      saveData();
    }, [componentKey, items]);
  
    
    useEffect(() => {
      const multipleChoicesData = items.map((item) => ({
        content: item.text,
        linkNumber: item.linkNumber,
      }));
   
      const surveyState = useMakeSurveyApiStore.getState();
      const surveyList = surveyState.surveyList;
      
      surveyState.setSurveyList(componentKey, {
        ...surveyList[componentKey],
        multipleChoices: multipleChoicesData,
      });

    
    }, [componentKey, items]);

    const saveMultipleChoiceToLocalStorage = (componentKey: string, items: any[]) => {
      if (items) {
        localStorage.setItem(`MULTIPLE_CHOICE_${componentKey}`, JSON.stringify(items));
      }
   
    };
  
    const loadMultipleChoiceFromLocalStorage = (componentKey: string) => {
      const storedData = localStorage.getItem(`MULTIPLE_CHOICE_${componentKey}`); 
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
        { id: `${componentKey}_${count}`, text: '',linkNumber: 0 },
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
      <MultipleChoice_Box>
        {items && items.map((item : any, index : number) => (
          <MultipleChoice_content_Box key={item.id}>
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
          </MultipleChoice_content_Box>
        ))}
        <Add_Button_Container>
          <AddButton onClick={() => handleAddItem()}>문항 추가</AddButton>
        </Add_Button_Container>
      </MultipleChoice_Box>
    );
  };
  
  export default MultipleChoice;