import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { SignupHookType } from "../types/useSignupHook.type"
import signupPost from "@/api/user/signupPost"
import loginPost from "@/api/user/loginPost"
import useUserStore from "@/stores/useUserStore"
import loginGet from "@/api/user/loginGet"
  
export const useSignupHook = ():SignupHookType => {
    const login = useUserStore((state:any) => state.login)
    const setUserInformation = useUserStore((state:any) => state.setUserInformation)
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        birthday: "",
        phoneNumber: "",
        gender: "",
        age: ""
        
    })
    const [password2, setPassword] = useState("")
    const [inputState, setInputState] = useState({
        email: 1,
        password: 1,
        password2: 1,
        name: 1,
        birthday: 1,
        phoneNumber: 1,
        age: 1,
        
    })

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
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

    const handleSubmit = async (e:any) => {
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
            try {
                const res = await signupPost(user)
                console.log(res)
                if (res.data.success === true) {
                    alert('회원가입에 성공하였습니다')
                    try {
                        const res = await loginPost(user)
                        if (res.data.success === true) {
                            login();
                    
                            const response = await loginGet(res.data.response.accessToken)
                            console.log(response.data.response)
                            await setUserInformation(response.data.response);
                            
                            await router.push('/')
                        } else if (res.data.success === false) {
                            alert(res.data.apiError.message)
                        }
                        
                      } catch (err) {
                        console.log(err);
                      }
                    router.push('/')
                } else if (res.data.success === false) {
                    alert(res.data.apiError.message)
                }
            } catch (err) {
                console.log(err)
            }
        return
        }
    }

    const handleClick = (e:any) => {
        if (e.target.name === "MAN" || e.target.name === "WOMAN") {
            setUser({
                ...user,
                ["gender"] : e.target.name
            })
        } else {
            setUser({
                ...user,
                ["age"] : e.target.id
            })
        }
        
    }

    return {user, inputState, handleChange, handleSubmit, handleClick}
}
