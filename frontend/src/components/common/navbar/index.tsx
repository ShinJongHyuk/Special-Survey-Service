"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledNavbar, StyledNavLink, StyledInstantNavLink, StyledTimeattackNavLink } from "./Navbar.styled";
import { usePathname } from "next/navigation";
import MidComponent from "./midComponent";

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <header>
      <StyledNavbar pathname={pathname}>
        <Link href="/" style={{ width: "20%" }}>
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>
        <MidComponent pathname={pathname} />
        <div style={{ width: "20%", display: "flex", justifyContent: "end" }}>
          <StyledNavLink href="/login">로그인</StyledNavLink>
          <StyledNavLink href="/signup">회원가입</StyledNavLink>
        </div>
      </StyledNavbar>
    </header>
  );
};

export default NavbarComponent;
