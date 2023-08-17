"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import Image from "next/image";
import { LoginPage, LoginText, InputBox, LoginFont, LoginFont2, LoginContainer } from "./Login.styled";
import { SignUpText, SignUpItem } from "../signup/Signup.styled";
import { useRouter } from "next/navigation";
import { useLoginHook } from "@/Hooks/user/useLoginHook";
import { useEffect } from "react";
import Link from "next/link";
const Login = () => {
  const { handleChange, handleSubmit, handleOnChange, inputState, user, isRemember } = useLoginHook();

  useEffect(() => {
    const checkbox = document.getElementById("LoginState") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = isRemember;
    }
  }, [isRemember]);

  const router = useRouter();

  return (
    <LoginPage>
      <LoginText>Login</LoginText>
      <LoginContainer onSubmit={handleSubmit}>
        <SignUpItem>
          <SignUpText>이메일</SignUpText>
          <InputBox>
            <Input type="email" name="email" onChange={handleChange} inputstate="true" defaultValue={user.email} />
          </InputBox>
        </SignUpItem>

        <SignUpItem>
          <SignUpText>비밀번호</SignUpText>
          <InputBox>
            <Input type="password" name="password" onChange={handleChange} inputstate="true" />
          </InputBox>
        </SignUpItem>

        {/* <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "20px" }}> */}
        <div style={{ height: "48px", width: "410px", marginTop: "10px", marginLeft: "10px" }}>
          <Button use="SignUpLogin" label="로그인" type="submit"></Button>
        </div>
        {/* </div> */}

        <label htmlFor="LoginState" style={{ display: "flex", alignItems: "center", margin: "22px 0px 0px 0px", borderBottom: "2px solid black" }}>
          <div style={{ width: "15px", height: "15px", marginBottom: "10px" }}>
            <Input type="checkbox" name="LoginState" id="LoginState" onClick={handleOnChange} defaultChecked={isRemember} />
          </div>

          <LoginFont>아이디 기억하기</LoginFont>
        </label>
      </LoginContainer>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link href="/agreement">
          <LoginFont2>회원가입</LoginFont2>
        </Link>
        <p> / </p>
        <Link href="/find-id">
          <LoginFont2>아이디 찾기</LoginFont2>
        </Link>
        <Link href="/reset-password">
          <LoginFont2>비밀번호 재설정</LoginFont2>
        </Link>
      </div>
    </LoginPage>
  );
};

export default Login;
