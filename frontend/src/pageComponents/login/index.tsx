'use client'
import Input from '@/components/Input'
import { InputBox } from './Login.styled'
import Button from '@/components/Button'
const Login = () => {
    return (
        <div>
            <InputBox>
                <Input type="email" placeholder="이메일"/>
            </InputBox>

            <InputBox>
                <Input type="password" placeholder="비밀번호"/>
            </InputBox>
            
            <InputBox>
                <Button label="로그인" type="submit"/>
            </InputBox>
        </div>
    )
}

export default Login