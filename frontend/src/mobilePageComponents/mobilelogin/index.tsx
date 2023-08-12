"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import Image from "next/image";
import { LoginPage, LoginText, LoginFont2, LoginContainer, Uptext } from "./Mobilelogin.styled";
import { useRouter } from "next/navigation";
import { useLoginHook } from "@/Hooks/user/useLoginHook";
const Login = () => {
  const { handleChange, handleSubmit, user } = useLoginHook();

  const router = useRouter();

  return (
    <LoginPage>
      <LoginText>Login</LoginText>
      <LoginContainer onSubmit={handleSubmit}>
        <div style={{ margin: "10px 20px" }}>
          <Uptext>이메일</Uptext>
          <div style={{ width: "80vw", margin: "10px", height: "50px" }}>
            <Input type="email" name="email" onChange={handleChange} inputstate="true" defaultValue={user.email} />
          </div>
        </div>

        <div style={{ margin: "10px 20px" }}>
          <Uptext>비밀번호</Uptext>
          <div style={{ width: "80vw", margin: "10px", height: "50px" }}>
            <Input type="password" name="password" onChange={handleChange} inputstate="true" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <div style={{ height: "48px", width: "80vw", margin: "20px 20px 20px 5px" }}>
            <Button use="SignUpLogin" label="로그인" type="submit"></Button>
          </div>

          <LoginFont2
            onClick={() => {
              console.log("click");
              router.push("/signup");
            }}
          >
            SSS 회원가입
          </LoginFont2>
        </div>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
