'use client'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { InputBox } from "../login/Login.styled"
import { SignUpPage, InputRadioBox, SignUpContainer, SignUpText, SignUpItem } from './Signup.styled'
import { useState } from 'react'

const Signup = () => {
    const [gender, setGender] = useState('')

    const onclick = (e:any) => {
        setGender(e.target.id)
    }

    return (
        <SignUpPage>
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

            <SignUpItem>
            <SignUpText>비밀번호 확인</SignUpText>
            <InputBox>
                <Input type="password"/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>이름</SignUpText>
            <InputBox>
                <Input type="text"/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>생년월일</SignUpText>
            <InputBox>
                <Input type="date"/>
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
                <Input type="number"/>
            </InputBox>
            </SignUpItem>
        
            <div style={{height:"32px", width:"500px", marginLeft:"auto", marginRight:"auto"}}>
                <Button label="가입하기" type="submit"/>
            </div>
        </SignUpContainer>
        </SignUpPage>
        // <SignUpContainer>
        //     <InputBox>
        //         <Input type="email" placeholder="이메일"/>
        //     </InputBox>

        //     <InputBox>
        //         <Input type="password" placeholder="비밀번호"/>
        //     </InputBox>

        //     <InputBox>
        //         <Input type="password" placeholder="비밀번호 확인"/>
        //     </InputBox>

        //     <InputBox>
        //         <Input type="text" placeholder="이름"/>
        //     </InputBox>

        //     <InputBox>
        //         <Input type="date" placeholder="생년월일"/>
        //     </InputBox>

        //     <InputRadioBox>
        //         <label htmlFor='man' style={{display:"flex", alignItems:"center"}}>
        //             <Input type="radio" name="gender" id="man" style={{marginRight:"5px"}} onClick={onclick}/>
        //             남성
        //         </label>

        //         <label htmlFor='woman' style={{display:"flex", alignItems:"center"}}>
        //             <Input type="radio" name="gender" id="woman" style={{marginRight:"5px"}} onClick={onclick}/>
        //             여성
        //         </label>
        //     </InputRadioBox>

        //     <InputBox>
        //         <Input type="number" placeholder="휴대폰 번호"/>
        //     </InputBox>

        //     <InputBox>
        //         <Button label="가입하기" type="submit"/>
        //     </InputBox>
        // </SignUpContainer>
    )
}

export default Signup