import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    name: "",
    emailAddress: "",
    phoneNumber: "",
    month: false,
    yeare: false,
    subscriptionType: "fgs",
    OnlineService: true,
    largerStorage: false,
    CustomizableProfile: false,
  },
  updateName: (newUser: any) => set((state: any)=>({
    user: {...state.user,...newUser},
    emailAddress: {...state.user,...newUser},
    phoneNumber: {...state.user,...newUser}


  })),
}));
