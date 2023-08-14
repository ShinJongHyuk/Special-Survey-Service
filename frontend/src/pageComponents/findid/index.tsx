"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import { FindIdPage, FindIdTitle, InputBox, LoginContainer } from "./FindId.styled";
import { SignUpText, SignUpItem } from "../signup/Signup.styled";
import findIdPost from "@/api/user/findIdPost";
import { useRouter } from "next/navigation";

const FindId = () => {
  const router = useRouter();

  const SubmitFindId = async (e: any) => {
    e.preventDefault();
    const phoneNumber = e.target.phoneNumber.value;
    const res = await findIdPost(phoneNumber);
    if (!res.success) {
      alert("아이디가 존재하지 않습니다.");
      return;
    }
    alert(`가입 하신 이메일은 ${res.response.email} 입니다.`);
    router.push(`/login`);
  };

  return (
    <FindIdPage>
      <FindIdTitle>아이디 찾기</FindIdTitle>
      <LoginContainer onSubmit={SubmitFindId}>
        <SignUpItem>
          <SignUpText>휴대폰 번호</SignUpText>
          <InputBox>
            <Input placeholder="010-1234-1234" type="tel" name="phoneNumber" />
          </InputBox>
        </SignUpItem>

        <div style={{ height: "48px", width: "410px", marginTop: "10px", marginLeft: "10px" }}>
          <Button use="SignUpLogin" label="아이디 찾기" type="submit"></Button>
        </div>
      </LoginContainer>
    </FindIdPage>
  );
};

export default FindId;
