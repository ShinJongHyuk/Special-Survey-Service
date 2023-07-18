"use client";
import React from "react";
import { StyledNav, StyledNavLink, NavLinks } from "./NavBar.styled";
import Image from "next/image";

const NavbarComponent = () => {
  const onCreateAccount = () => {
    console.log("create account");
  };

  return (
    <header>
      <StyledNav>
        <StyledNavLink href="/">
          <Image src="/cow.jpg" priority={true} width={50} height={50} alt="Logo"></Image>
        </StyledNavLink>
        <NavLinks>
          <StyledNavLink href="/login">로그인</StyledNavLink>
          <StyledNavLink href="/signup" onClick={onCreateAccount}>
            회원가입
          </StyledNavLink>
        </NavLinks>
      </StyledNav>
    </header>
  );
};

export default NavbarComponent;
