import { useLogoutHook } from "@/Hooks/user/useLogoutHook";
import useUserStore from "@/stores/useUserStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StyledEndComp, StyleLogout, StyledNavLink, StyledPropfileLink, StyledProfileName } from "../Navbar.styled";

const EndComponent = () => {
    const isLogin = useUserStore((state: any) => (state.isLogin))
    const { hanedleLogout } = useLogoutHook()
    const [mounted, setMounted] = useState<boolean>(false);
    const userInformation = useUserStore((state: any) => (state.userInformation));
    const profileImg = userInformation && userInformation.gender === "MAN" ? "/manIcon.png" : "/womanIcon.png";
  // const [isLogin, userInformation] = useUserStore((state: any) => [state.isLogin, state.userInformation]);
  // const { hanedleLogout } = useLogoutHook();
  // const [mounted, setMounted] = useState<boolean>(false);
  // const [profileImg, setProfileImg] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  })
    return (
        <StyledEndComp>
           {mounted ?
                <>
                {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
                {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}

                {
                (isLogin && userInformation?.gender === "MAN") ?
                (<StyledPropfileLink href="/mypage"><Image src="/manIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%"}}></Image><StyledProfileName>{userInformation.name}</StyledProfileName></StyledPropfileLink>) : 
                (isLogin && userInformation?.gender === "WOMAN") ? 
                (<StyledPropfileLink href="/mypage"><Image src="/womanIcon.png" alt="man" width={20} height={20} style={{border:"1px solid black", borderRadius:"50%"}}></Image><StyledProfileName>{userInformation.name}</StyledProfileName></StyledPropfileLink>) : null
                }

                </>
                :
                <>
                {/* <StyledNavLink href="/login">로그인</StyledNavLink>
                <StyledNavLink href="/signup">회원가입</StyledNavLink> */}
                </>

            }

        </StyledEndComp>
    )
}

// export default EndComponent
//     if (isLogin && userInformation) {
//       setProfileImg(userInformation.gender === "MAN" ? "/manIcon.png" : "/womanIcon.png");
//     }
//   }, [isLogin, userInformation]);

//   return (
//     <StyledEndComp>
//       {mounted && (
//         <>
//           {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
//           {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}

//           {userInformation && (
//             <StyledPropfileLink href="/mypage">
//               <Image src={profileImg} alt="man" width={20} height={20} style={{ border: "1px solid black", borderRadius: "50%" }}></Image>
//               <StyledProfileName>{userInformation.name}</StyledProfileName>
//             </StyledPropfileLink>
//           )}
//         </>
//       )}
//     </StyledEndComp>
//   );
// };

// export default EndComponent;
