import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router.jsx";
import global_en from "./translation/en/global.json";
import global_ua from "./translation/ua/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  intrepolation: { escapeValue: false },
  lng: `${localStorage.getItem("lang")}`,
  resources: {
    en: {
      global: global_en,
    },
    ua: {
      global: global_ua,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
