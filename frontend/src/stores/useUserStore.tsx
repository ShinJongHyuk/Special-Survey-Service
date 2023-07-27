import {create} from 'zustand'

const useUserStore = create((set) => ({
    isLogin: false,
    userInformation : {
        refreshToken: null,
        accessToken : null,
    },
    
    setUserInformation : (data:any) => set((state:any) => ({
        userInformation : {
            ...state.userInformation,
            ["refreshToken"] : data.refreshToken,
            ["accessToken"] : data.accessToken,
        }
    })),
    login: () => set(() => ({isLogin: true})),
    logout: () => set(() => ({isLogin: false}))
}))

export default useUserStore