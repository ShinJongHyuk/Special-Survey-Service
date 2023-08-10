import { useLogoutHook } from "@/Hooks/user/useLogoutHook";
import useUserStore from "@/stores/useUserStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StyledEndComp, StyleLogout, StyledNavLink, StyledPropfileLink, StyledProfileName } from "../Navbar.styled";
import { useLoginHook } from "@/Hooks/user/useUserInformationHook";

const EndComponent = () => {
  const [isLogin, userInformation] = useUserStore((state: any) => [state.isLogin, state.userInformation]);
  const { hanedleLogout } = useLogoutHook();
  const { refreshUserInformation } = useLoginHook();
  const [mounted, setMounted] = useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    if (isLogin && userInformation) {
      setProfileImg(userInformation.gender === "MAN" ? "/manIcon.png" : "/womanIcon.png");
    }
  }, [isLogin]);

  useEffect(() => {
    refreshUserInformation();
  }, []);

  return (
    <StyledEndComp>
      {mounted && (
        <>
          {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
          {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}

          {isLogin && userInformation && (
            <StyledPropfileLink href="/mypage">
              <Image src={profileImg} alt="man" width={20} height={20} style={{ border: "1px solid black", borderRadius: "50%" }}></Image>
              <StyledProfileName>{userInformation.name}</StyledProfileName>
            </StyledPropfileLink>
          )}
        </>
      )}
    </StyledEndComp>
  );
};

export default EndComponent;
