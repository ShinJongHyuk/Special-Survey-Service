import { useLogoutHook } from "@/Hooks/useLogoutHook";
import useUserStore from "@/stores/useUserStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StyledEndComp, StyleLogout, StyledNavLink, StyledPropfileLink, StyledProfileName } from "../Navbar.styled";

const EndComponent = () => {
    const isLogin = useUserStore((state: any) => (state.isLogin))
    const { hanedleLogout } = useLogoutHook()
    const [mounted, setMounted] = useState<boolean>(false);
    const userInformation = useUserStore((state: any) => (state.userInformation));
    const profileImg = userInformation.gender === "MAN" ? "/manIcon.png" : "/womanIcon.png";

    useEffect(() => {
        setMounted(true);
    });

    return (
        <StyledEndComp>
            {mounted &&

                <>
                    {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
                    {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}

                    {
                        (isLogin &&
                            <StyledPropfileLink href="/mypage">
                                <Image src={profileImg} alt="man" width={20} height={20} style={{ border: "1px solid black", borderRadius: "50%" }}></Image>
                                <StyledProfileName>{userInformation.name}</StyledProfileName>
                            </StyledPropfileLink>
                        )
                    }

                </>

            }
        </StyledEndComp>
    )
}

export default EndComponent