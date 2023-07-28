import React,{useState} from 'react'
import {DeleteButton,AddButton,DropDown_content_Box,DropDown_Box,MultipleCheck,MultipleCheckText } from './DropDown.styled';


const DropDown = () => {

    const [items, setItems] = useState<any[]>([
        { id: Date.now(), text: '옵션 1' },
        { id: Date.now() + 1, text: '옵션 2' },
    ]);
    
    const handleAddItem = () => {
        setItems([...items, { id: Date.now(), text: ''}]);
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
   
    
    return (
        <DropDown_Box>
        {items.map((item, index) => (
            <DropDown_content_Box key={item.id}>
            <MultipleCheck>{index+1}  .</MultipleCheck>
            <MultipleCheckText
                placeholder={`옵션 ${index + 1}`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleItemTextChange(index, e.target.value)
                }
            />
             {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
            </DropDown_content_Box>
        ))}
        <AddButton onClick={() => handleAddItem()}>옵션 추가</AddButton>
        </DropDown_Box>
    );
    };


export default DropDown;