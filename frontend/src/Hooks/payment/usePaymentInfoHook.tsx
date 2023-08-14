'use client'
import PaymentInfoGet from "@/api/payment/paymentinfo/PaymentInfoGet";
import { useEffect, useState } from "react"

const usePaymentInfoHook = () => {
    const [paymentInfo, setPaymentInfo] = useState<any>({});


    const getPaymentInfo = async (id : any) => {

        const res = await PaymentInfoGet(id);
        if (res.data.success) {
            setPaymentInfo(res.data.response);
        }
    };


    return { paymentInfo,getPaymentInfo };
}

export default usePaymentInfoHook;
