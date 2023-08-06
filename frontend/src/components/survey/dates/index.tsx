import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {DeleteButton,AddButton,Dates_content_Box,Dates_Box,MultipleCheck} from './Dates.styled';

const Dates = ({ componentKey }: { componentKey: string }) => {
        const [items, setItems] = useState<any[]>([
          { id: `${componentKey}_1`, date: ''},
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

        return (
          <Dates_Box>
            {items.map((item, index) => (
              <Dates_content_Box key={item.id}>
            
                {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
                <MultipleCheck 
                  name="DateGroup"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleItemDateChange(index, event)}
                  value={item.date} />
              </Dates_content_Box>
            ))}
          </Dates_Box>
        );
      };


export default Dates;