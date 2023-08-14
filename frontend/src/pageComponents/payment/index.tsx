"use client";
import React, { useState, useEffect, use } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Selected_Box,
  SelectBox,
  SelectBox_List,
  SelectBox_Option,
  Info_LR_Box,
  Image_Wrapper,
  Info_Top_Box,
  Info_Bottom_Box,
  Info_Inner_Box,
  Bottom_Container,
  Top_Container,
  Main_Inner_Container,
  Title_Text,
  Information_Container,
  Main_Container,
  Pay_Container,
} from "./Payment.Styled";
import useSettingSurveyApiStore from "@/stores/makesurvey/useSettingSurveyApiStore";
import useMakeSurveyApiStore from "@/stores/makesurvey/useMakeSurveyApiStore";
import usePriceStore from "@/stores/usePriceStore";
import useUserStore from "@/stores/useUserStore";
import useSurveyStore from "@/stores/makesurvey/useSurveyStore";
import authenticationDataPost from "@/api/payment/authenticationdata/authenticationData";
import makeSurveyPost from "@/api/makesurvey/makeSurveyPost";
import giveawayListGet from "@/api/payment/givawaylist/giveawayListGet";
import paymentDataPost from "@/api/payment/paymentdata/paymentDataPost";
import usePaymentInfoStore from "@/stores/paymentinfo/usePaymentInfo";
import useSurveyFocus from "@/stores/makesurvey/useSurveyFocusStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Woman_Img from "/public/payment/Woman_Img.svg";
import Target from "/public/survey/Target.png";
import Calendar from "/public/survey/Calendar.png";
import People from "/public/survey/People.png";
import Category from "/public/survey/Category.png";
import Present from "/public/payment/present.svg";
import BackButton from "/public/payment/Back_Button.png";
import Modal from "@/components/modal";
import Kite from '/public/payment/kite.svg'
import Button from '@/components/button';
import ItemBox from '@/components/ItemBox';



interface GiveawayData {
  id: string;
}

declare const window: typeof globalThis & {
  IMP: any;
};

