import useUserStore from "@/stores/useUserStore";
import { useState, useEffect } from "react";
import userDetailGet from "@/api/user/userDetailGet";
import { useRouter } from "next/navigation";
export const useLoginHook = () => {
  const setUserInformation = useUserStore((state: any) => state.setUserInformation);
  const login = useUserStore((state: any) => state.login);
  const router = useRouter();

  const refreshUserInformation = async () => {
    const userInfo = await userDetailGet();
    if (userInfo) {
      login();
      setUserInformation(userInfo);
      return;
    }
    router.push("/");
  };

  return { refreshUserInformation };
};
