"use client";
import Image from "next/image";
import { StyledNavbar, StyledStartComp } from "./Navbar.styled";
import { usePathname } from "next/navigation";
import MidComponent from "./midComponent";
import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";
import EndComponent from "./endComponent";
import Link from "next/link";

const NavbarComponent = () => {
  const pathname = usePathname();
  const selectBtn = useSurveylistStore((state) => state.selectBtn);


  return (
    <header>
      <StyledNavbar pathname={pathname} selectBtn={selectBtn}>
        <StyledStartComp pathname={pathname}>
          <Link href="/" >

            <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
            <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
          </Link>
        </StyledStartComp>

        <MidComponent pathname={pathname} />

        <EndComponent />

      </StyledNavbar>
    </header >
  );
};

export default NavbarComponent;
