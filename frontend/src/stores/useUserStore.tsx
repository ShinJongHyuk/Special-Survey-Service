import {create} from 'zustand'

const useUserStore = create((set) => ({
    isLogin: false,
    email : null,
    setEmail : (data:any) => set(() => ({email: data})),
    login: () => set(() => ({isLogin: true})),
    logout: () => set(() => ({isLogin: false}))
}))

export default useUserStore