"use client";
import React from 'react'
import { Title_Text,Information_Container, Main_Container, Pay_Container } from './Payment.Styled';
import Image from 'next/Image'
import Woman_Img from '/public/payment/Woman_Img.svg'
function Payment() {
  return (
    <Main_Container>
        <Title_Text>결제 Page</Title_Text> 
        <Image src={Woman_Img} width={170} height={170} alt="컴퓨터 하는 여자" style={{ position : 'absolute', top : "-4%" , left : "22%"}} />
        <Information_Container>

        </Information_Container>
        <Pay_Container>

        </Pay_Container>
    </Main_Container>
  );
};

export default Payment;
