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
  setAuthModalActive: () => set({ authModalState: true }),
  setAuthModalDisActive: () => set({ authModalState: false }),
}));
export default useStore;
