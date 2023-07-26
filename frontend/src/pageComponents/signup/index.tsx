'use client'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { InputBox, SignUpPage, InputRadioBox, SignUpContainer, SignUpText, SignUpItem, WomanBGStyles, ManBGStyles } from './Signup.styled'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Signup = () => {
    const router = useRouter()
    const [gender, setGender] = useState('')
    const [user, setUser] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
        birth: "",
        phoneNumber: "",
        
    })
    const [inputState, setInputState] = useState({
        email: 1,
        password: 1,
        password2: 1,
        name: 1,
        birth: 1,
        phoneNumber: 1,
        
    })

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
    const nameRegex =  /^[가-힣]{2,4}$/
    const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/

    const onChange = (e:any) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
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
        
        else if (!passwordRegex.test(user.password)) {
            setInputState({
                ...inputState,
                ["password"] : 0
            })
            alert('비밀번호 형식을 맞춰주세요')
            return
        } 
        
        else if (user.password2 === "") {
            setInputState({
                ...inputState,
                ["password2"] : 0
            })
            alert('비밀번호를 한번 더 입력해주세요')
            return
        } 
        
        else if (user.password !== user.password2) {
            alert("비밀번호를 다시 확인해주세요")
            return
        } 
        
        else if (user.name === "") {
            setInputState({
                ...inputState,
                ["name"] : 0
            })
            alert("이름을 입력해주세요")
            return
        } 
        
        else if (user.birth === "") {
            setInputState({
                ...inputState,
                ["birth"] : 0
            })
            alert("생년월일을 입력해주세요")
            return
        } 
        
        else if (!phoneNumberRegex.test(user.phoneNumber)) {
            setInputState({
                ...inputState,
                ["phoneNumber"] : 0
            })
            alert("휴대폰번호를 입력해주세요")
            return
        } 
        
        else if (gender === "") {
            alert("성별을 선택해주세요")
            return
        }

        else {
            router.push('/')
        }
    }

    const onclick = (e:any) => {
        setGender(e.target.id)
    }

    return (
        <SignUpPage>
            {/* <WomanBGStyles></WomanBGStyles>
            <ManBGStyles></ManBGStyles> */}
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

            <SignUpItem>
            <SignUpText>비밀번호 확인</SignUpText>
            <InputBox>
                <Input type="password" name="password2" onChange={onChange} inputstate={inputState.password2}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>이름</SignUpText>
            <InputBox>
                <Input type="text" name="name" onChange={onChange} inputstate={inputState.name}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>생년월일</SignUpText>
            <InputBox>
                <Input type="date" name="birth" onChange={onChange} inputstate={inputState.birth}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>성별</SignUpText>
            <InputRadioBox>
                <label htmlFor='man' style={{display:"flex", alignItems:"center"}}>
                    <Input type="radio" name="gender" id="man" style={{marginRight:"5px"}} onClick={onclick}/>
                    남성
                </label>

                <label htmlFor='woman' style={{display:"flex", alignItems:"center"}}>
                    <Input type="radio" name="gender" id="woman" style={{marginRight:"5px"}} onClick={onclick}/>
                    여성
                </label>
            </InputRadioBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>휴대폰 번호</SignUpText>
            <InputBox>
                <Input type="number" name="phoneNumber" onChange={onChange} inputstate={inputState.phoneNumber}/>
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