'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { StyledTitleTh, ButtonBox, StyledTd, StyledTable, StyledTh, Main_Container, Information_Container } from "./Agreement.Styled";
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
    <div style={{ paddingTop: "120px" }}>
      <Main_Container>
        <Information_Container>
          <StyledTable>
            <thead>
              <tr>
                <StyledTitleTh colSpan={3} style={{ textAlign: 'center', fontSize: "20px" }}>개인정보 수집 및 이용 동의</StyledTitleTh>
              </tr>
            </thead>
            <tbody>
              <tr>
                <StyledTd colSpan={3} style={{ textAlign: 'center', color: "gray", fontFamily: theme.fonts.HangeulFontMedium, fontSize: "14px" }}>서비스 가입을 위해 개인정보에 동의해주세요</StyledTd>
              </tr>
              <tr>
                <StyledTd colSpan={3} style={{ textAlign: 'center' }}>[세부 내용]</StyledTd>
              </tr>
              <tr>
                <StyledTh style={{ textAlign: 'center' }}>수집 목적</StyledTh>
                <StyledTd colSpan={3} style={{ textAlign: 'center' }}>설문조사 응답자 기프티콘 보상</StyledTd>
              </tr>
              <tr>
                <StyledTh style={{ textAlign: 'center' }}>수집 항목</StyledTh>
                <StyledTd colSpan={2} style={{ textAlign: 'center' }}>이름, 휴대폰, 설문정보</StyledTd>
              </tr>
              <tr>
                <StyledTh style={{ textAlign: 'center' }}><p>보유 및</p><p> 이용 기간</p></StyledTh>
                <StyledTd colSpan={2} style={{ textAlign: 'center' }}>입력일로부터 1년까지</StyledTd>
              </tr>
            </tbody>
          </StyledTable>
          <div style={{ width: "90%" }}>

            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "50%", height: "46px" }}>
                <Button use='gender' style={{ backgroundColor: agreed === true ? theme.colors.yellow : theme.colors.lightgray, fontSize: '16px' }} onClick={() => { setAgreed(true), setShowModal(false) }} label="동의할래요" />
              </div>
              <div style={{ width: "50%", height: "46px" }}>
                <Button use='gender' style={{ backgroundColor: theme.colors.lightgray, fontSize: '16px' }} onClick={() => { setAgreed(false), setShowModal(true) }} label="동의하지 않을래요" />
              </div>
            </div>
            <div style={{ width: "100%", height: "46px" }}>
              <Button use='gender' style={{ backgroundColor: agreed ? theme.colors.lightpurple : "lightgray", width: "100% ", fontSize: '16px' }} onClick={handleAgreeClick} label="회원가입 하러가기" />
            </div>
          </div>
          {showModal && (
            <Modal isOpen={showModal} bigtext="동의하지 않으시면 설문을 진행하실 수 없습니다" confirm="확인" cancel="취소" onConfirmClick={() => setShowModal(false)} onClose={() => setShowModal(false)} />
          )}
        </Information_Container>
      </Main_Container>
    </div>
  );
};

export default Agreement;