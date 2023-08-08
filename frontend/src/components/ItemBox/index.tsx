"use client";
import React from "react";
import Image from "next/image";
import { ItemBoxType } from "./ItemBox.type";
import { Main_Box,Top_Box,Bottom_Box,Item_Img} from "./ItemBox.styled";


const ItemBoxComponent = ({ selectedOption }: { selectedOption: any[] }) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  console.log(selectedOption)


  return (
    <Main_Box>
        <Top_Box>
            <Item_Img src={images.CHICKEN} alt="치킨" />
        </Top_Box>
        <Bottom_Box>

        </Bottom_Box>
    </Main_Box>

  )

};

export default ItemBoxComponent;
