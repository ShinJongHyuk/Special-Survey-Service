'use client'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Image from 'next/image'
import { InputBox, LoginFont, LoginFont2 } from './Login.styled'
import { SignUpPage, SignUpText, SignUpItem, SignUpContainer, WomanBGStyles, ManBGStyles } from '../signup/Signup.styled'
const Login = () => {
    return (
        <SignUpPage>
            <WomanBGStyles></WomanBGStyles>
            <ManBGStyles></ManBGStyles>
            <Image src="SSSLogo.svg" alt="logo" width={180} height={64} style={{margin:"20px"}}></Image>

            <SignUpContainer>
                <SignUpItem>
                    <SignUpText>이메일</SignUpText> 
                    <InputBox>
                        <Input type="email"/>
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>비밀번호</SignUpText> 
                    <InputBox>
                        <Input type="password"/>
                    </InputBox>
                </SignUpItem>
                
                <div style={{height:"32px", width:"520px", marginTop:"10px"}}>
                    <Button label="로그인" type="submit"/>
                </div>

            
                <label htmlFor='LoginState' style={{display:"flex", alignItems:"center", margin:"20px 0px 0px 0px", borderBottom:"1px solid black"}}>
                    <div style={{width:"20px", height:"20px", marginBottom:"10px"}}>
                    <Input type="checkbox" name="LoginState" id="LoginState" style={{}}/>
                    </div>
                
                    <LoginFont>
                    로그인 상태 유지
                    </LoginFont>
                </label>
            </SignUpContainer>

        <div style={{display:"flex"}}>
        <LoginFont2>아이디 찾기</LoginFont2>
        <LoginFont2>비밀번호 찾기</LoginFont2>
        </div>
        </SignUpPage>
    )
}

export default Login