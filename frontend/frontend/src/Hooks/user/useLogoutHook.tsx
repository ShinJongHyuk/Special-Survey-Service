import { useRouter } from "next/navigation"
import useUserStore from "@/stores/useUserStore"
export const useLogoutHook = () => {
    const router = useRouter()
    // const setAccessToken = useUserStore((state:any) => state.setAccessToken)
    const setUserInformation = useUserStore((state:any) => state.setUserInformation)
    const logout = useUserStore((state:any) => state.logout)

    const hanedleLogout = () => {
        // setAccessToken(null)
        localStorage.setItem("accessToken", "")
        localStorage.setItem("refreshToken", "")
        logout()
        setUserInformation(null)
    }
    return {hanedleLogout}
}
    