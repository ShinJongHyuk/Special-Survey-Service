'use client'
import Input from '@/components/input'
import Button from '@/components/button'
import { InputBox, SignupText, SignUpPage, InputRadioBox, SignUpContainer, SignUpText, SignUpItem, PasswordCondition } from './Signup.styled'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSignupHook } from '@/Hooks/user/useSignupHook'

const Signup = () => {
    const { user, inputState, handleChange, handleSubmit, handleClick } = useSignupHook()
    const router = useRouter()

    const ClickLogo = () => {
        router.push('/')
    }


    return (
        <SignUpPage>
            <SignupText>Sign up</SignupText>
            {/* <Image src="SSSLogo.svg" alt="logo" width={180} height={64} style={{margin:"20px", cursor:'pointer'}} onClick={ClickLogo}></Image> */}
        <SignUpContainer onSubmit={handleSubmit}>
            <SignUpItem>
            <SignUpText>이메일</SignUpText>
            <InputBox>
                <Input type="email" name="email" onChange={handleChange} inputstate={inputState.email}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>비밀번호</SignUpText>
            <InputBox>
                <Input type="password" name="password" onChange={handleChange} inputstate={inputState.password}/>
            </InputBox>
            <PasswordCondition>8~16자 영문, 숫자, 특수문자를 사용하세요.</PasswordCondition>
                
            </SignUpItem>

            <SignUpItem>
            <SignUpText>비밀번호 확인</SignUpText>
            <InputBox>
                <Input type="password" name="password2" onChange={handleChange} inputstate={inputState.password2}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>이름</SignUpText>
            <InputBox>
                <Input type="text" name="name" onChange={handleChange} inputstate={inputState.name}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>생년월일</SignUpText>
            <InputBox>
                <Input type="date" name="birthday" onChange={handleChange} inputstate={inputState.birthday}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>성별</SignUpText>
            <InputRadioBox>
                <Button use="gender" label="남성" type="button" name="MAN" checkgender={user.gender} onClick={handleClick}></Button>
                <Button use="gender" label="여성" type="button" name="WOMAN" checkgender={user.gender} onClick={handleClick}></Button>
            </InputRadioBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>나이</SignUpText>
            <InputRadioBox>
                <Button use="age" label="~9" type="button" id="UNDER_TEENS" checkage={user.age} onClick={handleClick}></Button>
                <Button use="age" label="10~19" type="button" id="TEENS " checkage={user.age} onClick={handleClick}></Button>
                <Button use="age" label="20~29" type="button" id="TWENTIES " checkage={user.age} onClick={handleClick}></Button>
                <Button use="age" label="30~39" type="button" id="THIRTIES " checkage={user.age} onClick={handleClick}></Button>
                <Button use="age" label="40~49" type="button" id="FORTIES " checkage={user.age} onClick={handleClick}></Button>
                <Button use="age" label="50~59" type="button" id="FIFTIES " checkage={user.age} onClick={handleClick}></Button>
                <Button use="age" label="60~" type="button" id="SIXTIES " checkage={user.age} onClick={handleClick}></Button>
            </InputRadioBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>휴대폰 번호</SignUpText>
            <InputBox>
                <Input type="tel" name="phoneNumber" onChange={handleChange} inputstate={inputState.phoneNumber}/>
            </InputBox>
            </SignUpItem>
        
            <div style={{height:"48px", width:"410px", marginTop:"10px", marginLeft:"10px"}}>
                    <Button use="SignUpLogin" label="회원가입" type="submit"/>
            </div>
        </SignUpContainer>
        </SignUpPage>
    )
}

export default Signup