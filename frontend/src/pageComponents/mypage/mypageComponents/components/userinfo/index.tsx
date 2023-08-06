"use client"
import Input from '@/components/input'
import Button from '@/components/button'
import { InputBox, SignupText, SignUpPage, InputRadioBox, SignUpContainer, SignUpText, SignUpItem, PasswordCondition } from "@/pageComponents/signup/Signup.styled";
import useUserStore from '@/stores/useUserStore';
import { useState, useEffect } from 'react';

const UserInfoList = () => {
  
  const user = useUserStore((state:any) => state.userInformation)
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

const [newUser, setNewUser] = useState({
  email : user.email,
  password : "",
  name: user.name,
  birthday: user.birthday,
  phoneNumber: user.phoneNumber,
  age: user.age,
}) 



const hanleChange = (e:any) => {
  const {name, value} = e.target
  setNewUser({
    ...newUser,
    [name] : [value]
  })

  setInputState({
    ...inputState,
    [name] : 1
  })
}

const handlePassword = (e:any) => {
  setPassword(e.target.value)
}

const handleage = (e:any) => {
  setNewUser({
    ...newUser,
    ["age"] : e.target.id
  })
}


const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/  //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
  useEffect(() => {
    console.log(newUser)
  },[newUser])


 

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    // 비밀번호 입력했을 때
    if (newUser.password) {
      if (!passwordRegex.test(newUser.password)) {
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
    
    else if (newUser.password !== password2) {
        alert("비밀번호를 다시 확인해주세요")
        return
    } 
    }
    
     if (user.name === "") {
        setInputState({
            ...inputState,
            ["name"] : 0
        })
        alert("이름을 입력해주세요")
        return
    } 

    else {
      //axios요청 (뭐 담을지?)
      // newUser해서 passwords 추가?  
        console.log("회원정보수정 완료")
        console.log(newUser)
    }
  }
  return (
    <SignUpPage>
        <SignUpContainer onSubmit={handleSubmit}>
            <SignUpItem>
            <SignUpText>이메일</SignUpText>
            <InputBox>
                <Input disabled="true" type="email" name="email" value={user.email} inputstate={inputState.email}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>비밀번호</SignUpText>
            <InputBox>
                <Input type="password" name="password" onChange={hanleChange} inputstate={inputState.password}/>
            </InputBox>
            <PasswordCondition>8~16자 영문, 숫자, 특수문자를 사용하세요.</PasswordCondition>
                
            </SignUpItem>

            <SignUpItem>
            <SignUpText>비밀번호 확인</SignUpText>
            <InputBox>
                <Input type="password" name="password2" onChange={handlePassword} inputstate={inputState.password2}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>이름</SignUpText>
            <InputBox>
                <Input type="text" name="name" value={newUser.name} onChange={hanleChange} inputstate={inputState.name}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>생년월일</SignUpText>
            <InputBox>
                <Input disabled="true" type="date" name="birthday" value={newUser.birthday} inputstate={inputState.birthday}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>성별</SignUpText>
            <InputBox>
                <Input disabled="true" type="text" value={user.gender === "Man" ? "남성" : "여성"} name="gender" inputstate={inputState.email}/>
            </InputBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>나이</SignUpText>
            <InputRadioBox>
                <Button use="age" label="~9" type="button" id="UNDER_TEENS" checkage={newUser.age} onClick={handleage}></Button>
                <Button use="age" label="10~19" type="button" id="TEENS " checkage={newUser.age} onClick={handleage}></Button>
                <Button use="age" label="20~29" type="button" id="TWENTIES " checkage={newUser.age} onClick={handleage}></Button>
                <Button use="age" label="30~39" type="button" id="THIRTIES " checkage={newUser.age} onClick={handleage}></Button>
                <Button use="age" label="40~49" type="button" id="FORTIES " checkage={newUser.age} onClick={handleage}></Button>
                <Button use="age" label="50~59" type="button" id="FIFTIES " checkage={newUser.age} onClick={handleage}></Button>
                <Button use="age" label="60~" type="button" id="SIXTIES " checkage={newUser.age} onClick={handleage}></Button>
            </InputRadioBox>
            </SignUpItem>

            <SignUpItem>
            <SignUpText>휴대폰 번호</SignUpText>
            <InputBox>
                <Input type="tel" name="phoneNumber" value={newUser.phoneNumber} disabled="true" inputstate={inputState.email}/>
            </InputBox>
            </SignUpItem>
        
            <div style={{height:"48px", width:"410px", marginTop:"10px", marginLeft:"10px"}}>
                    <Button use="SignUpLogin" label="회원정보 수정" type="submit"/>
            </div>
        </SignUpContainer>
        </SignUpPage>
  )
};

export default UserInfoList;
