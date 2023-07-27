'use client'
import Input from '@/components/input'
import Button from '@/components/button'
import Image from 'next/image'
import { LoginPage, InputBox, LoginFont, LoginFont2, LoginContainer } from './Login.styled'
import { SignUpText, SignUpItem } from '../signup/Signup.styled'
import { useRouter } from 'next/navigation'
import { useLoginHook } from '@/Hooks/useLoginHook'

const Login = () => {
    const router = useRouter()
    const {handleChange, handleSubmit, inputState} = useLoginHook()
    // const setRefreshToken = useUserStore((state:any) => state.setRefreshToken)
    // const setAccessToken = useUserStore((state:any) => state.setAccessToken)
    // const login = useUserStore((state:any) => state.login)

    // const [user, setUser] = useState({
    //     email : "",
    //     password : ""
    // })

    // const [inputState, setInputState] = useState({
    //     email: 1,
    //     password: 1      
    // })


    // const onChange = (e:any) => {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     })

    //     setInputState({
    //         ...inputState,
    //         [e.target.name] : 1
    //     })
    // }

    // const onSubmit = (e:any) => {
    //     e.preventDefault()
        
    //     if (user.email === "") {
    //         setInputState({
    //             ...inputState,
    //             ["email"] : 0
    //         })
    //         alert('이메일을 입력해주세요.')
    //         return
    //     } 
        
    //     else if (user.password === "") {
    //         setInputState({
    //             ...inputState,
    //             ["password"] : 0
    //         })
    //         alert('비밀번호를 입력해주세요')
    //         return
    //     } 

    //     else {
    //         axios({
    //             method : 'post',
    //             url : 'http://221.164.64.185:8080/api/authenticate',
    //             data : {...user}
    //         })
    //         .then(res => {
    //             console.log(res.data.response)
    //             setRefreshToken(res.data.response.refreshToken)
    //             setAccessToken(res.data.response.accessToken)
    //             login()
    //             router.push('/')
    //         })
    //         .catch(err => console.log(err))
            
    //     }

    // }

    const ClickLogo = () => {
        router.push('/')
    }

    return (
        <LoginPage>
            <Image src="SSSLogo.svg" alt="logo" width={180} height={64} style={{margin:"20px",cursor:'pointer'}} onClick={ClickLogo}></Image>

            <LoginContainer onSubmit={handleSubmit}>
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
                </SignUpItem>
                
                <div style={{height:"48px", width:"410px", marginTop:"10px", marginLeft:"10px"}}>
                    <Button use="SignUpLogin" label="로그인" type="submit"></Button>
                </div>

            
                <label htmlFor='LoginState' style={{display:"flex", alignItems:"center", margin:"22px 0px 0px 0px", borderBottom:"2px solid black"}}>
                    <div style={{width:"15px", height:"15px", marginBottom:"10px"}}>
                    <Input type="checkbox" name="LoginState" id="LoginState" style={{}}/>
                    </div>
                
                    <LoginFont>
                    로그인 상태 유지
                    </LoginFont>
                </label>
            </LoginContainer>

        <div style={{display:"flex"}}>
        <LoginFont2>아이디 찾기</LoginFont2>
        <LoginFont2>비밀번호 찾기</LoginFont2>
        </div>
        </LoginPage>
    )
}

export default Login