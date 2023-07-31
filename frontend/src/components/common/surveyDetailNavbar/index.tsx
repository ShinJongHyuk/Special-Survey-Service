'use client'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { StyledNavbar, StyledNavLink } from "./Navbar"

const SurveyDetailNavbar = () => {
    const pathname = usePathname(

    )
    return (
        <header>
        <StyledNavbar pathname={pathname}>
        <Link href="/" style={{ width: "20%" }}>
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>

        <div style={{ width: "60%", display: "flex", justifyContent: "center", gap: "30px" }}>
          페이지 이동? 무슨 기능??
        </div>
        <div style={{ width: "20%", display: "flex", justifyContent: "end" }}>
          <StyledNavLink href="/login">로그인</StyledNavLink>
          <StyledNavLink href="/signup">회원가입</StyledNavLink>
        </div>
      </StyledNavbar>
        </header>
    )
}

export default SurveyDetailNavbar