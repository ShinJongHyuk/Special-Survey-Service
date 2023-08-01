"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledNavbar, StyleLogout, StyledNavLink, StyledInstantNavLink, StyledTimeattackNavLink, StyledPropfileLink } from "./Navbar.styled";
import { usePathname } from "next/navigation";
import MidComponent from "./midComponent";
import useUserStore from "@/stores/useUserStore";
import { useLogoutHook } from "@/Hooks/useLogoutHook";

const NavbarComponent = () => {
  const pathname = usePathname();
  const isLogin = useUserStore((state:any) => (state.isLogin))
  const {hanedleLogout} = useLogoutHook()
  const [mounted, setMounted] = useState<boolean>(false);
  const userInformation = useUserStore((state:any) => (state.userInformation))

useEffect(() => {
  setMounted(true);
  });
  return (
    <header>
      <StyledNavbar pathname={pathname}>
        <Link href="/" style={{ width: "20%" }}>
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>
        <MidComponent pathname={pathname} />
        <div style={{ width: "20%", display: "flex", justifyContent: "end" }}>
          {mounted ?

          <>
          {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
          {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}
          {
          (isLogin && userInformation?.gender === "MAN") ?
          (<StyledPropfileLink href="/"><Image src="/manIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%", marginRight:"5px"}}></Image><div>{userInformation.name}</div></StyledPropfileLink>) : 
          (isLogin && userInformation?.gender === "WOMAN") ? 
          (<StyledPropfileLink href="/"><Image src="/womanIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%", marginRight:"5px"}}></Image><div>{userInformation.name}</div></StyledPropfileLink>) : null
          }
          </>
          :
          <>
          {/* <StyledNavLink href="/login">로그인</StyledNavLink>
          <StyledNavLink href="/signup">회원가입</StyledNavLink> */}
          </>
          
      }
        </div>
      </StyledNavbar>
    </header>
  );
};

export default NavbarComponent;
