"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import { DuplInput, DuplBox, DuplicationButton, FindIdPage, FindIdTitle, InputBox, LoginContainer } from "./FindId.styled";
import { SignUpText, SignUpItem } from "../signup/Signup.styled";
import resetPassword from "@/api/user/resetPasswordPatch";
import messageCertPost from "@/api/user/messageCertPost";
import messageCertPost2 from "@/api/user/messageCertPost2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const FindId = () => {
  const router = useRouter();
  const [telNumber, setTelNumber] = useState("")
  const [certNumber, setCertNumber] = useState("")
  const [isCert, setIsCert] = useState({
    tel: false,
    certNum: false
  })

  // 인증번호 전송
  const SendCertNum = async () => {
    const newPhoneNumber = telNumber.replaceAll("-", "");
    if (newPhoneNumber != "") {
      const res = await messageCertPost(newPhoneNumber);
      if (res.data.success === true) {
        alert("인증문자 전송이 완료되었습니다.");
      } else if (res.data.success === false) {
        alert(res.data.apiError.message);
      }
    }
  };


  // 문자 인증 확인
  const Certification = async () => {
    const data = {
      phoneNumber: telNumber,
      certAuthCode: certNumber,
    };

    const res = await messageCertPost2(data);
    console.log(res)
    if (res.data.success === true) {
      setIsCert(() => {
        return {
          tel: true,
          certNum: true,
        };
      });
      alert(res.data.response);
    } else if (res.data.success === false) {
      alert(res.data.apiError.message);
    }
  };

  const SubmitChangePassword = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await resetPassword(data);
    if (!res.data.success) {
      alert("아이디가 존재하지 않습니다.");
      return;
    }
    alert(`비밀번호 변경에 성공하셨습니다.`);
    router.push(`/login`);
  };

  return (
    <FindIdPage>
      <FindIdTitle>비밀번호 재설정</FindIdTitle>
      <LoginContainer onSubmit={SubmitChangePassword}>
        {!isCert.tel &&
          <>
            <SignUpItem>
              <SignUpText>휴대폰 번호</SignUpText>
              <DuplBox>
                <DuplInput>
                  <Input value={telNumber} onChange={(e: any) => setTelNumber(e.target.value)} placeholder="010-1234-1234" type="tel" name="phoneNumber" />
                </DuplInput>
                <DuplicationButton onClick={SendCertNum} type="button" iscert={isCert.tel}>
                  인증번호 발송
                </DuplicationButton>
              </DuplBox>
            </SignUpItem>
            <SignUpItem>
              <SignUpText>인증번호</SignUpText>
              <InputBox>
                <Input value={certNumber} onChange={(e: any) => setCertNumber(e.target.value)} placeholder="000000" type="text" name="certNum" />
              </InputBox>
            </SignUpItem>
            <div style={{ height: "48px", width: "410px", marginTop: "10px", marginLeft: "10px" }}>
              <Button onClick={Certification} use="SignUpLogin" label="인증하기" type="button"></Button>
            </div>
          </>}
        {
          isCert.tel && <>
          </>
        }

        {
          isCert.certNum &&
          <>
            <SignUpItem>
              <SignUpText>이메일</SignUpText>
              <InputBox>
                <Input placeholder="email@naver.com" type="email" name="email" />
              </InputBox>
            </SignUpItem>

            <SignUpItem>
              <SignUpText>변경할 비밀번호</SignUpText>
              <InputBox>
                <Input placeholder="password" type="password" name="password" />
              </InputBox>
            </SignUpItem>

            <div style={{ height: "48px", width: "410px", marginTop: "10px", marginLeft: "10px" }}>
              <Button use="SignUpLogin" label="비밀번호 변경" type="submit"></Button>
            </div>
          </>
        }
      </LoginContainer >
    </FindIdPage >
  );
};

export default FindId;
