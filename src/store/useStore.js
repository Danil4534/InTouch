import { useState } from "react";
import { create } from "zustand";

/**
 * Zustand hook for managing user authentication and active courses state.
 *
 * @typedef {Object} User
 * @property {number} id - The unique identifier for the user.
 * @property {string} nick - The nickname of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 *
 * @typedef {Object} Course
 * @property {number} id - The unique identifier for the course.
 * @property {number} percent - The percentage completion of the course.
 * @property {string} name - The name of the course.
 * @property {string} status - The status of the course (e.g., Active).
 *
 * @typedef {Object} StoreState
 * @property {User[]} users - The array of users.
 * @property {Course[]} activeCourses - The array of active courses.
 * @property {boolean} authModalState - The state of the authentication modal.
 * @property {boolean} loginFormActive - The state of the login form.
 * @property {boolean} registerFormActive - The state of the register form.
 * @property {function} setAuthModalActive - A function to set the authentication modal state to active.
 * @property {function} setAuthModalDisActive - A function to set the authentication modal state to inactive.
 * @property {function} setSwapLoginRegister - A function to switch to the register form.
 * @property {function} setSwapRegisterLogin - A function to switch to the login form.
 *
 * @typedef {Object} SetStateFn
 * @property {function} set - A function to set the store state.
 *
 * @typedef {function(SetStateFn): StoreState} CreateStore
 *
 * @type {CreateStore}
 * @param {SetStateFn} set - Function to set the store state.
 * @returns {StoreState} The state and actions for managing user authentication and active courses.
 */

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
  isChecked: localStorage.getItem("selectedTheme") === "light",
  switchCheck: () => set((state) => ({ isChecked: !state.isChecked })),
  users: usersState,
  activeCourses: activeCourses,
  authModalState: false,
  loginFormActive: true,
  settingsModalState: false,
  registerFormActive: false,
  setSettingsModalActive: () => set({ settingsModalState: true }),
  setSettingsModalDisActive: () => set({ settingsModalState: false }),
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
