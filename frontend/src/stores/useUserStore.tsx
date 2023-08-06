import {create} from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist((set) => ({
    isLogin: false,
    userInformation : {},
    login: () => set(() => ({ isLogin: true })),
    logout: () => set(() => ({ isLogin: false })),
    setUserInformation : (data:any) => set((state:any) => ({
      userInformation : data
    }))
  }),{
    name: "userStore"
  })
)
export default useUserStore