function Payment(props: any) {
  const { title, setTitle, titleContent, closedHeadCount, startTime, endTime, type, surveyTarget, img,resetSettingSurveyData} = useSettingSurveyApiStore();
  const StoreId = process.env.NEXT_PUBLIC_STOREID;
  const {price,increment,decrement} = usePriceStore();
  const {surveyList,reset} = useMakeSurveyApiStore();
  const {orders,setOrderInfo} = usePaymentInfoStore();
  const {surveyComponents,resetSurveyComponents} = useSurveyStore();
  const {resetSelectedSurvey} = useSurveyFocus();
  const [giveawaydata,setGiveaWayData] = useState<GiveawayData[]>([]);
  const [selectedOption,setSelectedOption] = useState<any[]>([]);
  const userInformation = useUserStore((state:any) => state.userInformation)
  const [isSuccessed, setIsSuccessed] = useState(false);
  const [surveyid,setSurveyId] = useState(0);
  const router = useRouter();

  const questions = surveyComponents.map((component, index) => {
    const { componentKey, ...dataWithoutComponentKey } = surveyList[component.componentKey];
    return {
      ...dataWithoutComponentKey,
      questionNumber: index + 1 
    };
  })
  .filter(data => data !== undefined);

  const surveyTargetDict: any = {
    MAN: "남성",
    WOMAN: "여성",
    UNDER_TEENS: "10대 미만",
    TEENS: "10대",
    TWENTIES: "20대",
    THIRTIES: "30대",
    FORTIES: "40대",
    FIFTIES: "50대",
    SIXTIES: "60대 이상",
  };

  const surveyTypeDict: any = {
    INSTANT_WIN: "즉시 당첨",
    NORMAL: "일반 설문",
  };
  useEffect(() => {
    const fetchList = async () => {
      const data = await giveawayListGet();
      setGiveaWayData(data);
    };
    fetchList();
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        router.push("/login");
      }
    };
    checkLoginStatus();
  }, []);

  const handlePaymentButtonClick = () => { 
    const surveyData = {
      title,
      titleContent,
      closedHeadCount,
      startTime,
      endTime,
      type,
      surveyTarget,
      img,
      questions,
      giveaways: selectedOption.map((selected) => ({
        id: selected.option.id,
        count: (selected.option.count),
      })),
    };

    // API 로직
    makeSurveyPost(surveyData)
      .then((responseData) => {
        setSurveyId(parseInt(responseData.id));
        if (responseData) {
          const paymentdata = {
            giveaways: selectedOption.map((selected) => ({
              giveawayName: selected.option.name,
              giveawayNumber: selected.option.count,
            })),
          };
      
          paymentDataPost(paymentdata)
            .then((responseData) => {
              const { IMP } = window;
              if (!window.IMP) return;
              IMP.init(StoreId);
         
              const orderInfo = {
                pg: "kakaopay",
                pay_method: "card",
                merchant_uid: responseData.orderId,
                name: "주문명:결제테스트",
                amount: responseData.orderAmount,
                buyer_email: userInformation.email,
                buyer_name: userInformation.name,
                buyer_tel: userInformation.phoneNumber,
                buyer_addr: "부산광역시 강서구 명지동",
                buyer_postcode: "123-456",
              };

            function callback(response : any) {
              
    
              const authenticateData = {
                surveyId : surveyid,
                amount : response.paid_amount,
                orderId : response.merchant_uid,
                status : response.status,
                impUid : response.imp_uid
              }
             
              authenticationDataPost(authenticateData)
              .then((response) => {
                if (response.isSucess === "paid") {
                console.log(response,"결제 완료")

                resetSettingSurveyData(); 
                resetSurveyComponents();
                reset();
                resetSelectedSurvey();
                setIsSuccessed(true);

                } else {
                  console.log("결제 실패")
                  alert("결제에 실패하였습니다")
                  return
                }
              })
              .catch((error => {
                console.log("검증에 실패하였습니다",error)
                alert("결제에 실패하였습니다")
                return
              }))
            }
            IMP.request_pay(orderInfo,callback)

          }).catch((error) => {
            console.error("상품 정보 제출에 실패하였습니다", error);
          });
        }
      })
      .catch((error) => {
        console.error("설문 제출에 실패하였습니다", error);
      });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedData = giveawaydata[selectedIndex - 1];
    const isOptionSelected = selectedOption.some((selected) => selected.option.id === selectedData.id);
    if (!isOptionSelected) {
      const componentKey = uuidv4();
      setSelectedOption((prevSelectedOption) => [...prevSelectedOption, { option: selectedData, componentKey, countKey: componentKey }]);
    }
  };

  const handleCountChange = (countKey: any, newCount: number) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption.map((selected) =>
        selected.countKey === countKey
          ? {
              ...selected,
              option: { ...selected.option, count: newCount },
            }
          : selected,
      ),
    );
  };

  const handleOptionRemove = (indexToRemove: number) => {
    const removedOption = selectedOption[indexToRemove];
    if (removedOption) {
      setSelectedOption((prevSelectedOption) => prevSelectedOption.filter((_, index) => index !== indexToRemove));

      decrement(parseInt(removedOption.option.price) * removedOption.option.count);
    }
  };

  const handleGoBack = () => {
    router.push("/makesurvey");
  };

  return (
    <>
      <Main_Container>
        <Main_Inner_Container>
          <Image src={BackButton} alt="뒤로가기" style={{ marginRight: "90%" }} onClick={handleGoBack} />
          <Top_Container>
            <Title_Text>결제 Page</Title_Text>
            <Image
              src={Woman_Img}
              width={170}
              height={150}
              alt="컴퓨터 하는 여자"
              style={{ display: "flex", alignItems: "flex-end", marginTop: "32px" }}
            />
          </Top_Container>
          <Bottom_Container>
            <Information_Container>
              <Info_LR_Box>
                <Info_Inner_Box style={{ display: "flex", flexDirection: "row", fontSize: "22px", height: "12%" }}>세부정보</Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={People} alt="인원" style={{ marginRight: "12px" }} />
                    설문 인원
                  </Info_Top_Box>
                  <Info_Bottom_Box>{closedHeadCount}명</Info_Bottom_Box>
                </Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={Target} alt="타겟" style={{ marginRight: "12px" }} />
                    설문 대상
                  </Info_Top_Box>
                  <Info_Bottom_Box style={{ gap: "4%" }}>
                    {surveyTarget && surveyTarget.map((item: any, index: number) => <span key={index}>{surveyTargetDict[item]}</span>)}
                  </Info_Bottom_Box>
                </Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={Category} alt="유형" style={{ marginRight: "12px" }} />
                    설문 유형
                  </Info_Top_Box>
                  <Info_Bottom_Box>{surveyTypeDict[type || "INSTANT_WIN"]}</Info_Bottom_Box>
                </Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={Calendar} alt="기간" style={{ marginRight: "12px" }} />
                    설문 날짜
                  </Info_Top_Box>
                  <Info_Bottom_Box>
                    {startTime} ~ {endTime}
                  </Info_Bottom_Box>
                </Info_Inner_Box>
              </Info_LR_Box>
              <Image_Wrapper>
                <Image src={Kite} alt="연" style={{ transform: "rotate(30deg)", width: "150px", marginLeft: "300px", marginBottom: "20%" }} />
                <Image src={Present} alt="선물상자 " />
              </Image_Wrapper>
          </Information_Container>
          <Pay_Container>
            <Info_Inner_Box style={{ alignItems: "flex-start", height: "9%", padding: "0px 12px" }}>
              상품리스트
            </Info_Inner_Box>
            <SelectBox>
              <SelectBox_List onChange={handleOptionChange}>
                <option key="0" value="">상품을 선택하세요</option>
                {giveawaydata && giveawaydata.map((item: any) => (
                  <SelectBox_Option key={item.id} value={item}>
                    {item.name}
                  </SelectBox_Option>
                ))}
              </SelectBox_List>
            </SelectBox>
            <Selected_Box>
              {selectedOption.length > 0 && (
                <div>
                  {selectedOption.map((selected, index: number) => (
                    <div key={selected.componentKey}>
                      <ItemBox selectedOption={selected.option} countKey={selected.countKey} handleCountChange={handleCountChange} />
                      <Button onClick={() => handleOptionRemove(index)} use="blackwhite" label="삭제하기" style={{alignItems : "center", height : "6%", fontSize : "16px", marginTop : "2px",borderRadius : "4px",border : "3px solid yellow"}} />       
                </div>
                  ))}
                </div>
                )}
            </Selected_Box>
            <Info_Inner_Box style={{alignItems : "center", height : "6%", fontSize : "18px", marginTop : "10px"}}>총 금액 : {price}원</Info_Inner_Box>
            <div style={{ width: "90%", height: "8%" }}>
                 <Button onClick={handlePaymentButtonClick} use="longYellow" label="결제하기" />
            </div>
              {isSuccessed && (
              <Modal
                isOpen={isSuccessed}
                onClose={() => {
                  setIsSuccessed(false);
                  router.push("/");
                }}
                bigtext="결제가 완료되었습니다!"
                imgsrc="/modal/greencheck.png"
                confirm="주문 정보 확인"
                cancel="확인"
                onConfirmClick={() => {
                  setIsSuccessed(false);
                  router.push(`/surveyresult/${surveyid}`)
                }}
              />
              )}
          </Pay_Container>
        </Bottom_Container>
      </Main_Inner_Container>
    </Main_Container>
  </>
  );
}

export default Payment;
