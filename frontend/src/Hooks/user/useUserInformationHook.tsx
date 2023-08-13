import useUserStore from "@/stores/useUserStore";
import userDetailGet from "@/api/user/userDetailGet";
import { useRouter, usePathname } from "next/navigation";

export const useLoginHook = () => {
  const setUserInformation = useUserStore((state: any) => state.setUserInformation);
  const login = useUserStore((state: any) => state.login);
  const router = useRouter();
  const pathname: string = usePathname();
  const ignorePathName = ["/", "/surveylist", "/login", "/signup"];
  const refreshUserInformation = async () => {
    const userInfo = await userDetailGet();
    if (userInfo?.email) {
      login();
      setUserInformation(userInfo);
      return;
    }
    if (ignorePathName.includes(pathname) || pathname.startsWith("/surveydetail")) {
      return;
    }

    router.push("/");
  };

  return { refreshUserInformation };
};
