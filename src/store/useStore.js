import { useState } from "react";
import { create } from "zustand";

const usersState = [
  {
    id: 1,
    nick: "Danil Tsapok",
    email: "danil123",
    password: "123",
  },
];

const useStore = create((set) => ({
  users: usersState,
  authModalState: false,
  loginFormActive: true,
  registerFormActive: false,
  setAuthModalActive: () => set({ authModalState: true }),
  setAuthModalDisActive: () => set({ authModalState: false }),
  setSwapLoginRegister: () =>
    set((state) => ({
      loginFormActive: false,
      registerFormActive: true,
    })),
  setSwapRegisterLogin: () =>
    set((state) => ({
      loginFormActive: true,
      registerFormActive: false,
    })),
}));
export default useStore;
