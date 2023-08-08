"use client";
import React, {useState,useEffect} from 'react'
import {Selected_Box,SelectBox,SelectBox_List,SelectBox_Option,Info_LR_Box,Image_Wrapper,Info_Top_Box,Info_Bottom_Box,Info_Inner_Box,Bottom_Container,Top_Container,Main_Inner_Container, Title_Text,Information_Container, Main_Container, Pay_Container } from './Payment.Styled';
import useSettingSurveyApiStore from '@/stores/makesurvey/useSettingSurveyApiStore';
import Image from 'next/Image'
import giveawayListGet from "@/api/givawaylist/giveAwayListGet";
import Woman_Img from '/public/payment/Woman_Img.svg'
import Target from '/public/survey/Target.png'
import Calendar from '/public/survey/Calendar.png'
import People from '/public/survey/People.png'
import Category from '/public/survey/Category.png'
import Present from '/public/payment/present.svg'
import Kite from '/public/payment/kite.svg'
import Button from '@/components/button';
import ItemBox from '@/components/ItemBox';

function Payment(props: any) {
  const {closedHeadCount,startTime,endTime,type,surveyTarget} = useSettingSurveyApiStore();
  const [giveawaydata,setGiveaWayData] = useState([])
  const [selectedOption,setSelectedOption] = useState<any[]>([])
  useEffect(() => {
    const fetchList = async () => {
      const data = await giveawayListGet();
      setGiveaWayData(data);
    };
    fetchList();
    
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedData = giveawaydata[selectedIndex - 1]; 
    setSelectedOption(prevSelectedOptions => [...prevSelectedOptions, selectedData]); 
  };

  return (
    <Main_Container>
      <Main_Inner_Container>
        <Top_Container>
          <Title_Text>결제 Page</Title_Text> 
          <Image src={Woman_Img} width={170} height={150} alt="컴퓨터 하는 여자" style={{display : 'flex', alignItems : 'flex-end' , marginTop : "32px"}} />
        </Top_Container>
        <Bottom_Container>
          <Information_Container>
            <Info_LR_Box>
              <Info_Inner_Box style={{display : "flex", flexDirection : "row",fontSize: '22px', height : "12%"}}>세부정보</Info_Inner_Box>
              <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={People} alt="인원" style={{marginRight : "12px"}}/>
                    설문 인원
                  </Info_Top_Box>
                  <Info_Bottom_Box>{closedHeadCount}</Info_Bottom_Box>
                </Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={Target} alt="타겟" style={{marginRight : "12px"}} />
                    설문 대상
                  </Info_Top_Box>
                  <Info_Bottom_Box>{surveyTarget}</Info_Bottom_Box>
                </Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={Category} alt="유형" style={{marginRight : "12px"}} />
                    설문 유형
                  </Info_Top_Box>
                  <Info_Bottom_Box>{type}</Info_Bottom_Box>
                </Info_Inner_Box>
                <Info_Inner_Box>
                  <Info_Top_Box>
                    <Image src={Calendar} alt="기간" style={{marginRight : "12px"}} />
                    설문 날짜
                  </Info_Top_Box>
                  <Info_Bottom_Box>{startTime} ~ {endTime}</Info_Bottom_Box>
                </Info_Inner_Box>
              </Info_LR_Box>
              <Image_Wrapper>
                <Image src={Kite} alt="연"style={{transform: "rotate(30deg)",width: "100%",marginLeft : "300px",marginBottom : "120px"}} />
              < Image src={Present} alt="선물상자 " />
              </Image_Wrapper>
          </Information_Container>
          <Pay_Container>
            <Info_Inner_Box style={{ alignItems: "flex-start", height: "8%", padding: "0px 12px" }}>
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
                  {selectedOption.map((option: any) => (
                    <ItemBox key={option.id} selectedOption={option} />
                  ))}
                </div>
                )}
            </Selected_Box>
            <Info_Inner_Box style={{alignItems : "center", height : "6.5%", fontSize : "18px", marginTop : "10px"}}>총 금액 : 0원</Info_Inner_Box>
            <div style={{ width: "90%", height: "10%" }}>
                 <Button use="longYellow" label="결제하기" />
            </div>
          </Pay_Container>
        </Bottom_Container>
      </Main_Inner_Container>
    </Main_Container>
  );
};

export default Payment;
