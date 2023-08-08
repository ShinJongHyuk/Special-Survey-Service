import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ImageIcon from '/public/survey/ImageIcon.png'
import {DeleteButton,AddButton,Time_content_Box,Time_Box,MultipleCheck} from './Time.styled';


const Time = ({ componentKey }: { componentKey: string }) => {


        const [items, setItems] = useState<any[]>([
          { id: `${componentKey}_1`, time: ''},
        ]);
        
        useEffect(() => {
          const storedItems = loadTimeFromLocalStorage(`TIME_FORM_${componentKey}`);
          if (storedItems) {
            setItems(storedItems);
          }
        }, [componentKey]);


        useEffect(() => {
          saveTimeToLocalStorage(`TIME_FORM_${componentKey}`, items);
        }, [componentKey,items]);

        const saveTimeToLocalStorage = (componentKey: string, items: any[]) => {
          localStorage.setItem(`TIME_FORM_${componentKey}`, JSON.stringify(items));
        };

        const loadTimeFromLocalStorage = (componentKey: string) => {
          const storedData = localStorage.getItem(`TIME_FORM_${componentKey}`);

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

        return (
          <Time_Box>
            {items.map((item, index) => (
              <Time_content_Box key={item.id}>
                {items.length > 1 && <DeleteButton onClick={() => handleDeleteItem(index)}>X</DeleteButton>}
                <MultipleCheck 
                  name="DateGroup"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleItemTimeChange(index, event)}
                  value={item.time} />              
              </Time_content_Box>
            ))}
          </Time_Box>
        );
      };


export default Time;