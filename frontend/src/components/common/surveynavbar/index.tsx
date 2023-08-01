'use client';

import React, {useState,useEffect} from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/DefaultTheme';
import { StyledNavLink } from "../navbar/Navbar.styled";
import { useLogoutHook } from "@/Hooks/useLogoutHook";
import useSelectedStore from "@/stores/useSelectedStore";
import useUserStore from '@/stores/useUserStore';
import check from '../../../../public/survey/check.png'
import pallete from '../../../../public/survey/pallete.png'
import preview from '../../../../public/survey/preview.png'
import before from '../../../../public/survey/before.png'
import after from '../../../../public/survey/after.png'
import Logo_Yellow from '../../../../public/survey/Logo_Yellow.png'
import {Left_Button_Box,Right_Button_Box,StyleLogout,StyledProfileName,StyledPropfileLink,OptionBox,Buttons,Button_Box,Title_Label,Title_Content,Title_Container,Navbar_Container,Top_Container,Bottom_Container } from './SurveyNavbar.styled';
import MakeSurvey from "@/pageComponents/makesurvey";
import Mypage from "@/pageComponents/mypage";


const SurveyNavbarComponent = () => {
    const isLogin = useUserStore((state:any) => (state.isLogin))
    const {hanedleLogout} = useLogoutHook()
    const {selected, setSelected} = useSelectedStore();
    const [mounted, setMounted] = useState<boolean>(false);
    const userInformation = useUserStore((state:any) => (state.userInformation))
  
    useEffect(() => {
      setMounted(true);
      });


      const selectChange = (option: string) => {
        setSelected(option);
      };

    return (
        <ThemeProvider theme={theme}> 
            <Navbar_Container>
            <Top_Container>
                    <Link href="/" style={{ width: "10%", display :"flex", justifyContent : "center" }}>
                        <Image src={Logo_Yellow} style={{marginRight : "5px"}} priority={true} width={20} height={17} alt="Logo"></Image>
                        <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
                    </Link>
                    <Title_Container>
                        <Title_Content></Title_Content>
                        <Title_Label>
                            <Image src={check} style={{marginRight : "10px"}} alt="체크" />
                            모든 변경사항이 자동저장됐어요.
                        </Title_Label>
                    </Title_Container>
                    <Button_Box>
                        <Left_Button_Box>
                            <Image src={pallete} alt="팔레트" />
                            <Image src={preview} alt="미리보기" />
                            <Image src={before}  alt="이전 보기" />
                            <Image src={after} alt="다음 보기" />
                        </Left_Button_Box>
                        <Right_Button_Box>
                            <Buttons backgroundcolor={"white"}>임시저장</Buttons>
                            <Buttons backgroundcolor={"#FFF129"}>생성하기</Buttons>
                        </Right_Button_Box>
                    </Button_Box>
                    <div style={{ width: "17%", display: "flex", justifyContent: "end" }}>
                            {mounted ?
                            <>
                            {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
                            {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}
                            {
                            (isLogin && userInformation?.gender === "MAN") ?
                            (<StyledPropfileLink href="/mypage"><Image src="/manIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%"}}></Image><StyledProfileName>{userInformation.name}</StyledProfileName></StyledPropfileLink>) : 
                            (isLogin && userInformation?.gender === "WOMAN") ? 
                            (<StyledPropfileLink href="/mypage"><Image src="/womanIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%"}}></Image><StyledProfileName>{userInformation.name}</StyledProfileName></StyledPropfileLink>) : null
                            }</>
                            : <></>}
                    </div>
            </Top_Container>
            <hr />
            <Bottom_Container>
                <OptionBox onClick={() => selectChange("setting")} isSelected={selected === "setting"}>
                    설정
                </OptionBox>
                <OptionBox onClick={() => selectChange("question")} isSelected={selected === "question"}>
                    질문
                </OptionBox>
            </Bottom_Container>
        </Navbar_Container>
        </ThemeProvider>
    )
}

export default SurveyNavbarComponent;