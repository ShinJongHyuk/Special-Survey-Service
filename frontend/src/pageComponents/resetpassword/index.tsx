"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import { FindIdPage, FindIdTitle, InputBox, LoginContainer } from "./FindId.styled";
import { SignUpText, SignUpItem } from "../signup/Signup.styled";
import resetPassword from "@/api/user/resetPasswordPatch";
import { useRouter } from "next/navigation";

const FindId = () => {
  const router = useRouter();

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
      </LoginContainer>
    </FindIdPage>
  );
};

export default FindId;
