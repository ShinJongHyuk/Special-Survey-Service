'use client'
import React,{useState} from "react";
import {useRouter} from 'next/navigation'
import { ButtonBox,StyledTbody, StyledTfoot, StyledThead, StyledTd, StyledTr, StyledTable, StyledTh, Title_Text, AgreementPage, Main_Container, Information_Container } from "./Agreement.Styled";
import Button from "@/components/button";
import theme from "@/styles/DefaultTheme";
import Modal from "@/components/modal";
const Agreement = () => {
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false); // 모달창 띄우기 여부
  const router = useRouter();

  const handleAgreeClick = () => {
    if (agreed) {

      router.push("/signup");
    } else {
      setShowModal(true);
    }
  };
  return (
    <AgreementPage>
      <Main_Container>
        <Information_Container>
          <StyledTable>
            <StyledThead>
              <StyledTr>
                <StyledTh colSpan={3} style={{textAlign : 'center'}}>개인정보 수집 및 이용에 동의해주세요.</StyledTh>
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              <StyledTr>
                <StyledTd colSpan={3} style={{textAlign : 'center'}}>동의한 인원에 한하여 이벤트 추첨이 진행됩니다.</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd colSpan={3} style={{textAlign : 'center' ,fontSize : "18px"}}>[세부 내용]</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTh style={{textAlign : 'center'}}>수집 목적</StyledTh>
                <StyledTd colSpan={3} style={{textAlign : 'center'}}>설문조사 응답자 기프티콘 보상</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTh style={{textAlign : 'center'}}>수집 항목</StyledTh>
                <StyledTd colSpan={2} style={{textAlign : 'center'}}>이름, 휴대폰, 설문정보</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTh style={{textAlign : 'center'}}>보유 및 이용 기간</StyledTh>
                <StyledTd colSpan={2} style={{textAlign : 'center'}}>입력일로부터 1년까지</StyledTd>
              </StyledTr>
            </StyledTbody>
          </StyledTable>
          <ButtonBox>
          <Button use='gender' style={{ backgroundColor: agreed === true ? theme.colors.yellow : theme.colors.lightgray, width: "50%", fontSize : '20px'}} onClick={() => {setAgreed(true),setShowModal(false)}} label="동의할래요" />
            <Button use='gender' style={{ backgroundColor: theme.colors.lightgray, width: "50%",fontSize : '20px'}}  onClick={() => {setAgreed(false),setShowModal(true)}} label="동의하지 않을래요" />
          </ButtonBox>
          <ButtonBox>
            <Button use='gender' style={{ backgroundColor: agreed ? theme.colors.lightpurple : theme.colors.red, width: "100%",fontSize : '20px'}} onClick={handleAgreeClick} label="회원가입 하러가기" />
          </ButtonBox>
          {showModal && (
            <Modal isOpen={showModal} bigtext="동의하지 않으시면 설문을 진행하실 수 없습니다" confirm="확인" cancel="취소" onConfirmClick={() => setShowModal(false)} onClose={() => setShowModal(false)} />
           )}
        </Information_Container>
      </Main_Container>
    </AgreementPage>
  );
};

export default Agreement;