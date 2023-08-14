import React, { useState, useEffect } from 'react';
import { Info_Inner_Box, Info_Bottom_Box, Info_Top_Box, Info_LR_Box, Image_Wrapper, Information_Container, PaymentInfoPage, Main_Container, Main_Inner_Container, Top_Container, Bottom_Container, Title_Text } from './PaymentInfo.Styled';
import usePaymentInfoHook from '@/Hooks/payment/usePaymentInfoHook';
import Image from 'next/image';
import purple_man from '/public/paymentInfo/payment_man_purple.svg'
import yellow_man from '/public/paymentInfo/payment_man_yellow.svg'
import Number from "/public/paymentInfo/Number.svg"
import Address from "/public/paymentInfo/Address.svg"
import Email from "/public/paymentInfo/Email.svg"
import isPay from "/public/paymentInfo/IsPay.svg"
import Name from "/public/paymentInfo/Name.svg"
import Phone from "/public/paymentInfo/Phone.svg"
import PaymentMethod from "/public/paymentInfo/PaymentMethod.svg"
import Amount from "/public/paymentInfo/Amount.svg"
import ListCheck from "/public/paymentInfo/ListCheck.svg"


function PaymentInfo(props : any) {
    
    const [showBackSide, setShowBackSide] = useState(false);

    return (
        <PaymentInfoPage>
            <Main_Container>
                <Main_Inner_Container>
                    <Top_Container>
                        <Title_Text>
                            <Image src={ListCheck} alt="결제 정보 확인" width={40} height={40} style={{ marginRight: "12px" }} />
                            결제 정보 확인
                        </Title_Text>
                    </Top_Container>
                    <Bottom_Container>
                        <Information_Container onMouseEnter={() => setShowBackSide(true)} onMouseLeave={() => setShowBackSide(false)}>
                            {showBackSide ? (
                                <>
                                    <div style={{ display: "flex", width: "100%", height: "100%", transform: "rotateY(180deg)", transition: "transform 0.5s ease-in-out" }}>
                                        <Info_LR_Box>
                                            <Info_Inner_Box>
                                                <Info_Top_Box>
                                                    <Image src={Name} alt="이름" width={30} height={30} style={{ marginRight: "12px" }} />
                                                    구매자 성명
                                                </Info_Top_Box>
                                                <Info_Bottom_Box style={{ gap: "4%", border: '3.5px solid gold' }}>

                                                </Info_Bottom_Box>
                                            </Info_Inner_Box>
                                            <Info_Inner_Box>
                                                <Info_Top_Box>
                                                    <Image src={Phone} alt="번호" width={30} height={30} style={{ marginRight: "12px" }} />
                                                    구매자 번호
                                                </Info_Top_Box>
                                                <Info_Bottom_Box style={{ gap: "4%", border: '3.5px solid gold' }}>

                                                </Info_Bottom_Box>
                                            </Info_Inner_Box>
                                            <Info_Inner_Box>
                                                <Info_Top_Box>
                                                    <Image src={Email} alt="이메일" width={30} height={30} style={{ marginRight: "12px" }} />
                                                    구매자 email
                                                </Info_Top_Box>
                                                <Info_Bottom_Box style={{ gap: "4%", border: '3.5px solid gold' }}>

                                                </Info_Bottom_Box>
                                            </Info_Inner_Box>
                                            <Info_Inner_Box>
                                                <Info_Top_Box>
                                                    <Image src={Address} alt="주소" width={30} height={30} style={{ marginRight: "12px" }} />
                                                    구매자 주소
                                                </Info_Top_Box>
                                                <Info_Bottom_Box style={{ gap: "4%", border: '3.5px solid gold' }}>

                                                </Info_Bottom_Box>
                                            </Info_Inner_Box>
                                        </Info_LR_Box>
                                        <Image_Wrapper>
                                            <Image src={yellow_man} alt="결제 꾸미기 1" style={{ maxWidth: "90%", minWidth: "80%" }} />
                                        </Image_Wrapper>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Info_LR_Box>
                                        <Info_Inner_Box>
                                            <Info_Top_Box>
                                                <Image src={Number} alt="인원" width={30} height={30} style={{ marginRight: "12px", marginBottom: "2px" }} />
                                                설문지 번호
                                            </Info_Top_Box>
                                            <Info_Bottom_Box style={{ gap: "4%" }}>

                                            </Info_Bottom_Box>
                                        </Info_Inner_Box>
                                        <Info_Inner_Box>
                                            <Info_Top_Box>
                                                <Image src={PaymentMethod} alt="결제 방법" width={30} height={30} style={{ marginRight: "12px", marginBottom: "2px" }} />
                                                결제 방법
                                            </Info_Top_Box>
                                            <Info_Bottom_Box style={{ gap: "4%" }}>

                                            </Info_Bottom_Box>
                                        </Info_Inner_Box>
                                        <Info_Inner_Box>
                                            <Info_Top_Box>
                                                <Image src={Amount} alt="결제 금액" width={30} height={30} style={{ marginRight: "12px", marginBottom: "2px" }} />
                                                상품 결제 금액
                                            </Info_Top_Box>
                                            <Info_Bottom_Box style={{ gap: "4%" }}>

                                            </Info_Bottom_Box>
                                        </Info_Inner_Box>
                                        <Info_Inner_Box>
                                            <Info_Top_Box>
                                                <Image src={isPay} alt="결제 여부" width={30} height={30} style={{ marginRight: "12px", marginBottom: "2px" }} />
                                                결제 여부
                                            </Info_Top_Box>
                                            <Info_Bottom_Box>

                                            </Info_Bottom_Box>
                                        </Info_Inner_Box>
                                    </Info_LR_Box>
                                    <Image_Wrapper>
                                        <Image src={purple_man} alt="결제 꾸미기 1" style={{ maxWidth: "80%", minWidth: "70%" }} />
                                    </Image_Wrapper>
                                </>
                            )}

                        </Information_Container>
                    </Bottom_Container>
                </Main_Inner_Container>
            </Main_Container>
        </PaymentInfoPage>
    )
}

export default PaymentInfo;