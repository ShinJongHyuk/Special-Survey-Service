"use client";
import React, {useState,useEffect} from "react";
import Image from "next/image";
import { ItemBoxType } from "./ItemBox.type";
import { Main_Box,Top_Box,Bottom_Box,Item_Img,Bottom_Inner} from "./ItemBox.styled";
import Button from "../button";
import usePriceStore from "@/stores/usePriceStore";


const ItemBoxComponent = ({ selectedOption, countKey, handleCountChange }: { selectedOption: any, countKey: any, handleCountChange: (countKey: any, newCount: number) => void }) => {
  const [count, setCount] = useState(0);
  const { increment, decrement } = usePriceStore();
  const images: { [key: string]: any } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };

  const handlePlus = () => {
    setCount(prevCount => prevCount + 1);
    increment(selectedOption.price);
    handleCountChange(countKey, count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      decrement(selectedOption.price);
      handleCountChange(countKey, count - 1);
    }
  };


  return (
    <Main_Box>
        <Top_Box>
          <Item_Img  src={images[selectedOption.giveawayType]} alt="상품 사진" />
        </Top_Box>
        <Bottom_Box>
            <div>[{selectedOption.name}]</div>
            <Bottom_Inner>
            <div style={{color : 'black'}}> <mark style={{ backgroundColor: 'white', color: 'black' }}>수량 {count}</mark></div>
            <Button use="longYellow" label="-" onClick={handleMinus} style={{width : "50px", height : "20px", fontSize : "14px"}} />
            <Button use="longYellow" label="+" onClick={handlePlus} style={{width : "50px", height : "20px", fontSize : "14px"}} />
            </Bottom_Inner>
        </Bottom_Box>
    </Main_Box>

  )

};

export default ItemBoxComponent;
