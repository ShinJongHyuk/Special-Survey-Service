import React,{useState} from 'react';
import MultipleChoiceType from './MultipleChoice.type';
import {DeleteButton,AddButton,MultipleChoice_content_Box,MultipleChoice_Box,MultipleCheck,MultipleCheckText } from './MultipleChoice.styled';


const MultipleChoice = () => {
    const [items, setItems] = useState<any[]>([
        { id: Date.now(), text: '답변 1' },
        { id: Date.now() + 1, text: '답변 2' },
    ]); 

    const handleAddItem = () => {
        setItems([...items, { id: Date.now(), text: '' }]);
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
        <MultipleChoice_Box>
            {items.map((item, index) => (
                <MultipleChoice_content_Box key={item.id}>
                    <MultipleCheck name="radioGroup1" />
                    <MultipleCheckText
                        placeholder={`답변 ${index + 1}`}

                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleItemTextChange(index, e.target.value)}
                    />
                     {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
                     {index === items.length - 1 && (
                        <AddButton onClick={() => handleAddItem()}>혹은 추가</AddButton>
                     )}                
                </MultipleChoice_content_Box>
            ))}
        </MultipleChoice_Box>

    )
}


export default MultipleChoice