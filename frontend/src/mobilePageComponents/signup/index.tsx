"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import { SignupText, SignUpPage, SignUpContainer, PasswordCondition, DuplicationButton, SignUpText } from "./Signup.styled";
import { useSignupHook } from "@/Hooks/user/useSignupHook";

const MobileSignup = () => {
  const AgeButtons = [
    { label: "~9", id: "UNDER_TEENS" },
    { label: "10~19", id: "TEENS" },
    { label: "20~29", id: "TWENTIES" },
    { label: "30~39", id: "THIRTIES" },
    { label: "40~49", id: "FORTIES" },
    { label: "50~59", id: "FIFTIES" },
    { label: "60~", id: "SIXTIES" },
  ];
  const {
    user,
    isCert,
    changePassWordCert,
    handleSubmit,
    handleClick,
    SendCertNum,
    changeUserValue,
    Certification,
    duplicationEmail,
    duplicationPhoneNumber,
  } = useSignupHook();

  return (
    <SignUpPage>
      <SignupText>Sign up</SignupText>
      <SignUpContainer onSubmit={handleSubmit}>
        <div>
          <SignUpText>이메일</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
            <Input type="email" name="email" inputState={isCert.email} onChange={changeUserValue} />
            <DuplicationButton type="button" iscert={isCert.email} onClick={duplicationEmail}>
              {isCert.email == "true" ? "인증완료" : "중복확인"}
            </DuplicationButton>
          </div>
        </div>

        <div>
          <SignUpText>휴대폰 번호</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
            <Input type="tel" name="phoneNumber" disabled={isCert.tel === "true"} inputState={isCert.tel} onChange={changeUserValue} />
            {isCert.tel === "true" ? (
              <DuplicationButton type="button" iscert={isCert.tel} onClick={SendCertNum}>
                인증번호 발송
              </DuplicationButton>
            ) : (
              <DuplicationButton type="button" onClick={duplicationPhoneNumber}>
                중복확인
              </DuplicationButton>
            )}
          </div>
        </div>

        {isCert.tel == "true" && (
          <div>
            <SignUpText>인증번호</SignUpText>
            <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
              <Input type="text" name="certNum" onChange={changeUserValue} />
              <DuplicationButton type="button" iscert={isCert.certNum} onClick={Certification}>
                {isCert.certNum === "true" ? "인증완료" : "인증하기"}
              </DuplicationButton>
            </div>
          </div>
        )}

        <div>
          <SignUpText>비밀번호</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
            <Input onBlur={changePassWordCert} onChange={changeUserValue} inputState="true" type="password" name="password" />
          </div>
          <PasswordCondition isPasswordRegex={isCert.password}> 8~16자 영문, 숫자, 특수문자를 사용하세요.</PasswordCondition>
        </div>

        <div>
          <SignUpText>비밀번호 확인</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
            <Input type="password" name="password2" />
          </div>
        </div>

        <div>
          <SignUpText>이름</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
            <Input type="text" name="name" />
          </div>
        </div>
        <div>
          <SignUpText>생년월일</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px", gap: "10px" }}>
            <Input type="date" name="birthday" />
          </div>
        </div>

        <div>
          <SignUpText>성별</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px" }}>
            <Button use="gender" label="남성" type="button" name="MAN" checkgender={user.gender} onClick={handleClick}></Button>
            <Button use="gender" label="여성" type="button" name="WOMAN" checkgender={user.gender} onClick={handleClick}></Button>
          </div>
        </div>

        <div>
          <SignUpText>나이</SignUpText>
          <div style={{ width: "85vw", display: "flex", marginLeft: "10px", height: "40px" }}>
            {AgeButtons.map(({ label, id }) => {
              return <Button use="age" label={label} type="button" id={id} checkage={user.age} onClick={handleClick}></Button>;
            })}
          </div>
        </div>

        <div style={{ height: "48px", width: "85vw", margin: "10px" }}>
          <Button use="SignUpLogin" label="회원가입" type="submit"></Button>
        </div>
      </SignUpContainer>
    </SignUpPage>
  );
};

export default MobileSignup;
