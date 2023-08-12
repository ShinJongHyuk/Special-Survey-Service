"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import {
  DuplicationBox,
  InputBox,
  SignupText,
  SignUpPage,
  InputRadioBox,
  SignUpContainer,
  PasswordCondition,
  DuplicationButton,
  InputButtonBox,
} from "./Signup.styled";
import { useSignupHook } from "@/Hooks/user/useSignupHook";
import InputBoxItem from "./components/InputBox";

const Signup = () => {
  const inputArr = [
    { title: "비밀번호 확인", type: "password", name: "password2" },
    { title: "이름", type: "text", name: "name" },
    { title: "생년월일", type: "date", name: "birthday" },
  ];
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
        <InputBoxItem title="이메일">
          <DuplicationBox>
            <InputButtonBox>
              <Input type="email" name="email" inputState={isCert.email} onChange={changeUserValue} />
            </InputButtonBox>
            <DuplicationButton disabled={isCert.email === "true"} type="button" iscert={isCert.email} onClick={duplicationEmail}>
              {isCert.email === "true" ? "인증완료" : "중복확인"}
            </DuplicationButton>
          </DuplicationBox>
        </InputBoxItem>

        <InputBoxItem title="휴대폰 번호">
          <DuplicationBox>
            <InputButtonBox>
              <Input type="tel" name="phoneNumber" disabled={isCert.tel === "true"} inputState={isCert.tel} onChange={changeUserValue} />
            </InputButtonBox>
            {isCert.tel === "true" ? (
              <DuplicationButton type="button" iscert={isCert.tel} onClick={SendCertNum}>
                인증번호 발송
              </DuplicationButton>
            ) : (
              <DuplicationButton type="button" onClick={duplicationPhoneNumber}>
                중복확인
              </DuplicationButton>
            )}
          </DuplicationBox>
        </InputBoxItem>

        {isCert.tel === "true" && (
          <InputBoxItem title="인증번호">
            <DuplicationBox>
              <InputButtonBox>
                <Input type="text" name="certNum" onChange={changeUserValue} />
              </InputButtonBox>
              <DuplicationButton type="button" disabled={isCert.certNum === "true"} iscert={isCert.certNum} onClick={Certification}>
                {isCert.certNum === "true" ? "인증완료" : "인증하기"}
              </DuplicationButton>
            </DuplicationBox>
          </InputBoxItem>
        )}

        <InputBoxItem title="비밀번호">
          <InputBox>
            <Input onBlur={changePassWordCert} onChange={changeUserValue} inputState="true" type="password" name="password" />
          </InputBox>
          <PasswordCondition isPasswordRegex={isCert.password}> 8~16자 영문, 숫자, 특수문자를 사용하세요.</PasswordCondition>
        </InputBoxItem>

        {inputArr.map(({ title, type, name }) => {
          return (
            <InputBoxItem title={title}>
              <InputBox>
                <Input inputState="true" type={type} name={name} />
              </InputBox>
            </InputBoxItem>
          );
        })}

        <InputBoxItem title="성별">
          <InputRadioBox>
            <Button use="gender" label="남성" type="button" name="MAN" checkgender={user.gender} onClick={handleClick}></Button>
            <Button use="gender" label="여성" type="button" name="WOMAN" checkgender={user.gender} onClick={handleClick}></Button>
          </InputRadioBox>
        </InputBoxItem>

        <InputBoxItem title="나이">
          <InputRadioBox>
            {AgeButtons.map(({ label, id }) => {
              return <Button use="age" label={label} type="button" id={id} checkage={user.age} onClick={handleClick}></Button>;
            })}
          </InputRadioBox>
        </InputBoxItem>

        <div style={{ height: "48px", width: "410px", marginTop: "10px", marginLeft: "10px" }}>
          <Button use="SignUpLogin" label="회원가입" type="submit" />
        </div>
      </SignUpContainer>
    </SignUpPage>
  );
};

export default Signup;
