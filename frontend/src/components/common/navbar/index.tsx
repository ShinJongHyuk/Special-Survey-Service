"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledNavbar, StyleLogout, StyledNavLink, StyledInstantNavLink, StyledTimeattackNavLink } from "./Navbar.styled";
import { usePathname } from "next/navigation";
import MidComponent from "./midComponent";
import useUserStore from "@/stores/useUserStore";
import { useLogoutHook } from "@/Hooks/useLogoutHook";

const NavbarComponent = () => {
  const pathname = usePathname();
  const isLogin = useUserStore((state:any) => (state.isLogin))
  const {hanedleLogout} = useLogoutHook()
  const [mounted, setMounted] = useState<boolean>(false);

useEffect(() => {
  setMounted(true);
  }, []);
  return ( mounted &&
    <header>
      <StyledNavbar pathname={pathname}>
        <Link href="/" style={{ width: "20%" }}>
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>
        <MidComponent pathname={pathname} />
        <div style={{ width: "20%", display: "flex", justifyContent: "end" }}>
          {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
          {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}
        </div>
      </StyledNavbar>
    </header>
  );
};

export default NavbarComponent;
