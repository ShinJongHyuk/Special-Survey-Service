import { useLogoutHook } from "@/Hooks/user/useLogoutHook";
import useUserStore from "@/stores/useUserStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StyledEndComp, StyleLogout, StyledNavLink, StyledPropfileLink, StyledProfileName } from "../Navbar.styled";
import { useLoginHook } from "@/Hooks/user/useUserInformationHook";
import { useRouter, usePathname } from "next/navigation";

const EndComponent = () => {
  const [isLogin, userInformation] = useUserStore((state: any) => [state.isLogin, state.userInformation]);
  const { hanedleLogout } = useLogoutHook();
  const { refreshUserInformation, getUserInfo } = useLoginHook();
  const [mounted, setMounted] = useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string>("");
  const router = useRouter();
  const pathname: string = usePathname();

  useEffect(() => {
    setMounted(true);
    if (isLogin && userInformation) {
      setProfileImg(userInformation.gender === "MAN" ? "/manIcon.png" : "/womanIcon.png");
    }
  }, [isLogin]);

  useEffect(() => {
    refreshUserInformation();
  }, []);

  useEffect(() => {
    const userInfo: any = getUserInfo();
    if (pathname === "/payment" || pathname === "/makesurvey") {
      if (userInfo?.email) {
        console.log(userInfo.email)
        if (userInfo.email !== "admin@naver.com") {
          alert("설문 등록자가 아닙니다.")
          router.push("/")
        }
        return;
      }
      alert("설문 등록자가 아닙니다.")
      router.push("/")
    }
  }, [pathname])

  return (
    <StyledEndComp>
      {mounted && (
        <>
          {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
          {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}

          {isLogin && userInformation && (
            <StyledPropfileLink href="/mypage">
              {profileImg && <Image src={profileImg} alt="man" width={20} height={20} style={{ border: "1px solid black", borderRadius: "50%" }}></Image>
              }<StyledProfileName>{userInformation.name}</StyledProfileName>
            </StyledPropfileLink>
          )}
        </>
      )}
    </StyledEndComp>
  );
};

export default EndComponent;
