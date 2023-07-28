import { useRouter } from "next/navigation"
import useUserStore from "@/stores/useUserStore"
import { useState } from "react"
import axios from 'axios'

export const useLoginHook = () => {
    const router = useRouter()
    const setRefreshToken = useUserStore((state:any) => state.setRefreshToken)
    const setAccessToken = useUserStore((state:any) => state.setAccessToken)
    const login = useUserStore((state:any) => state.login)
    

    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const [inputState, setInputState] = useState({
        email: 1,
        password: 1      
    })

    const handleUserId = (data:any) => {
        setUser(data)
    }

    const handleChange = (e:any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        setInputState({
            ...inputState,
            [e.target.name] : 1
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
        
        else if (user.password === "") {
            setInputState({
                ...inputState,
                ["password"] : 0
            })
            alert('비밀번호를 입력해주세요')
            return
        } 

        else {
            axios({
                method : 'post',
                url : 'http://221.164.64.185:8080/api/authenticate',
                data : {...user}
            })
            .then(res => {
                console.log(res.data.response)
                setRefreshToken(res.data.response.refreshToken)
                setAccessToken(res.data.response.accessToken)
                login()
                router.push('/')
            })
            .catch(err => console.log(err))
        }
    }
    return {handleChange, handleSubmit, handleUserId, inputState, user}
}
    