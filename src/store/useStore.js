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
const activeCourses = [
  {
    id: 1,
    percent: 67,
    name: "Брендинг та PR",
    status: "Active",
  },
  {
    id: 2,
    percent: 30,
    name: "Database development та трьохланкові...",
    status: "Active",
  },
  {
    id: 3,
    percent: 45,
    name: "Комп’ютерні мережі",
    status: "Active",
  },
  {
    id: 4,
    percent: 67,
    name: "Професіна практика програмної інжене... ",
    status: "Active",
  },
  {
    id: 5,
    percent: 100,
    name: "Розробка адаптивних web-інтерфейсів...",
    status: "Active",
  },
  {
    id: 6,
    percent: 63,
    name: "Якість програмного забезпечення т...",
    status: "Active",
  },
  {
    id: 7,
    percent: 23,
    name: "Іноземна мова",
    status: "Active",
  },
  {
    id: 8,
    percent: 65,
    name: "Брендинг та PR",
    status: "Active",
  },
  {
    id: 9,
    percent: 23,
    name: "Брендинг та PR",
    status: "Active",
  },
  {
    id: 10,
    percent: 76,
    name: "Брендинг та PR",
    status: "Active",
  },
];

const useStore = create((set) => ({
  users: usersState,
  activeCourses: activeCourses,
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
