import useUserStore from "@/stores/useUserStore";
import userDetailGet from "@/api/user/userDetailGet";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const useLoginHook = () => {
  const setUserInformation = useUserStore((state: any) => state.setUserInformation);
  const login = useUserStore((state: any) => state.login);
  const router = useRouter();
  const pathname: string = usePathname();
  const ignorePathName = ["/", "/surveylist", "/login", "/signup", "/reset-password", "/find-id"];
  const refreshUserInformation = async () => {
    const userInfo = await userDetailGet();
    if (userInfo?.email) {
      //console.log(userInfo)
      login();
      setUserInformation(userInfo);
      return;
    }
    if (ignorePathName.includes(pathname) || pathname.startsWith("/surveydetail")) {
      return;
    }

    router.push("/");
  };
  useEffect(() => {
    const getUserInfo = async () => {
      return await userDetailGet();
    }
    const userInfo: any = getUserInfo();

    if (pathname === "/payment" || pathname === "/makesurvey") {
      if (userInfo?.email) {
        //console.log(userInfo.email)
        if (userInfo.email !== "admin@naver.com") {

          alert("설문 등록자가 아닙니다.")
          router.push("/")
        }
      }
    }
  }, [pathname])

  return { refreshUserInformation };
};
