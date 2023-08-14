"use client"
import Input from '@/components/input'
import Button from '@/components/button'
import { InputBox, SignupText, SignUpPage, InputRadioBox, SignUpContainer, SignUpText, SignUpItem, PasswordCondition } from "@/pageComponents/signup/Signup.styled";
import { DeleteUser } from './UserInfoList.styled';
import { useUserUpdateHook } from '@/Hooks/user/useUserUpdateHook';
import Modal from '@/components/modal'
import { useState } from 'react';

const UserInfoList = () => {
    const { user, inputState, newUser, handleSubmit, hanleChange, handlePassword, handleage, handleDeleteUser } = useUserUpdateHook()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SignUpPage>
            <SignUpContainer onSubmit={handleSubmit}>
                <SignUpItem>
                    <SignUpText>이메일</SignUpText>
                    <InputBox>
                        <Input disabled="true" type="email" name="email" value={user?.email} inputstate={inputState.email} />
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>비밀번호</SignUpText>
                    <InputBox>
                        <Input type="password" name="password" onChange={hanleChange} inputstate={inputState.password} />
                    </InputBox>
                    <PasswordCondition>8~16자 영문, 숫자, 특수문자를 사용하세요.</PasswordCondition>

                </SignUpItem>

                <SignUpItem>
                    <SignUpText>비밀번호 확인</SignUpText>
                    <InputBox>
                        <Input type="password" name="password2" onChange={handlePassword} inputstate={inputState.password2} />
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>이름</SignUpText>
                    <InputBox>
                        <Input type="text" name="name" value={newUser?.name} onChange={hanleChange} inputstate={inputState.name} />
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>생년월일</SignUpText>
                    <InputBox>
                        <Input disabled="true" type="date" name="birthday" value={newUser?.birthday} inputstate={inputState.birthday} />
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>성별</SignUpText>
                    <InputBox>
                        <Input disabled="true" type="text" value={user?.gender === "MAN" ? "남성" : "여성"} name="gender" inputstate={inputState.email} />
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>나이</SignUpText>
                    <InputRadioBox>
                        <Button use="age" label="~9" type="button" id="UNDER_TEENS" checkage={newUser.age} onClick={handleage}></Button>
                        <Button use="age" label="10~19" type="button" id="TEENS " checkage={newUser.age} onClick={handleage}></Button>
                        <Button use="age" label="20~29" type="button" id="TWENTIES " checkage={newUser.age} onClick={handleage}></Button>
                        <Button use="age" label="30~39" type="button" id="THIRTIES " checkage={newUser.age} onClick={handleage}></Button>
                        <Button use="age" label="40~49" type="button" id="FORTIES " checkage={newUser.age} onClick={handleage}></Button>
                        <Button use="age" label="50~59" type="button" id="FIFTIES " checkage={newUser.age} onClick={handleage}></Button>
                        <Button use="age" label="60~" type="button" id="SIXTIES " checkage={newUser.age} onClick={handleage}></Button>
                    </InputRadioBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>휴대폰 번호</SignUpText>
                    <InputBox>
                        <Input type="tel" name="phoneNumber" value={user?.phoneNumber} disabled="true" inputstate={inputState.phoneNumber} />
                    </InputBox>
                </SignUpItem>

                <div style={{ height: "48px", width: "410px", marginTop: "10px", marginLeft: "10px" }}>
                    <Button use="SignUpLogin" label="회원정보 수정" type="submit" />
                </div>
            </SignUpContainer>
            {/* <div style={{width:"100px", height:"30px", position:"absolute", bottom:"3px", right:"30px"}}>
            <DeleteUser onClick={() => {setIsOpen(true)}}>
                회원탈퇴
            </DeleteUser>
        </div> */}
            {/* <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        bigtext="회월탈퇴를 하시겠습니까?"
        cancel="최소"
        confirm="회원탈퇴"
        onDelete={handleDeleteUser}
        ></Modal> */}
        </SignUpPage>

    )
};

export default UserInfoList;
