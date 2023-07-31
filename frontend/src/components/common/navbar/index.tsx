"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledNavbar, StyledNavLink, StyledInstantNavLink, StyledTimeattackNavLink } from "./Navbar.styled";
import { usePathname } from 'next/navigation';

const NavbarComponent = () => {
  const pathname = usePathname();
  return (
    <header>
      <StyledNavbar pathname={pathname}>
        <Link href="/" style={{ width: "20%" }}>
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>

        {(pathname === "/" || pathname === "/login" || pathname === "/signup" || pathname === '/instantWinConfirm') &&
          <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "20px" }}>
            <StyledNavLink href="/">설문만들기</StyledNavLink>
            <StyledNavLink href="/instantWinSurveyList">설문하기</StyledNavLink>
          </div>
        }
        {(pathname === '/instantWinSurveyList' || pathname === '/timeattackSurveyList') &&
          <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
            <StyledInstantNavLink href="/instantWinSurveyList" pathname={pathname}>즉시당첨</StyledInstantNavLink>
            <StyledTimeattackNavLink href="/timeattackSurveyList" pathname={pathname}>타임어택</StyledTimeattackNavLink>
          </div>
        }
        {(pathname === '/surveydetail') &&
          <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
            페이지 이동?? 이거는 무슨 기능?
          </div>
        }


        <div style={{ width: "20%", display: "flex", justifyContent: "end" }}>
          <StyledNavLink href="/login">로그인</StyledNavLink>
          <StyledNavLink href="/signup">회원가입</StyledNavLink>
        </div>
      </StyledNavbar>
    </header>
  );
};

export default NavbarComponent;
