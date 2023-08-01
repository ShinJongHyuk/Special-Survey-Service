import { useRouter } from "next/navigation"
import useUserStore from "@/stores/useUserStore"
export const useLogoutHook = () => {
    const router = useRouter()
    const setAccessToken = useUserStore((state:any) => state.setAccessToken)
    const logout = useUserStore((state:any) => state.logout)

    const hanedleLogout = () => {
        setAccessToken(null)
        logout()
    }
    return {hanedleLogout}
}
    