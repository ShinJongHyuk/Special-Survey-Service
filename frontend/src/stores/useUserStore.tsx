import { create } from "zustand";

const useUserStore = create((set) => ({
  isLogin: false,
  userInformation: {
    id: 0,
    email: "",
    gender: "",
    age: "",
    name: "",
    phoneNumber: "",
    responseSurveyCount: 0,
    createSurveyCount: 0,
    winningGiveawayCount: 0,
    point: 0,
    birthday: "",
    refreshToken: "",
  },
  login: () =>
    set(() => ({
      isLogin: true,
      userInformation: {
        id: 0,
        email: "",
        gender: "",
        age: "",
        name: "",
        phoneNumber: "",
        responseSurveyCount: 0,
        createSurveyCount: 0,
        winningGiveawayCount: 0,
        point: 0,
        birthday: "",
        refreshToken: "",
      },
    })),
  logout: () => set(() => ({ isLogin: false })),
  setUserInformation: (data: any) =>
    set((state: any) => ({
      userInformation: data,
    })),
}));

export default useUserStore;
