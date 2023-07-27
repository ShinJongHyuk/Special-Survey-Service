'use client'
import Input from '@/components/input'
import Button from '@/components/button'
import { InputBox, SignUpPage, InputRadioBox, SignUpContainer, SignUpText, SignUpItem } from './Signup.styled'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSignupHook } from '@/Hooks/useSignupHook'

const Signup = () => {
    const { user, inputState, handleChange, handleSubmit, handleClick } = useSignupHook()
    const router = useRouter()

    const ClickLogo = () => {
        router.push('/')
    }


    return (
        <SignUpPage>

            <Image src="SSSLogo.svg" alt="logo" width={180} height={64} style={{margin:"20px", cursor:'pointer'}} onClick={ClickLogo}></Image>
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




//     const router = useRouter()
//     const [user, setUser] = useState({
//         email: "",
//         password: "",
//         name: "",
//         birthday: "",
//         phoneNumber: "",
//         gender: ""
        
//     })
//     const [password2, setPassword] = useState("")
//     const [inputState, setInputState] = useState({
//         email: 1,
//         password: 1,
//         password2: 1,
//         name: 1,
//         birthday: 1,
//         phoneNumber: 1,
        
//     })

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
//     const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/

//     const onChange = (e:any) => {
//         const { name, value } = e.target;
    
//         if (name === 'phoneNumber') {
//             const trimmedValue = value.replace(/-/g, '')
//             const newPhoneNumber = trimmedValue.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')
//             setUser({
//                 ...user,
//                 [name]: newPhoneNumber
//             });
//         } else if (name === 'password2') {
//             setPassword(value)
//         } else {
//             setUser({
//                 ...user,
//                 [name]: value
//             });
//         }

//         setInputState({
//             ...inputState,
//             [name] : 1
//         })
//     }

//     const onSubmit = (e:any) => {
//         e.preventDefault()

//         if (user.email === "") {
//             setInputState({
//                 ...inputState,
//                 ["email"] : 0
//             })
//             alert('이메일을 입력해주세요.')
//             return
//         } 
        
//         else if (!passwordRegex.test(user.password)) {
//             setInputState({
//                 ...inputState,
//                 ["password"] : 0
//             })
//             alert('비밀번호 형식을 맞춰주세요')
//             return
//         } 
        
//         else if (password2 === "") {
//             setInputState({
//                 ...inputState,
//                 ["password2"] : 0
//             })
//             alert('비밀번호를 한번 더 입력해주세요')
//             return
//         } 
        
//         else if (user.password !== password2) {
//             alert("비밀번호를 다시 확인해주세요")
//             return
//         } 
        
//         else if (user.name === "") {
//             setInputState({
//                 ...inputState,
//                 ["name"] : 0
//             })
//             alert("이름을 입력해주세요")
//             return
//         } 
        
//         else if (user.birthday === "") {
//             setInputState({
//                 ...inputState,
//                 ["birthday"] : 0
//             })
//             alert("생년월일을 입력해주세요")
//             return
//         } 
        
//         else if (!phoneNumberRegex.test(user.phoneNumber)) {
//             setInputState({
//                 ...inputState,
//                 ["phoneNumber"] : 0
//             })
//             alert("휴대폰번호를 입력해주세요")
//             return
//         } 
        
//         else if (user.gender === "") {
//             alert("성별을 선택해주세요")
//             return
//         }

//         else {
//             axios({
//                 method : 'post',
//                 url : 'http://221.164.64.185:8080/api/signup',
//                 data : {...user}
//             })
//             .then(res => {
//                 console.log(res)
//                 router.push('/')
//             })
//             .catch(err => console.log(err))
//         }
//     }

//     const onclick = (e:any) => {
//         setUser({
//             ...user,
//             ["gender"] : e.target.name
//         })
//     }

//     const ClickLogo = () => {
//         router.push('/')
//     }

//     return (
//         <SignUpPage>

//             <Image src="SSSLogo.svg" alt="logo" width={180} height={64} style={{margin:"20px", cursor:'pointer'}} onClick={ClickLogo}></Image>
//         <SignUpContainer onSubmit={onSubmit}>
//             <SignUpItem>
//             <SignUpText>이메일</SignUpText>
//             <InputBox>
//                 <Input type="email" name="email" onChange={onChange} inputstate={inputState.email}/>
//             </InputBox>
//             </SignUpItem>

//             <SignUpItem>
//             <SignUpText>비밀번호</SignUpText>
//             <InputBox>
//                 <Input type="password" name="password" onChange={onChange} inputstate={inputState.password}/>
//             </InputBox>
//             </SignUpItem>

//             <SignUpItem>
//             <SignUpText>비밀번호 확인</SignUpText>
//             <InputBox>
//                 <Input type="password" name="password2" onChange={onChange} inputstate={inputState.password2}/>
//             </InputBox>
//             </SignUpItem>

//             <SignUpItem>
//             <SignUpText>이름</SignUpText>
//             <InputBox>
//                 <Input type="text" name="name" onChange={onChange} inputstate={inputState.name}/>
//             </InputBox>
//             </SignUpItem>

//             <SignUpItem>
//             <SignUpText>생년월일</SignUpText>
//             <InputBox>
//                 <Input type="date" name="birthday" onChange={onChange} inputstate={inputState.birthday}/>
//             </InputBox>
//             </SignUpItem>

//             <SignUpItem>
//             <SignUpText>성별</SignUpText>
//             <InputRadioBox>
//                 <Button use="gender" label="남성" type="button" name="MALE" checkgender={user.gender} onClick={onclick}></Button>
//                 <Button use="gender" label="여성" type="button" name="FEMALE" checkgender={user.gender} onClick={onclick}></Button>
//             </InputRadioBox>
//             </SignUpItem>

//             <SignUpItem>
//             <SignUpText>휴대폰 번호</SignUpText>
//             <InputBox>
//                 <Input type="tel" name="phoneNumber" onChange={onChange} inputstate={inputState.phoneNumber}/>
//             </InputBox>
//             </SignUpItem>
        
//             <div style={{height:"48px", width:"410px", marginTop:"10px", marginLeft:"10px"}}>
//                     <Button use="SignUpLogin" label="회원가입" type="submit"/>
//             </div>
//         </SignUpContainer>
//         </SignUpPage>
//     )
// }

export default Signup