import { useRouter } from "next/navigation"
import useUserStore from "@/stores/useUserStore"
export const useLogoutHook = () => {
    const router = useRouter()
    const setUserInformation = useUserStore((state:any) => state.setUserInformation)
    const logout = useUserStore((state:any) => state.logout)

    const hanedleLogout = () => {
        router.push("/")
        localStorage.setItem("accessToken", "")
        localStorage.setItem("refreshToken", "")
        logout()
        setUserInformation(null)
    }
    return {hanedleLogout}
}
    