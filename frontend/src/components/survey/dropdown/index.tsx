import React,{useState,useEffect} from 'react'
import {Delete_Button_Container,LinkSelect_List,LinkSelect_Option,DeleteButton,AddButton,DropDown_content_Box,DropDown_Box,MultipleCheck,MultipleCheckText } from './DropDown.styled';
import useSurveyStore from '@/stores/makesurvey/useSurveyStore';
import useMakeSurveyApiStore from '@/stores/makesurvey/useMakeSurveyApiStore';
import useSurveyFocus from '@/stores/makesurvey/useSurveyFocusStore';
import TextAreaAutoSize from 'react-textarea-autosize'
const DropDown = ({ componentKey,isLink }: { componentKey: string, isLink : boolean }) => {
    const {surveyComponents} = useSurveyStore();
    const {surveyList,setSurveyList} = useMakeSurveyApiStore();
    const {selectedSurvey} = useSurveyFocus();
    const [items, setItems] = useState<any[]>([
        { id: `${componentKey}_1`, text: '',linkNumber : 0},
      
      ]);

    const [count, setCount] = useState(3);

    useEffect(() => {
        const storedItems = loadDropBoxFromLocalStorage(`dropdown_${componentKey}`);
        if (storedItems) {
          setItems(storedItems);
        }
      }, [componentKey]);
  
  
      useEffect(() => {
  
        saveDropBoxToLocalStorage(`dropdown_${componentKey}`, items);
  
      }, [componentKey,items]);
    
  
      const saveDropBoxToLocalStorage = (componentKey: string, items: any[]) => {
        localStorage.setItem(`dropdown_${componentKey}`, JSON.stringify(items));
  
      };

      useEffect(() => {
  
        const dropDownData = items.map((item) => ({
          content: item.text,
          linkNumber: item.linkNumber
        }));
    
        setSurveyList(componentKey,{...surveyList[componentKey], dropDown : dropDownData });
      }, [componentKey, items]);

      const saveCheckBoxToLocalStorage = (componentKey: string, items: any[]) => {
        localStorage.setItem(`checkbox_${componentKey}`, JSON.stringify(items));

      };
    
      const loadDropBoxFromLocalStorage = (componentKey: string) => {
        const storedData = localStorage.getItem(`dropdown_${componentKey}`);
    
        return storedData ? JSON.parse(storedData) : null;
      };
  
    const handleAddItem = () => {
    setItems((prevItems) => [
        ...prevItems,
        { id: `${componentKey}_${count}`, text: '', linkNumber : 0},
    ]);
    setCount((prevCount) => prevCount + 1);
    };

    const handleTextareaInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const textarea = event.currentTarget;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
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
        <DropDown_Box>
        {items.map((item, index) => (
            <DropDown_content_Box key={item.id}>
            <MultipleCheck>{index+1}  .</MultipleCheck>
            <MultipleCheckText
              placeholder={`문항 ${index + 1}`}
              minRows={1}
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
            </DropDown_content_Box>
        ))}
        <AddButton onClick={() => handleAddItem()}>문항 추가</AddButton>
        </DropDown_Box>
    );
    };


export default DropDown;