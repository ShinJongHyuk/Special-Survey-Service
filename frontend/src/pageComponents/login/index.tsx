'use client'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Image from 'next/image'
import { LoginPage, InputBox, LoginFont, LoginFont2 } from './Login.styled'
import { SignUpText, SignUpItem, SignUpContainer, WomanBGStyles, ManBGStyles } from '../signup/Signup.styled'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const [inputState, setInputState] = useState({
        email: 1,
        password: 1      
    })


    const onChange = (e:any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        setInputState({
            ...inputState,
            [e.target.name] : 1
        })
    }

    const onSubmit = (e:any) => {
        e.preventDefault()
        
        if (user.email === "") {
            setInputState({
                ...inputState,
                ["email"] : 0
            })
            alert('이메일을 입력해주세요.')
            return
        } 
        
        else if (user.password === "") {
            setInputState({
                ...inputState,
                ["password"] : 0
            })
            alert('비밀번호를 입력해주세요')
            return
        } 

        else {
            // 여기서 이메일, 비밀번호 담아서 axios
            router.push('/')
        }

    }
    return (
        <LoginPage>
            <WomanBGStyles></WomanBGStyles>
            <ManBGStyles></ManBGStyles>
            <Image src="SSSLogo.svg" alt="logo" width={180} height={64} style={{margin:"20px"}}></Image>

            <SignUpContainer onSubmit={onSubmit}>
                <SignUpItem>
                    <SignUpText>이메일</SignUpText> 
                    <InputBox>
                        <Input type="email" name="email" onChange={onChange} inputstate={inputState.email}/>
                    </InputBox>
                </SignUpItem>

                <SignUpItem>
                    <SignUpText>비밀번호</SignUpText> 
                    <InputBox>
                        <Input type="password" name="password" onChange={onChange} inputstate={inputState.password}/>
                    </InputBox>
                </SignUpItem>
                
                <div style={{height:"48px", width:"410px", marginTop:"10px", marginLeft:"10px"}}>
                    <Button use="SignUpLogin" label="로그인" type="submit"></Button>
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
        </LoginPage>
    )
}

export default Login