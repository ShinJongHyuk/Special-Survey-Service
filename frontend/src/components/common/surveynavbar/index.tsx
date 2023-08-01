'use client';

import React, {useState,useEffect} from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/DefaultTheme';
import {StyleLogout,StyledProfileName,StyledPropfileLink,OptionBox,Buttons,Button_Box,Title_Label,Title_Content,Title_Container,Navbar_Container,Top_Container,Bottom_Container } from './SurveyNavbar.styled';
import {usePathname} from "next/navigation";
import useUserStore from '@/stores/useUserStore';
import plus from '../../../../public/survey/plus.png'
import { StyledNavLink } from "../navbar/Navbar.styled";
import { useLogoutHook } from "@/Hooks/useLogoutHook";

const SurveyNavbarComponent = () => {
    const pathname = usePathname();
    const isLogin = useUserStore((state:any) => (state.isLogin))
    const {hanedleLogout} = useLogoutHook()
    const [selected, setSelected] = useState(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const userInformation = useUserStore((state:any) => (state.userInformation))
  
    useEffect(() => {
      setMounted(true);
      });
    
    const selectChange = () => {
        setSelected((prevOption) => !prevOption);
    };

    return (
        <ThemeProvider theme={theme}> 
            <Navbar_Container>
            <Top_Container>
                    <Link href="/" style={{ width: "10%", display :"flex", justifyContent : "center" }}>
                        <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
                        <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
                    </Link>
                    <Title_Container>
                        <Title_Content></Title_Content>
                        <Title_Label>모든 변경사항이 자동저장됐어요.</Title_Label>
                    </Title_Container>
                    <Button_Box>
                        <Image src={plus} width={25} height={25} alt="이미지1" />
                        <Image src={plus} width={25} height={25} alt="이미지1" />
                        <Image src={plus} width={25} height={25} alt="이미지1" />
                        <Image src={plus} width={25} height={25} alt="이미지1" />

                        <Buttons backgroundcolor={"white"}>임시저장</Buttons>
                        <Buttons backgroundcolor={"#FFF129"}>생성하기</Buttons>
                    </Button_Box>
                    <div style={{ width: "20%", display: "flex", justifyContent: "end" }}>
                            {mounted ?
                            <>
                            {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
                            {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}

                            {
                            (isLogin && userInformation?.gender === "MAN") ?
                            (<StyledPropfileLink href="/mypage"><Image src="/manIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%"}}></Image><StyledProfileName>{userInformation.name}</StyledProfileName></StyledPropfileLink>) : 
                            (isLogin && userInformation?.gender === "WOMAN") ? 
                            (<StyledPropfileLink href="/mypage"><Image src="/womanIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%"}}></Image><StyledProfileName>{userInformation.name}</StyledProfileName></StyledPropfileLink>) : null
                            }
                            
                            </>
                            :
                            <>
                            {/* <StyledNavLink href="/login">로그인</StyledNavLink>
                            <StyledNavLink href="/signup">회원가입</StyledNavLink> */}
                            </>
                            
                        }
                        </div>
            </Top_Container>
            <hr />
            <Bottom_Container>
            <OptionBox onClick={selectChange}>
                설정
            </OptionBox>
             <OptionBox onClick={selectChange}>
                질문
            </OptionBox>
            </Bottom_Container>
        </Navbar_Container>
        </ThemeProvider>
    )
}

export default SurveyNavbarComponent;