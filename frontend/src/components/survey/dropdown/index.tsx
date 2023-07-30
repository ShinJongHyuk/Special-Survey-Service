import React,{useState,useEffect} from 'react'
import {DeleteButton,AddButton,DropDown_content_Box,DropDown_Box,MultipleCheck,MultipleCheckText } from './DropDown.styled';


const DropDown = ({ componentKey }: { componentKey: string }) => {

    const [items, setItems] = useState<any[]>([
        { id: `${componentKey}_1`, text: ''},
        { id: `${componentKey}_2`, text: ''},
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
    
      const loadDropBoxFromLocalStorage = (componentKey: string) => {
        const storedData = localStorage.getItem(`dropdown_${componentKey}`);
    
        return storedData ? JSON.parse(storedData) : null;
      };
  
    const handleAddItem = () => {
    setItems((prevItems) => [
        ...prevItems,
        { id: `${componentKey}_${count}`, text: ''},
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
   
    
    return (
        <DropDown_Box>
        {items.map((item, index) => (
            <DropDown_content_Box key={item.id}>
            <MultipleCheck>{index+1}  .</MultipleCheck>
            <MultipleCheckText
              placeholder={`옵션 ${index + 1}`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleItemTextChange(index, event)}
              value = {item.text}
            />
             {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
            </DropDown_content_Box>
        ))}
        <AddButton onClick={() => handleAddItem()}>옵션 추가</AddButton>
        </DropDown_Box>
    );
    };


export default DropDown;