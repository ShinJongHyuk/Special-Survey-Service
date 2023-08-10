'use client'

import React, { useState, useEffect } from 'react';
import Payment from "@/pageComponents/payment";
import { SessionProvider } from "next-auth/react";

export default function PaymentPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    jqueryScript.onload = () => {
      const iamportScript = document.createElement('script');
      iamportScript.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.5.js';
      iamportScript.onload = () => {
        setScriptLoaded(true);
      };
      document.head.appendChild(iamportScript);
    };
    document.head.appendChild(jqueryScript);

    return () => {
      document.head.removeChild(jqueryScript);
    };
  }, []);

  return (
    <>
      {scriptLoaded && <Payment />}
    </>
  );
}