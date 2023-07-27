import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { SignupHookType } from "./types/useSignupHook.type"
  
export const useSignupHook = ():SignupHookType => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        birthday: "",
        phoneNumber: "",
        gender: ""
        
    })
    const [password2, setPassword] = useState("")
    const [inputState, setInputState] = useState({
        email: 1,
        password: 1,
        password2: 1,
        name: 1,
        birthday: 1,
        phoneNumber: 1,
        
    })

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
    const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/

    const handleChange = (e:any) => {
        const { name, value } = e.target;
    
        if (name === 'phoneNumber') {
            const trimmedValue = value.replace(/-/g, '')
            const newPhoneNumber = trimmedValue.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')
            setUser({
                ...user,
                [name]: newPhoneNumber
            });
        } else if (name === 'password2') {
            setPassword(value)
        } else {
            setUser({
                ...user,
                [name]: value
            });
        }

        setInputState({
            ...inputState,
            [name] : 1
        })
    }

    const handleSubmit = (e:any) => {
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
        
        else if (password2 === "") {
            setInputState({
                ...inputState,
                ["password2"] : 0
            })
            alert('비밀번호를 한번 더 입력해주세요')
            return
        } 
        
        else if (user.password !== password2) {
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
        
        else if (user.birthday === "") {
            setInputState({
                ...inputState,
                ["birthday"] : 0
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
        
        else if (user.gender === "") {
            alert("성별을 선택해주세요")
            return
        }

        else {
            axios({
                method : 'post',
                url : 'http://221.164.64.185:8080/api/signup',
                data : {...user}
            })
            .then(res => {
                console.log(res)
                router.push('/')
            })
            .catch(err => console.log(err))
        return
        }
    }

    const handleClick = (e:any) => {
        setUser({
            ...user,
            ["gender"] : e.target.name
        })
    }

    return {user, inputState, handleChange, handleSubmit, handleClick}
}
