import {create} from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist((set) => ({
    isLogin: false,
    accessToken: null,
    refreshToken : null,
    userInformation : {},
    login: () => set(() => ({ isLogin: true })),
    logout: () => set(() => ({ isLogin: false })),
    setAccessToken : (data:any) => set(() =>({accessToken:data})),
    setRefreshToken : (data:any) => set(() =>({refreshToken:data})),
    setUserInformation : (data:any) => set((state:any) => ({
      userInformation : data
    }))
  }),{
    name: 'userToken'
  })
)
export default useUserStore